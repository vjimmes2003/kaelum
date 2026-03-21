import fs from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const publicDir = path.join(projectRoot, "public");
const outputDir = path.join(projectRoot, "src", "data");
const outputFile = path.join(outputDir, "gallery-manifest.json");

const IMAGE_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".svg",
  ".gif",
  ".avif",
  ".ico",
]);

const CATEGORY_RULES = [
  { match: /(^|\/)images\/ui\//i, category: "ui" },
  { match: /(^|\/)assets\/personajes\//i, category: "personajes" },
  { match: /(^|\/)images\/juego\//i, category: "juego" },
  { match: /(^|\/)images\/vision\//i, category: "media" },
  { match: /(^|\/)images\/media\//i, category: "media" },
  { match: /(^|\/)images\/branding\//i, category: "branding" },
  { match: /(^|\/)favicon\./i, category: "branding" },
  { match: /NyxtaleStudios/i, category: "branding" },
];

function toPosix(p) {
  return p.split(path.sep).join("/");
}

function guessCategory(relativePath) {
  const normalized = toPosix(relativePath);
  for (const rule of CATEGORY_RULES) {
    if (rule.match.test(normalized)) return rule.category;
  }
  return "media";
}

function prettifyName(filePath) {
  const base = path.basename(filePath, path.extname(filePath));

  return base
    .replace(/[_-]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\bui\b/gi, "UI")
    .replace(/\bqr\b/gi, "QR")
    .replace(/\bgdd\b/gi, "GDD")
    .replace(/\bdafo\b/gi, "DAFO")
    .replace(/\bcame\b/gi, "CAME")
    .replace(/\bnyxtale\b/gi, "Nyxtale")
    .replace(/\bstudios\b/gi, "Studios")
    .replace(/\w\S*/g, (txt) => {
      if (txt === txt.toUpperCase()) return txt;
      return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
    });
}

function makeId(relativePath) {
  return toPosix(relativePath)
    .replace(/\.[^.]+$/, "")
    .replace(/^\/+/, "")
    .replace(/[^a-zA-Z0-9/]+/g, "-")
    .replace(/\//g, "-")
    .replace(/-+/g, "-")
    .toLowerCase();
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const results = [];

  for (const entry of entries) {
    const abs = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      results.push(...await walk(abs));
      continue;
    }

    if (!entry.isFile()) continue;

    const ext = path.extname(entry.name).toLowerCase();
    if (!IMAGE_EXTENSIONS.has(ext)) continue;

    results.push(abs);
  }

  return results;
}

async function main() {
  const files = await walk(publicDir);

  const manifest = files
    .map((absolutePath, index) => {
      const relativeToPublic = path.relative(publicDir, absolutePath);
      const src = `/${toPosix(relativeToPublic)}`;

      return {
        id: makeId(relativeToPublic),
        title: prettifyName(relativeToPublic),
        src,
        category: guessCategory(relativeToPublic),
        description: "",
        order: index + 1,
      };
    })
    .sort((a, b) => {
      if (a.category !== b.category) {
        return a.category.localeCompare(b.category);
      }
      return a.src.localeCompare(b.src);
    })
    .map((item, index) => ({
      ...item,
      order: index + 1,
    }));

  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(outputFile, JSON.stringify(manifest, null, 2), "utf8");

  console.log(`Manifest generado: ${path.relative(projectRoot, outputFile)}`);
  console.log(`Total de imágenes detectadas: ${manifest.length}`);
}

main().catch((error) => {
  console.error("Error generando gallery-manifest.json");
  console.error(error);
  process.exit(1);
});