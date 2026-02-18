from pathlib import Path

# dump_astro.py
# Genera ASTRO_DUMP.md con todo el contenido de los .astro dentro de /src

SRC_DIR = Path("src")
OUT_FILE = Path("ASTRO_DUMP.md")

def main():
    if not SRC_DIR.exists():
        raise SystemExit(f"ERROR: No existe la carpeta '{SRC_DIR.resolve()}'")

    astro_files = sorted(SRC_DIR.rglob("*.astro"))

    if not astro_files:
        raise SystemExit("ERROR: No se han encontrado archivos .astro dentro de src/")

    with OUT_FILE.open("w", encoding="utf-8") as f:
        f.write("# Dump completo de archivos .astro\n\n")
        f.write(f"- Carpeta escaneada: `{SRC_DIR}`\n")
        f.write(f"- Archivos encontrados: **{len(astro_files)}**\n\n")

        for file_path in astro_files:
            rel_path = file_path.as_posix()

            f.write("\n---\n")
            f.write(f"## FILE: {rel_path}\n")
            f.write("---\n\n")
            f.write("```astro\n")
            try:
                content = file_path.read_text(encoding="utf-8", errors="replace")
            except Exception as e:
                content = f"// ERROR leyendo el archivo: {e}\n"
            f.write(content)
            if not content.endswith("\n"):
                f.write("\n")
            f.write("```\n")

    print(f"OK -> {OUT_FILE.resolve()} ({len(astro_files)} archivos)")

if __name__ == "__main__":
    main()
