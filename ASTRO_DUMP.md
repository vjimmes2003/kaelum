# Dump completo de archivos .astro

- Carpeta escaneada: `src`
- Archivos encontrados: **24**


---
## FILE: src/layouts/BaseLayout.astro
---

```astro
---
const {
  title = "Kaelum",
  description = "Portfolio & devlog del proyecto Kaelum.",
} = Astro.props;
const base = import.meta.env.BASE_URL;                 // "/kaelum/" en prod, "/" en local
const path = Astro.url.pathname;                       // "/kaelum/devlog/..." en prod
const rel = path.startsWith(base) ? path.slice(base.length - 1) : path; // "/devlog/..." o "/"
const is = (p: string) => rel === p || rel.startsWith(p + "/");

const pitchPdf = `${base}pitch/kaelum-pitch.pdf`;
---

<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description} />
    <title>{title}</title>

    <link rel="stylesheet" href={`${import.meta.env.BASE_URL}styles/global.css`} />
    <link rel="icon" href={`${import.meta.env.BASE_URL}favicon.ico`} />
  </head>

  <body>
    <header class="topbar">
      <div class="topbar-inner">
        <a class="brand" href="/">
          <span class="brand-dot" aria-hidden="true"></span>
          <span class="brand-name">Kaelum</span>
        </a>

        <nav class="nav">
          <a class={rel === "/" ? "pill active" : "pill"} href={base}>Inicio</a>
          <a class={is("/kaelum") ? "pill active" : "pill"} href={`${base}kaelum/`}>Resumen</a>
          <a class={is("/proyecto") ? "pill active" : "pill"} href={`${base}proyecto/`}>Proyecto</a>
          <a class={is("/vision") ? "pill active" : "pill"} href={`${base}vision/`}>Visión</a>
          <a class={is("/analisis") ? "pill active" : "pill"} href={`${base}analisis/`}>Análisis</a>
          <a class={is("/devlog") ? "pill active" : "pill"} href={`${base}devlog/`}>Devlog</a>
          <a class={is("/docs") ? "pill active" : "pill"} href={`${base}docs/`}>Docs</a>
          <a class={is("/sobre-mi") ? "pill active" : "pill"} href={`${base}sobre-mi/`}>Sobre mí</a>
          <a class="pill" href={pitchPdf} download="Kaelum_Pitch.pdf" title="Descargar Pitch (PDF)"> Pitch</a>
        </nav>
      </div>
    </header>

    <main class="wrap">
      <slot />
    </main>

    <footer class="footer">
      <div class="footer-inner">
        <span>© {new Date().getFullYear()} · Kaelum</span>
        <span class="muted">Implementación general (pendiente de cambios)</span>
      </div>
    </footer>
  </body>
</html>
```

---
## FILE: src/pages/analisis/came.astro
---

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
const base = import.meta.env.BASE_URL;
const imgUrl = `${base}images/vision/came.png`;
---

<BaseLayout
  title="Kaelum — Análisis CAME"
  description="Análisis CAME del proyecto Kaelum: qué corregimos, mantenemos, afrontamos y explotamos."
>
  <section class="hero">
    <p class="kicker">Análisis</p>
    <h1>CAME</h1>
    <p class="lead">
      El CAME convierte el diagnóstico en decisiones: qué se ajusta, qué se mantiene, qué se afronta y qué se explota.
    </p>

    <div class="actions">
      <a class="btn" href={`${base}analisis/`}>Volver al índice</a>
      <a class="btn" href={`${base}analisis/dafo/`}>Ver DAFO</a>
      <button class="btn primary" id="toggleView" type="button">Ver texto</button>
    </div>
  </section>

  {/* IMAGEN */}
  <section id="imageView" class="grid">
    <div class="card full">
      <img
        src={imgUrl}
        alt="Análisis CAME de Kaelum"
        style="width:100%; border-radius: var(--radius); display:block;"
        loading="eager"
      />

      <div class="actions" style="margin-top:12px">
        <a class="btn" href={imgUrl} download>Descargar imagen</a>
        <a class="btn" href={`${base}analisis/`}>Volver al índice</a>
      </div>
    </div>
  </section>

  {/* TEXTO */}
  <section id="textView" class="grid hidden">
    <section class="card">
      <h2>Corregir</h2>
      <p class="muted">Ajustes para evitar errores de scope y producción.</p>
      <ul class="list">
        <li><strong>Reducir alcance inicial:</strong> menos personajes/sistemas, más solidez.</li>
        <li><strong>Arte funcional primero:</strong> claridad jugable antes que espectacular.</li>
        <li><strong>Priorizar sistemas base:</strong> movimiento, disparo y feedback antes de contenido.</li>
        <li><strong>Escalonar producción artística:</strong> subir calidad cuando el core aguante.</li>
      </ul>
    </section>

    <section class="card">
      <h2>Mantener</h2>
      <p class="muted">Lo que define la identidad y no se negocia.</p>
      <ul class="list">
        <li><strong>Gunplay + movimiento</strong> como núcleo absoluto.</li>
        <li><strong>Identidad del universo y de Kael:</strong> tono, coherencia y carácter.</li>
        <li><strong>Diseño honesto:</strong> si fallas, lo sabes; si ganas, te lo curras.</li>
        <li><strong>Monetización justa:</strong> sin pay to win ni sistemas abusivos.</li>
      </ul>
    </section>

    <section class="card">
      <h2>Afrontar</h2>
      <p class="muted">Riesgos inevitables y cómo se encaran.</p>
      <ul class="list">
        <li><strong>No competir por realismo extremo:</strong> legibilidad antes que simulación.</li>
        <li><strong>Equilibrio accesible/profundo</strong> sin volverse caótico.</li>
        <li><strong>Escuchar a testers y comunidad</strong> desde pronto.</li>
        <li><strong>Iteración constante:</strong> fallar rápido, corregir rápido.</li>
      </ul>
    </section>

    <section class="card">
      <h2>Explotar</h2>
      <p class="muted">Oportunidades claras para diferenciar Kaelum.</p>
      <ul class="list">
        <li><strong>Posicionarse como shooter “honesto”.</strong></li>
        <li><strong>Disfrutable en solo y en grupo.</strong></li>
        <li><strong>Personajes con peso emocional:</strong> conexión real.</li>
        <li><strong>Historia + shooter</strong> como combo diferenciador (sin chapa).</li>
      </ul>
    </section>

    <section class="card full">
      <h2>Conclusión</h2>
      <p class="lead">
        Menos promesas, más coherencia: sólido primero, bonito después. Kaelum no quiere ser el más grande,
        quiere ser el más honesto y disfrutable.
      </p>

      <div class="actions" style="margin-top:12px">
        <a class="btn" href={`${base}analisis/`}>Volver al índice</a>
        <button class="btn primary" id="toggleView2" type="button">Ver imagen</button>
      </div>
    </section>
  </section>

  <script is:inline>
    document.addEventListener("DOMContentLoaded", () => {
      // @ts-check
      /** @type {HTMLButtonElement|null} */
      const toggleBtn = document.getElementById("toggleView");
      /** @type {HTMLButtonElement|null} */
      const toggleBtn2 = document.getElementById("toggleView2");
      /** @type {HTMLElement|null} */
      const imageView = document.getElementById("imageView");
      /** @type {HTMLElement|null} */
      const textView = document.getElementById("textView");

      if (!toggleBtn || !imageView || !textView) return;

      let showingImage = true;

      const render = () => {
        imageView.classList.toggle("hidden", !showingImage);
        textView.classList.toggle("hidden", showingImage);
        toggleBtn.textContent = showingImage ? "Ver texto" : "Ver imagen";
        if (toggleBtn2) toggleBtn2.textContent = showingImage ? "Ver imagen" : "Ver imagen";
      };

      toggleBtn.addEventListener("click", () => {
        showingImage = !showingImage;
        render();
      });

      if (toggleBtn2) {
        toggleBtn2.addEventListener("click", () => {
          showingImage = true;
          render();
        });
      }

      render();
    });
  </script>

  <style>
    .hidden { display: none !important; }
  </style>
</BaseLayout>
```

---
## FILE: src/pages/analisis/dafo.astro
---

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
const base = import.meta.env.BASE_URL;
const imgUrl = `${base}images/vision/dafo.png`;
---

<BaseLayout
  title="Kaelum — Análisis DAFO"
  description="Análisis DAFO del proyecto Kaelum: fortalezas, debilidades, oportunidades y amenazas."
>
  <section class="hero">
    <p class="kicker">Análisis</p>
    <h1>DAFO</h1>
    <p class="lead">
      Evaluación estratégica honesta: lo que suma, lo que limita, lo que puede pasar y lo que se puede aprovechar.
    </p>

    <div class="actions">
      <a class="btn" href={`${base}analisis/`}>Volver al índice</a>
      <a class="btn" href={`${base}analisis/came/`}>Ver CAME</a>
      <button class="btn primary" id="toggleView" type="button">Ver texto</button>
    </div>
  </section>

  {/* IMAGEN */}
  <section id="imageView" class="grid">
    <div class="card full">
      <img
        src={imgUrl}
        alt="Análisis DAFO de Kaelum"
        style="width:100%; border-radius: var(--radius); display:block;"
        loading="eager"
      />

      <div class="actions" style="margin-top:12px">
        <a class="btn" href={imgUrl} download>Descargar imagen</a>
        <a class="btn" href={`${base}analisis/`}>Volver al índice</a>
      </div>
    </div>
  </section>

  {/* TEXTO */}
  <section id="textView" class="grid hidden">
    <section class="card">
      <h2>Fortalezas</h2>
      <ul class="list">
        <li>Experiencia como jugador para detectar buenas/malas mecánicas.</li>
        <li>Capacidad para diseñar sistemas comprensibles y explicables.</li>
        <li>Enfoque en código limpio y trabajo colaborativo.</li>
        <li>Identidad del proyecto definida desde temprano (Kael + universo).</li>
      </ul>
    </section>

    <section class="card">
      <h2>Debilidades</h2>
      <ul class="list">
        <li>Experiencia limitada en proyectos de esta escala.</li>
        <li>Desarrollo narrativo exigente si se descontrola.</li>
        <li>Carga alta en arte/animación si se intenta “demasiado pronto”.</li>
        <li>Riesgo de bloqueos técnicos durante el desarrollo.</li>
      </ul>
    </section>

    <section class="card">
      <h2>Oportunidades</h2>
      <ul class="list">
        <li>Interés creciente por shooters accesibles pero profundos.</li>
        <li>Jugadores cansados de inconsistencias y sistemas injustos.</li>
        <li>Historia + shooter como diferenciador sin romper ritmo.</li>
        <li>Potencial de comunidad y crecimiento del multijugador.</li>
      </ul>
    </section>

    <section class="card">
      <h2>Amenazas</h2>
      <ul class="list">
        <li>Mercado saturado.</li>
        <li>Competencia con lanzamientos grandes.</li>
        <li>Proyectos similares con más recursos.</li>
        <li>Dificultad para destacar sin propuesta clara.</li>
      </ul>
    </section>

    <section class="card full">
      <h2>Notas</h2>
      <p class="muted">
        El DAFO no es “un trabajo de clase bonito”: es el mapa de riesgos para tomar decisiones con cabeza.
        El siguiente paso lógico es el CAME (acciones concretas).
      </p>

      <div class="actions" style="margin-top:12px">
        <a class="btn" href={`${base}analisis/`}>Volver al índice</a>
        <button class="btn primary" id="toggleView2" type="button">Ver imagen</button>
      </div>
    </section>
  </section>

  <script is:inline>
    document.addEventListener("DOMContentLoaded", () => {
      // @ts-check
      /** @type {HTMLButtonElement|null} */
      const toggleBtn = document.getElementById("toggleView");
      /** @type {HTMLButtonElement|null} */
      const toggleBtn2 = document.getElementById("toggleView2");
      /** @type {HTMLElement|null} */
      const imageView = document.getElementById("imageView");
      /** @type {HTMLElement|null} */
      const textView = document.getElementById("textView");

      if (!toggleBtn || !imageView || !textView) return;

      let showingImage = true;

      const render = () => {
        imageView.classList.toggle("hidden", !showingImage);
        textView.classList.toggle("hidden", showingImage);
        toggleBtn.textContent = showingImage ? "Ver texto" : "Ver imagen";
      };

      toggleBtn.addEventListener("click", () => {
        showingImage = !showingImage;
        render();
      });

      if (toggleBtn2) {
        toggleBtn2.addEventListener("click", () => {
          showingImage = true;
          render();
        });
      }

      render();
    });
  </script>

  <style>
    .hidden { display: none !important; }
  </style>
</BaseLayout>
```

---
## FILE: src/pages/analisis/index.astro
---

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
const base = import.meta.env.BASE_URL;
---

<BaseLayout
  title="Kaelum — Análisis"
  description="Análisis del proyecto Kaelum: DAFO y CAME. Riesgos, fortalezas, oportunidades y acciones."
>
  <section class="hero">
    <p class="kicker">Análisis</p>
    <h1>DAFO + CAME</h1>
    <p class="lead">
      Aquí está la parte “seria” del proyecto: <strong>por qué Kaelum tiene sentido</strong>, qué riesgos reales tiene,
      qué oportunidades aprovecha, y <strong>qué acciones concretas</strong> se toman para no morir por scope.
    </p>

    <div class="meta">
      <span class="tag">DAFO</span>
      <span class="tag">CAME</span>
      <span class="tag">Decisiones</span>
      <span class="tag">Scope control</span>
    </div>

    <div class="actions">
      <a class="btn primary" href={`${base}analisis/dafo/`}>Ver DAFO</a>
      <a class="btn" href={`${base}analisis/came/`}>Ver CAME</a>
      <a class="btn" href={`${base}vision/`}>Ir a Visión</a>
      <a class="btn" href={`${base}docs/`}>Ir a Docs</a>
    </div>
  </section>

  <div class="grid">
    <article class="card">
      <h2>📌 DAFO</h2>
      <p class="muted">
        Foto clara del proyecto: <strong>Fortalezas</strong>, <strong>Debilidades</strong>,
        <strong>Oportunidades</strong> y <strong>Amenazas</strong>.
      </p>
      <p class="small">Ideal para evaluación y coherencia.</p>
      <div class="actions">
        <a class="btn primary" href={`${base}analisis/dafo/`}>Abrir DAFO</a>
      </div>
    </article>

    <article class="card">
      <h2>🧭 CAME</h2>
      <p class="muted">
        Traducción del DAFO a acción: <strong>Corregir</strong>, <strong>Afrontar</strong>,
        <strong>Mantener</strong> y <strong>Explotar</strong>.
      </p>
      <p class="small">Esto es lo que evita que se quede en “un análisis bonito”.</p>
      <div class="actions">
        <a class="btn primary" href={`${base}analisis/came/`}>Abrir CAME</a>
      </div>
    </article>

    <article class="card full">
      <h2>Cómo leer esta sección</h2>
      <p class="muted">
        Si vienes por primera vez: empieza por <strong>Visión</strong> (moodboard) y luego pásate por aquí.
        Si vienes a evaluar: aquí tienes la justificación y el plan de acción en 2 clics.
      </p>
      <div class="actions" style="margin-top:10px">
        <a class="btn" href={`${base}vision/`}>Abrir Visión</a>
        <a class="btn" href={`${base}kaelum/`}>Volver a Proyecto</a>
      </div>
    </article>
  </div>
</BaseLayout>
```

---
## FILE: src/pages/devlog/index.astro
---

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
---

<BaseLayout title="Kaelum – Devlog" description="Entradas semanales del desarrollo de Kaelum.">
  <section class="hero">
    <p class="kicker">Devlog</p>
    <h1>Progreso semanal</h1>
    <p class="lead">
      Entradas cortas y directas: qué se decidió, por qué, y qué viene después.
      El resumen oficial del proyecto está en <a href={`${import.meta.env.BASE_URL}kaelum/`}><strong>/kaelum</strong></a>.
    </p>
  </section>

  <div class="grid">
    <article class="card">
      <h3>Semana 1 · Concepto y enfoque</h3>
      <p class="muted">Definición del rumbo: armas primero, habilidades como extra, y alcance realista.</p>
      <div class="actions">
        <a class="btn primary" href={`${import.meta.env.BASE_URL}devlog/semana-1/`}>Leer</a>
      </div>
    </article>

    <article class="card">
      <h3>Semana 2 · Mundo y Kael</h3>
      <p class="muted">Tono, ambientación y cómo encajar narrativa contextual sin frenar el gameplay.</p>
      <div class="actions">
        <a class="btn primary" href={`${import.meta.env.BASE_URL}devlog/semana-2/`}>Leer</a>
      </div>
    </article>

    <article class="card">
      <h3>Semana 3 · Prototipo del core</h3>
      <p class="muted">Movimiento + arma base + primeras pruebas reales para validar sensaciones.</p>
      <div class="actions">
        <a class="btn primary" href={`${import.meta.env.BASE_URL}devlog/semana-3/`}>Leer</a>
      </div>
    </article>

    <article class="card">
      <h3>Semana 4 · Feedback y greybox</h3>
      <p class="muted">Pulido de impacto, claridad y primer mapa de pruebas para medir flow.</p>
      <div class="actions">
        <a class="btn primary" href={`${import.meta.env.BASE_URL}devlog/semana-4/`}>Leer</a>
      </div>
    </article>
  </div>
</BaseLayout>
```

---
## FILE: src/pages/devlog/semana-1.astro
---

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
---

<BaseLayout
  title="Kaelum – Devlog · Semana 1"
  description="Semana 1 del devlog de Kaelum: dirección del juego, pilares y alcance inicial."
>
  <section class="hero">
    <p class="kicker">Devlog</p>
    <h1>Semana 1 · Dirección, pilares y alcance</h1>
    <p class="lead">
      Esta semana no va de “inventar mil cosas”, va de dejar claro el rumbo. Definir qué es Kaelum,
      qué NO va a ser, y cómo evitar el clásico error de querer un juego enorme y acabar entregando una demo rota.
    </p>

    <div class="actions">
      <a class="btn" href={`${import.meta.env.BASE_URL}kaelum/`}>Resumen del proyecto</a>
      <a class="btn" href={`${import.meta.env.BASE_URL}docs/folleto/`}>Folleto (A4)</a>
      <a class="btn" href={`${import.meta.env.BASE_URL}docs/gdd/`}>GDD (PDF)</a>
    </div>
  </section>

  <div class="grid">
    <section class="card full">
      <h2>Decisión principal</h2>
      <p class="muted">
        Kaelum será un <strong>shooter en primera persona</strong> donde el núcleo es el arma y el movimiento.
        Las habilidades existen, pero como <strong>extra táctico</strong>, no como “el juego entero”.
        Si disparar y moverte no es divertido, da igual lo bonito que sea el lore.
      </p>
    </section>

    <section class="card">
      <h2>Qué quiero que sienta el jugador</h2>
      <ul class="list">
        <li><strong>Fluidez:</strong> moverte se siente bien incluso sin pelear.</li>
        <li><strong>Calidad de gunplay:</strong> feedback claro, lectura limpia.</li>
        <li><strong>Curiosidad:</strong> el mundo invita a desviarte y descubrir cosas.</li>
        <li><strong>Épico sin postureo:</strong> Kael no necesita “ser famoso” para imponer.</li>
      </ul>
    </section>

    <section class="card">
      <h2>Qué NO va a ser (para no morir de scope)</h2>
      <ul class="list">
        <li>Un RPG gigante con árboles infinitos y 70 sistemas.</li>
        <li>Un “Fallout” con 200 misiones y 100 horas de historia.</li>
        <li>Parkour exagerado que haga imposible apuntar y balancear.</li>
        <li>Cosméticos desde el minuto 1 (primero jugable, luego ya veremos).</li>
      </ul>
      <p class="small" style="margin-top:10px">
        La regla: <strong>pocas cosas, pero bien hechas</strong>.
      </p>
    </section>

    <section class="card full">
      <h2>Pilares (filtro para decidir features)</h2>
      <div class="grid" style="margin-top:10px">
        <div class="card" style="grid-column: span 6;">
          <h3>1) Armas primero</h3>
          <p class="muted">El arma manda. Las habilidades apoyan (utilidad/daño/especial).</p>
        </div>
        <div class="card" style="grid-column: span 6;">
          <h3>2) Movimiento fluido</h3>
          <p class="muted">Ágil, controlado y disfrutable. Sin “parkour imposible”.</p>
        </div>
        <div class="card" style="grid-column: span 6;">
          <h3>3) Curiosidad premiada</h3>
          <p class="muted">Detalles, textos, rutas y microeventos que recompensan explorar.</p>
        </div>
        <div class="card" style="grid-column: span 6;">
          <h3>4) Alcance realista</h3>
          <p class="muted">Primero algo jugable y estable. Luego se embellece.</p>
        </div>
      </div>
    </section>

    <section class="card full">
      <h2>Estructura del juego (single vs multi)</h2>
      <p class="muted">
        Para que el proyecto sea coherente y balanceable, se separa claramente:
      </p>

      <div class="grid" style="margin-top:10px">
        <div class="card" style="grid-column: span 6;">
          <h3>Historia (Singleplayer)</h3>
          <ul class="list">
            <li>Kael como protagonista total.</li>
            <li>Progresión ligera: habilidades/equipo sin líos.</li>
            <li>Narrativa contextual (sin cinemáticas eternas).</li>
            <li>Mundo semiabierto con exploración.</li>
          </ul>
        </div>

        <div class="card" style="grid-column: span 6;">
          <h3>Multijugador (Competitivo)</h3>
          <ul class="list">
            <li>Partidas cortas (5–15 min) y modos por rondas.</li>
            <li>Roster separado (Kael no es jugable por balance).</li>
            <li>El foco es diversión + skill + objetivos claros.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card full">
      <h2>Alcance inicial (lo que sí se promete)</h2>
      <p class="muted">
        Esto es lo que hace que el proyecto tenga posibilidades reales de cerrarse:
      </p>
      <ul class="list">
        <li><strong>2 modos:</strong> Team Deathmatch + Buscar y destruir (rondas).</li>
        <li><strong>2 mapas:</strong> uno “chill” para TDM y otro orientado a rondas.</li>
        <li><strong>Roster inicial:</strong> objetivo 6 personajes (se empieza por 2–3 en prototipo).</li>
        <li><strong>Habilidades limitadas:</strong> claras, balanceables (sin árboles gigantes).</li>
      </ul>
    </section>

    <section class="card">
      <h2>Riesgos detectados</h2>
      <ul class="list">
        <li><strong>Scope creep:</strong> querer añadir demasiado “porque mola”.</li>
        <li><strong>Balance:</strong> demasiadas habilidades = infierno.</li>
        <li><strong>Arte temprano:</strong> priorizar bonito antes que jugable.</li>
      </ul>
    </section>

    <section class="card">
      <h2>Cómo los evitamos</h2>
      <ul class="list">
        <li>Un filtro: si no mejora pilares, no entra.</li>
        <li>Pocas habilidades por personaje (2–3).</li>
        <li>Primero prototipo estable, luego estética.</li>
      </ul>
    </section>

    <section class="card full">
      <h2>Resultado de la semana</h2>
      <ul class="list">
        <li>Dirección definida: <strong>FPS + armas primero</strong>.</li>
        <li>Pilares cerrados como criterio de diseño.</li>
        <li>Alcance inicial aterrizado (2 modos, 2 mapas, roster controlado).</li>
        <li>Separación single/multi con motivo real (diseño y balance).</li>
      </ul>

      <h2 style="margin-top:14px">Checklist (entregable)</h2>
      <ul class="list">
        <li>El juego tiene rumbo y objetivo claros.</li>
        <li>Se ha evitado un RPG infinito (scope realista).</li>
        <li>Se ha definido qué se hace primero (core jugable).</li>
      </ul>

      <h2 style="margin-top:14px">Siguiente semana</h2>
      <p class="lead" style="margin-top:0">
        Semana 2: mundo + tono + Kael. Definir identidad sin convertir esto en un libro.
      </p>

      <div class="actions">
        <a class="btn primary" href={`${import.meta.env.BASE_URL}devlog/semana-2/`}>Ir a Semana 2</a>
        <a class="btn" href={`${import.meta.env.BASE_URL}devlog/`}>Volver al índice</a>
      </div>
    </section>
  </div>
</BaseLayout>
```

---
## FILE: src/pages/devlog/semana-2.astro
---

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
---

<BaseLayout
  title="Kaelum – Devlog · Semana 2"
  description="Semana 2 del devlog de Kaelum: mundo, tono y personaje principal (Kael) con narrativa contextual."
>
  <section class="hero">
    <p class="kicker">Devlog</p>
    <h1>Semana 2 · Mundo, tono y Kael</h1>
    <p class="lead">
      Esta semana la meta es que Kaelum tenga identidad. No un “shooter genérico con magia”, sino un universo reconocible,
      y un protagonista con carácter. Todo sin romper la regla: <strong>el gameplay va primero</strong>.
    </p>

    <div class="actions">
      <a class="btn" href={`${import.meta.env.BASE_URL}kaelum/`}>Resumen del proyecto</a>
      <a class="btn" href={`${import.meta.env.BASE_URL}docs/folleto/`}>Folleto (A4)</a>
      <a class="btn" href={`${import.meta.env.BASE_URL}docs/gdd/`}>GDD (PDF)</a>
    </div>
  </section>

  <div class="grid">
    <section class="card full">
      <h2>Dirección del mundo: “moderno-medieval”</h2>
      <p class="muted">
        El mundo se siente como si hubiera <strong>infraestructura moderna</strong> (ciudades bien construidas, rutas claras,
        organización) pero con <strong>estética y mentalidad medieval</strong> (arquitectura, símbolos, jerarquías, prejuicios).
        Es identificable al instante: no hace falta explicarlo con una cinemática.
      </p>
      <ul class="list">
        <li>El entorno cuenta cosas: carteles, normas, propaganda, rumores.</li>
        <li>La curiosidad se premia: información útil + lore opcional + pequeños hallazgos.</li>
      </ul>
    </section>

    <section class="card">
      <h2>Tono</h2>
      <ul class="list">
        <li><strong>Épico</strong> (momentos puntuales, no todo el rato).</li>
        <li><strong>Misterio</strong> (siempre hay “algo” detrás).</li>
        <li><strong>Contextual</strong> (la historia vive en el mundo, no te frena).</li>
      </ul>
      <p class="small" style="margin-top:10px">
        La idea no es “te cuento una película”, es “te meto en un mundo que te apetece explorar”.
      </p>
    </section>

    <section class="card">
      <h2>Regla de oro narrativa</h2>
      <p class="muted">
        Aunque haya misiones principales, secundarias y guiños, la narrativa debe funcionar como capas:
        <strong>si solo quieres jugar, juegas</strong>. Si quieres profundizar, el mundo te da herramientas.
      </p>
      <ul class="list">
        <li>Textos cortos y con intención (no biblias).</li>
        <li>Conversaciones que no bloquean el control.</li>
        <li>Información repartida por sitios (ciudad = “noticias”, mercados, guardias).</li>
      </ul>
    </section>

    <section class="card full">
      <h2>Kael (quién es de verdad)</h2>
      <p class="muted">
        Kael no es “el héroe perfecto” ni “el elegido con aura”. Es alguien que ha vivido el rechazo y,
        aun así, no se convierte en un villano. Su motor es simple y peligroso a la vez: <strong>justicia</strong>.
        No por aplausos, no por gloria, sino porque no soporta mirar hacia otro lado cuando cree que algo es injusto.
      </p>

      <div class="grid" style="margin-top:10px">
        <div class="card" style="grid-column: span 6;">
          <h3>Rasgos clave</h3>
          <ul class="list">
            <li><strong>Curioso:</strong> se fija en detalles, investiga, pregunta.</li>
            <li><strong>Determinante:</strong> si decide actuar, va hasta el final.</li>
            <li><strong>Orgulloso:</strong> no pide permiso para existir.</li>
            <li><strong>Humano:</strong> duda, se rompe, y aun así sigue.</li>
          </ul>
        </div>

        <div class="card" style="grid-column: span 6;">
          <h3>Cómo se nota en el juego</h3>
          <ul class="list">
            <li>Sus decisiones importan, pero Kael mantiene carácter.</li>
            <li>No se “vende” por ser aceptado.</li>
            <li>Su curiosidad abre rutas/verdades del mundo.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card full">
      <h2>Traducción directa a diseño (features concretas)</h2>
      <p class="muted">
        Esto es clave para que no se quede en “lore bonito”. El personaje y el mundo se tienen que notar jugando:
      </p>
      <ul class="list">
        <li><strong>Reacciones de NPC (simple):</strong> estados tipo “confianza / sospecha” según decisiones (sin árbol gigante).</li>
        <li><strong>Curiosidad premiada:</strong> notas cortas, carteles y rumores que abren microobjetivos o recompensas.</li>
        <li><strong>Dilemas rápidos:</strong> ayudar / ignorar / intervenir con consecuencias visibles (no texto infinito).</li>
        <li><strong>Ambientación viva:</strong> “noticias” en ciudades que reflejan eventos recientes (mundo reacciona).</li>
      </ul>
    </section>

    <section class="card">
      <h2>Multi: por qué Kael no es jugable</h2>
      <p class="muted">
        El multijugador es un universo competitivo separado, con personajes “random” para no romper balance.
        Kael define el lore, pero no entra en el roster competitivo.
      </p>
    </section>

    <section class="card">
      <h2>Progreso (filosofía)</h2>
      <ul class="list">
        <li><strong>Single:</strong> mejoras ligeras de equipamiento/habilidades.</li>
        <li><strong>Multi:</strong> si hay progreso, que sea estético (a futuro).</li>
        <li>No cosméticos al inicio: primero identidad + core.</li>
      </ul>
    </section>

    <section class="card full">
      <h2>Resultado de la semana</h2>
      <ul class="list">
        <li>Dirección del mundo cerrada (“moderno-medieval” reconocible).</li>
        <li>Reglas narrativas claras (contextual, opcional, sin frenar gameplay).</li>
        <li>Kael definido con carácter y motor moral claro.</li>
        <li>Traducción a features: el lore se nota jugando.</li>
      </ul>

      <h2 style="margin-top:14px">Checklist (entregable)</h2>
      <ul class="list">
        <li>Identidad visual/tonal definida para guiar arte y UI.</li>
        <li>Kael explicado como personaje útil para diseño, no solo historia.</li>
        <li>El mundo tiene mecanismos para contarse sin cinemáticas.</li>
      </ul>

      <h2 style="margin-top:14px">Siguiente semana</h2>
      <p class="lead" style="margin-top:0">
        Semana 3: prototipo del core (movimiento + arma base + feedback). Si eso no engancha, lo demás da igual.
      </p>

      <div class="actions">
        <a class="btn primary" href={`${import.meta.env.BASE_URL}devlog/semana-3/`}>Ir a Semana 3</a>
        <a class="btn" href={`${import.meta.env.BASE_URL}devlog/`}>Volver al índice</a>
      </div>
    </section>
  </div>
</BaseLayout>
```

---
## FILE: src/pages/devlog/semana-3.astro
---

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
---

<BaseLayout
  title="Kaelum – Devlog · Semana 3"
  description="Semana 3 del devlog de Kaelum: prototipo del core (movimiento + arma base + feedback) y primeras sensaciones."
>
  <section class="hero">
    <p class="kicker">Devlog</p>
    <h1>Semana 3 · Prototipo del core: movimiento + arma base</h1>
    <p class="lead">
      Esta semana es la más importante del proyecto: si moverte y disparar no engancha, el resto es decoración.
      El objetivo ha sido montar un prototipo simple pero sólido y medible.
    </p>

    <div class="actions">
      <a class="btn" href={`${import.meta.env.BASE_URL}kaelum/`}>Resumen del proyecto</a>
      <a class="btn" href={`${import.meta.env.BASE_URL}docs/gdd/`}>GDD (PDF)</a>
      <a class="btn" href={`${import.meta.env.BASE_URL}devlog/`}>Volver al índice</a>
    </div>
  </section>

  <div class="grid">
    <section class="card full">
      <h2>Objetivo de la semana</h2>
      <p class="muted">
        Un “core loop” básico y estable: <strong>moverte → apuntar → disparar → recibir feedback</strong>.
        Nada de añadir features nuevas si lo básico no funciona.
      </p>
    </section>

    <section class="card">
      <h2>Movimiento (qué se prioriza)</h2>
      <ul class="list">
        <li><strong>Lectura limpia:</strong> aceleración y frenado controlados (sin sensación “flotante”).</li>
        <li><strong>Respuesta:</strong> input inmediato, sin delay raro.</li>
        <li><strong>Consistencia:</strong> que moverte se sienta igual siempre.</li>
        <li><strong>Sin parkour loco:</strong> ágil sí, pero balanceable.</li>
      </ul>
    </section>

    <section class="card">
      <h2>Arma base (mínimo viable)</h2>
      <ul class="list">
        <li><strong>Disparo claro:</strong> cadencia, daño y distancia razonables.</li>
        <li><strong>Feedback:</strong> impacto visible + sensación de golpe (aunque sea básico).</li>
        <li><strong>Recoil controlable:</strong> suficiente para “skill”, no para frustrar.</li>
        <li><strong>Audio/FX simple:</strong> lo mínimo para sentir potencia (sin polish final).</li>
      </ul>
    </section>

    <section class="card full">
      <h2>Qué se midió (para no autoengañarnos)</h2>
      <p class="muted">
        Esto es clave: no vale “me parece que va bien”. Se probaron cosas concretas:
      </p>
      <ul class="list">
        <li>¿Cuánto tardas en apuntar y acertar tras un sprint?</li>
        <li>¿Se entiende cuándo aciertas y cuándo fallas?</li>
        <li>¿El recoil te permite mejorar con práctica?</li>
        <li>¿Moverte se siente divertido aunque no dispares?</li>
      </ul>
    </section>

    <section class="card">
      <h2>Problemas encontrados</h2>
      <ul class="list">
        <li>Recoil: o era inexistente o parecía “temblor” sin sentido.</li>
        <li>Feedback de impacto: demasiado suave → no se sentía contundente.</li>
        <li>Movimiento: al ajustar velocidad, se perdía control en giros.</li>
      </ul>
    </section>

    <section class="card">
      <h2>Cómo se resolvieron</h2>
      <ul class="list">
        <li>Recoil: patrón simple y predecible (aprendes, no sufres).</li>
        <li>Impacto: hit feedback básico (visual/sonoro) con prioridad a claridad.</li>
        <li>Movimiento: ajuste fino de aceleración/frenado para control.</li>
      </ul>
    </section>

    <section class="card full">
      <h2>Resultado de la semana</h2>
      <ul class="list">
        <li>Prototipo funcional del core: moverte y disparar ya tiene identidad.</li>
        <li>Primera versión de arma base con recoil y lectura razonable.</li>
        <li>Lista clara de cosas que pulir antes de añadir contenido.</li>
      </ul>

      <h2 style="margin-top:14px">Siguiente semana</h2>
      <p class="lead" style="margin-top:0">
        Semana 4: feedback y sensación. No añadir “cosas”, sino hacer que lo básico se sienta brutal.
      </p>

      <div class="actions">
        <a class="btn primary" href={`${import.meta.env.BASE_URL}devlog/semana-4/`}>Ir a Semana 4</a>
        <a class="btn" href={`${import.meta.env.BASE_URL}devlog/`}>Volver al índice</a>
      </div>
    </section>
  </div>
</BaseLayout>
```

---
## FILE: src/pages/devlog/semana-4.astro
---

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
---

<BaseLayout
  title="Kaelum – Devlog · Semana 4"
  description="Semana 4 del devlog de Kaelum: mejora de sensaciones (feedback, impacto, UI mínima) y primer mapa greybox."
>
  <section class="hero">
    <p class="kicker">Devlog</p>
    <h1>Semana 4 · Sensación, feedback y primer mapa greybox</h1>
    <p class="lead">
      Semana de “hacer que se sienta bien”. Nada de features nuevas si el disparo todavía no da gusto.
      Aquí se pule: impacto, claridad, ritmo y un espacio real para probar (greybox).
    </p>

    <div class="actions">
      <a class="btn" href={`${import.meta.env.BASE_URL}devlog/semana-3/`}>Volver a Semana 3</a>
      <a class="btn" href={`${import.meta.env.BASE_URL}kaelum/`}>Resumen del proyecto</a>
      <a class="btn" href={`${import.meta.env.BASE_URL}devlog/`}>Índice</a>
    </div>
  </section>

  <div class="grid">
    <section class="card full">
      <h2>Objetivo de la semana</h2>
      <p class="muted">
        Que el core “entre por el cuerpo”: disparar, moverte y acertar debe sentirse <strong>contundente y claro</strong>.
        Si hace falta recortar cosas para ganar sensación, se recorta.
      </p>
    </section>

    <section class="card">
      <h2>Feedback (lo que se nota jugando)</h2>
      <ul class="list">
        <li><strong>Impacto:</strong> que un hit se perciba instantáneamente.</li>
        <li><strong>Claridad:</strong> distinguir hit / miss / distancia.</li>
        <li><strong>Ritmo:</strong> cadencia y respuesta sin “sensación de juguete”.</li>
      </ul>
    </section>

    <section class="card">
      <h2>UI mínima útil</h2>
      <ul class="list">
        <li>Munición y estado del arma (sin HUD recargado).</li>
        <li>Indicador de hit simple (sin efectos locos).</li>
        <li>Crosshair legible y coherente con el recoil.</li>
      </ul>
    </section>

    <section class="card full">
      <h2>Primer mapa “greybox” (para probar de verdad)</h2>
      <p class="muted">
        Un mapa de pruebas básico cambia todo. Te obliga a validar distancias,
        líneas de visión y flow. Aunque sea feo, sirve para medir.
      </p>
      <ul class="list">
        <li>Rutas simples: 2–3 caminos que se cruzan.</li>
        <li>Zonas abiertas + zonas cerradas para probar armas.</li>
        <li>Puntos de cobertura básicos para leer enfrentamientos.</li>
      </ul>
    </section>

    <section class="card">
      <h2>Problemas reales al pulir</h2>
      <ul class="list">
        <li>Mucho feedback puede ensuciar la lectura (ruido visual).</li>
        <li>Crosshair mal calibrado = “no sé por qué fallo”.</li>
        <li>Mapa sin referencias = difícil medir distancias.</li>
      </ul>
    </section>

    <section class="card">
      <h2>Cómo se controló</h2>
      <ul class="list">
        <li>Feedback siempre al servicio de claridad (menos es más).</li>
        <li>Crosshair ligado al recoil para que se entienda el patrón.</li>
        <li>Greybox con referencias simples para medir y comparar.</li>
      </ul>
    </section>

    <section class="card full">
      <h2>Resultado de la semana</h2>
      <ul class="list">
        <li>El disparo se siente más contundente y legible.</li>
        <li>HUD mínimo funcional.</li>
        <li>Mapa greybox listo para validar combate real.</li>
      </ul>
      <p class="muted">
        Este fue el punto donde el prototipo dejó de ser solo “mecánica” y empezó a pedir dirección:
        contexto, intención y un mundo que responda a cómo juegas.
      </p>

      <h2 style="margin-top:14px">Siguiente</h2>
      <p class="lead" style="margin-top:0">
        Semanas 5–6: conectamos el combate con el mundo. Narrativa integrada, personajes definidos,
        estructura de misiones y primeras secuencias pensadas como parte del gameplay (no como “cinemática por encima”).
      </p>

      <div class="actions">
        <a class="btn" href={`${import.meta.env.BASE_URL}devlog/`}>Volver al índice</a>
      </div>
    </section>
  </div>
</BaseLayout>
```

---
## FILE: src/pages/docs/folleto.astro
---

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
const base = import.meta.env.BASE_URL;

// Pon tu SVG aquí: /public/images/NyxtaleStudios.svg
const logoUrl = `${base}images/NyxtaleStudios.svg`;
---

<BaseLayout
  title="Kaelum — Folleto (A4)"
  description="Folleto imprimible (A4) en una sola página: resumen comprimido y presentable."
>
  <section class="hero">
    <p class="kicker">Documento</p>
    <h1>Folleto (A4)</h1>
    <p class="lead">
      Handout rápido del proyecto. En web se ve bien; al imprimir entra en 1 A4 sin saltos.
    </p>

    <div class="actions noprint" id="imprimir">
      <a class="btn primary" href="#" onclick="window.print(); return false;">Imprimir (A4)</a>
      <a class="btn" href={`${base}docs/`}>Volver a Docs</a>
      <a class="btn" href={`${base}kaelum/`}>Ver proyecto</a>
    </div>
  </section>

  <section class="flyer" aria-label="Folleto Kaelum imprimible A4">
    <!-- BRANDING TOP (centrado) -->
    <header class="flyer-brand">
      <div class="brand-stack">
        <img
          class="brand-logo"
          src={logoUrl}
          alt="Nyxtale Studios"
          loading="eager"
          onerror="this.style.display='none'"
        />

        <div class="brand-text">
          <div class="brand-studio">Nyxtale Studios</div>
          <div class="brand-project">KAELUM</div>
        </div>
      </div>

      <p class="brand-tagline">
        Shooter FPS: <strong>armas primero</strong>, habilidades como extra. Historia (Kael) + multi competitivo.
      </p>

      <p class="brand-pitch">
        Gunplay claro y movimiento fluido. La historia se descubre jugando: detalles, rutas y hallazgos,
        sin pararte con chapa.
      </p>

      <div class="meta">
        <span class="tag">PC</span>
        <span class="tag">FPS</span>
        <span class="tag">A4</span>
        <span class="tag">Prototipo</span>
      </div>
    </header>

    <!-- 6 bloques: 2 columnas x 3 filas -->
    <div class="flyer-grid">
      <section class="block" data-area="obj">
        <h3>Objetivo</h3>
        <p>
          Un FPS con identidad: mundo reconocible, protagonista con carácter y una sensación de disparo
          que enganche desde el primer minuto.
        </p>
      </section>

      <section class="block" data-area="loop">
        <h3>Core loop</h3>
        <p><strong>Explorar → Conflicto → Combatir → Recompensa → Mejorar</strong></p>
        <p class="small muted">
          Historia: progreso ligero · Multi: rondas/objetivos + skill del jugador.
        </p>
      </section>

      <section class="block" data-area="fantasy">
        <h3>Fantasy (promesa)</h3>
        <ul>
          <li>Movimiento fluido y controlado</li>
          <li>Gunplay claro y satisfactorio</li>
          <li>Curiosidad premiada (rutas/hallazgos)</li>
          <li>Momentos épicos sin abusar de cinemáticas</li>
        </ul>
      </section>

      <section class="block" data-area="modos">
        <h3>Modos</h3>
        <ul>
          <li><strong>Historia:</strong> Kael como eje (narrativa ambiental)</li>
          <li><strong>Multi:</strong> roster separado (balance)</li>
          <li><strong>Partidas:</strong> rápidas (5–15 min) y por rondas</li>
        </ul>
      </section>

      <section class="block" data-area="pilares">
        <h3>Pilares</h3>
        <ul>
          <li><strong>Armas primero</strong> (núcleo)</li>
          <li><strong>Habilidades extra</strong> (utilidad / daño / especial)</li>
          <li><strong>Scope realista</strong> (pocas cosas bien hechas)</li>
          <li><strong>Narrativa contextual</strong> (no bloquea el ritmo)</li>
        </ul>
      </section>

      <section class="block" data-area="scope">
        <h3>Alcance inicial</h3>
        <ul>
          <li><strong>2 modos:</strong> TDM + Buscar y destruir</li>
          <li><strong>2 mapas:</strong> chill + rondas</li>
          <li><strong>Roster:</strong> objetivo 6 (proto 2–3)</li>
          <li><strong>Progreso:</strong> single ligero · multi estético (futuro)</li>
        </ul>
      </section>

      <!-- Solo web -->
      <section class="block noprint links-block" data-area="links">
        <h3>Enlaces</h3>
        <p class="small muted">Para el detalle completo:</p>
        <ul>
          <li><a href={`${base}kaelum/`}>Resumen del proyecto</a></li>
          <li><a href={`${base}docs/gdd/`}>GDD (PDF)</a></li>
          <li><a href={`${base}devlog/`}>Devlog</a></li>
        </ul>
      </section>
    </div>

    <footer class="flyer-foot">
      <span>Nyxtale Studios</span>
      <span class="muted">© 2026</span>
    </footer>
  </section>

  <style>
    /* Mantener color en print (y web) */
    :global(html){
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    /* --- WEB --- */
    .flyer{
      margin-top: 14px;
      border: 1px solid var(--border);
      background: rgba(255,255,255,.04);
      border-radius: calc(var(--radius) + 8px);
      box-shadow: var(--shadow);
      overflow: hidden;
    }

    .flyer-brand{
      padding: 22px 18px;
      border-bottom: 1px solid var(--border);
      background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
      text-align: center;
    }

    /* AQUÍ lo que pedías: flex column, centrado */
    .brand-stack{
      display:flex;
      flex-direction: column;
      align-items:center;
      justify-content:center;
      gap: 10px;
    }

    /* SVG más grande */
    .brand-logo{
      display: none;
      width: auto;
      height: 300px;
      object-fit: contain;
    }

    .brand-text{
      display:flex;
      flex-direction: column;
      align-items:center;
      line-height: 1.05;
    }

    .brand-studio{
      font-weight: 900;
      color: var(--muted2);
      letter-spacing: .10em;
      text-transform: uppercase;
      font-size: .78rem;
    }

    .brand-project{
      font-weight: 1000;
      letter-spacing: .18em;
      font-size: 34px;
      margin-top: 4px;
    }

    .brand-tagline{
      margin: 14px 0 10px;
      color: var(--muted);
      font-weight: 900;
    }

    .brand-pitch{
      margin:0;
      color: var(--muted);
      max-width: 78ch;
      margin-inline:auto;
    }

    .flyer-grid{
      padding: 14px;
      display:grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 12px;
    }

    .block{
      grid-column: span 6;
      border: 1px solid var(--border);
      background: rgba(0,0,0,.18);
      border-radius: var(--radius);
      padding: 14px;
      box-shadow: 0 16px 40px rgba(0,0,0,.20);
    }

    .block h3{ margin:0 0 8px; }
    .block p{ margin:0; color: var(--muted); }
    .block ul{ margin: 8px 0 0; padding-left: 18px; color: var(--muted); }
    .block .small{ margin-top: 6px; }

    .links-block{ grid-column: span 12; }

    .flyer-foot{
      display:flex;
      justify-content: space-between;
      gap: 12px;
      padding: 12px 16px;
      border-top: 1px solid var(--border);
      background: rgba(10,14,28,.22);
      color: var(--muted2);
      flex-wrap: wrap;
    }

    @media (max-width: 860px){
      .block{ grid-column: span 12; }
    }

    /* --- PRINT --- */
    @media print {
      @page { size: A4; margin: 10mm; }

      /* CLAVE: layout está fuera, hay que usar :global */
      :global(.topbar),
      :global(.footer),
      :global(.noprint){
        display: none !important;
      }

      :global(body)::before,
      :global(body)::after{
        display:none !important;
      }

      :global(main.wrap){
        margin: 0 !important;
        width: auto !important;
      }

      /* ocultar hero al imprimir */
      :global(.hero){
        display:none !important;
      }
      .brand-logo{
        display:block;
      }
      .flyer{
        transform: scale(0.975);
        transform-origin: top center;
        box-shadow: none !important;
      }

      .block{
        box-shadow:none !important;
        break-inside: avoid;
        page-break-inside: avoid;
      }

      /* 2 columnas x 3 filas fijas */
      .flyer-grid{
        padding: 6mm !important;
        gap: 5mm !important;
        display: grid !important;
        grid-template-columns: 1fr 1fr !important;
        grid-template-rows: auto auto auto !important;
        align-items: start !important;
      }

      .block{ padding: 7px !important; }

      .block h3{
        font-size: 11px !important;
        margin:0 0 6px !important;
      }

      .block p,
      .block li{
        font-size: 10.3px !important;
        line-height: 1.18 !important;
      }

      .block[data-area="obj"]{ grid-column: 1; grid-row: 1; }
      .block[data-area="loop"]{ grid-column: 2; grid-row: 1; }

      .block[data-area="fantasy"]{ grid-column: 1; grid-row: 2; }
      .block[data-area="modos"]{ grid-column: 2; grid-row: 2; }

      .block[data-area="pilares"]{ grid-column: 1; grid-row: 3; }
      .block[data-area="scope"]{ grid-column: 2; grid-row: 3; }
    }
  </style>
</BaseLayout>
```

---
## FILE: src/pages/docs/gdd.astro
---

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
const base = import.meta.env.BASE_URL; // "/" en local, "/kaelum/" en GitHub Pages
const pdfUrl = `${base}docs/GDD_KAELUM.pdf`;
---

<BaseLayout title="Kaelum – GDD (PDF)" description="GDD completo de Kaelum en visor embebido.">
  <section class="hero">
    <p class="kicker">Documento</p>
    <h1>GDD completo (PDF)</h1>
    <p class="lead">
      Visor embebido para lectura rápida. Si el navegador no lo soporta, tienes alternativas debajo.
    </p>

    <div class="actions">
      <a class="btn primary" href={pdfUrl} target="_blank" rel="noreferrer">Abrir en pestaña nueva</a>
      <a class="btn" href={pdfUrl} download>Descargar PDF</a>
      <a class="btn" href={`${import.meta.env.BASE_URL}docs/`}>Volver a Docs</a>
    </div>
  </section>

  <div class="grid">
    <div class="card full">
      <h3>Visor</h3>
      <div class="pdf-shell">
        <object data={pdfUrl} type="application/pdf" class="pdf-object">
          <div class="pdf-fallback">
            <p class="muted" style="margin:0 0 10px">
              Tu navegador no pudo mostrar el PDF embebido.
            </p>
            <div class="actions">
              <a class="btn primary" href={pdfUrl} target="_blank" rel="noreferrer">Abrir PDF</a>
              <a class="btn" href={pdfUrl} download>Descargar</a>
            </div>
          </div>
        </object>
      </div>
    </div>
  </div>
</BaseLayout>
```

---
## FILE: src/pages/docs/index.astro
---

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
---

<BaseLayout title="Kaelum – Docs" description="Documentación del proyecto: GDD completo (técnico) y folleto imprimible (A4).">
  <section class="hero">
    <p class="kicker">Documentación</p>
    <h1>Docs</h1>
    <p class="lead">
      Aquí está la documentación <strong>técnica</strong> y el material <strong>imprimible</strong>.
      La presentación visual principal (moodboard / visión) se añadirá como página separada.
    </p>

    <div class="actions">
      <a class="btn" href={`${import.meta.env.BASE_URL}kaelum/`}>Volver al proyecto</a>
      <a class="btn" href={`${import.meta.env.BASE_URL}devlog/`}>Ver devlog</a>
    </div>
  </section>

  <div class="grid">
    <article class="card">
      <h3>GDD completo (PDF)</h3>
      <p class="muted">
        Documento detallado del juego. Útil para revisión completa y criterios de diseño.
      </p>
      <div class="actions">
        <a class="btn primary" href={`${import.meta.env.BASE_URL}docs/gdd/`}>Abrir visor</a>
        <a class="btn" href={`${import.meta.env.BASE_URL}docs/GDD_KAELUM.pdf`} target="_blank" rel="noreferrer">Abrir PDF</a>
      </div>
    </article>

    <article class="card">
      <h3>Folleto imprimible (A4)</h3>
      <p class="muted">
        Resumen tipo brochure, pensado para presentarlo rápido y poder imprimirlo en una sola página.
      </p>
      <div class="actions">
        <a class="btn primary" href={`${import.meta.env.BASE_URL}docs/folleto/`}>Ver folleto</a>
        <a class="btn" href={`${import.meta.env.BASE_URL}docs/folleto#imprimir`}>Imprimir</a>
      </div>
    </article>

    <article class="card full">
      <h3>Recomendación de lectura</h3>
      <p class="muted">
        Si vienes a evaluar el proyecto: empieza por el folleto (rápido) y después usa el GDD como respaldo técnico.
      </p>
    </article>
  </div>
</BaseLayout>
```

---
## FILE: src/pages/index.astro
---

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
const base = import.meta.env.BASE_URL;

const cards = [
  {
    title: "🎮 Proyecto (dossier jugable)",
    desc:
      "Guion, mundo y contenido con intención: historia, personajes, enemigos, cinemáticas y progreso. Todo existe porque empuja gameplay.",
    hint: "Si quieres entender el juego rápido, entra aquí.",
    href: `${base}proyecto/`,
    primary: true,
    btn: "Abrir proyecto",
  },
  {
    title: "🎨 Visión del proyecto",
    desc:
      "Moodboard y dirección visual. Tono, intención, estilo y promesa del juego. La referencia principal para coherencia estética.",
    hint: "Recomendado si entras por primera vez.",
    href: `${base}vision/`,
    primary: false,
    btn: "Abrir visión",
  },
  {
    title: "📊 Análisis y decisiones",
    desc:
      "DAFO + CAME. Riesgos, fortalezas y acciones concretas para mantener el proyecto realista, defendible y con foco.",
    hint: "Ideal para evaluación y criterio.",
    href: `${base}analisis/`,
    primary: false,
    btn: "Abrir análisis",
  },
  {
    title: "📄 Documentación técnica",
    desc:
      "GDD completo + folleto imprimible (A4). Documentación formal para entrega y revisión del detalle completo del proyecto.",
    hint: "Para leerlo como documento.",
    href: `${base}docs/`,
    primary: false,
    btn: "Abrir docs",
  },
  {
    title: "🛠 Proceso de desarrollo",
    desc:
      "Devlog semanal con decisiones, iteraciones y progreso real. El “cómo” del proyecto: recortes, cambios y porqués.",
    hint: "Para ver evolución y metodología.",
    href: `${base}devlog/`,
    primary: false,
    btn: "Abrir devlog",
  },
];
---

<BaseLayout title="Kaelum — Inicio">
  <section class="hero hero-home">
    <p class="kicker">Portfolio · Documentación</p>
    <h1>Kaelum</h1>

    <p class="lead">
      Proyecto personal de videojuego FPS con habilidades. Aquí no enseño solo el resultado:
      enseño la visión, el análisis y la documentación que justifican cada decisión.
      <strong>Y sobre todo: el “Proyecto” como dossier jugable.</strong>
    </p>

    <div class="meta">
      <span class="tag">Shooter</span>
      <span class="tag">Habilidades</span>
      <span class="tag">Historia contextual</span>
      <span class="tag">PC</span>
    </div>

    <div class="actions">
      <a class="btn primary" href={`${base}proyecto/`}>Ver proyecto</a>
      <a class="btn" href={`${base}vision/`}>Ver visión</a>
      <a class="btn" href={`${base}analisis/`}>Ver análisis</a>
      <a class="btn" href={`${base}docs/`}>Ver docs</a>
      <a class="btn" href={`${base}devlog/`}>Ver devlog</a>
    </div>
  </section>

  <section class="grid" aria-label="Mapa del proyecto">
    {cards.map((c) => (
      <article class={`card ${c.primary ? "featured" : ""}`}>
        <h2>{c.title}</h2>
        <p class="muted">{c.desc}</p>
        <p class="small">{c.hint}</p>
        <div class="actions">
          <a class={c.primary ? "btn primary" : "btn"} href={c.href}>{c.btn}</a>
        </div>
      </article>
    ))}
    <article class="card full">
      <h2>Estado actual</h2>
      <p class="muted">
        Kaelum está en fase de prototipo: visión y análisis cerrados, documentación lista para presentar,
        y el dossier de “Proyecto” ya maquetado para lectura rápida. El desarrollo ahora se centra en validar
        sensaciones de gameplay, estructura narrativa y núcleo jugable.
      </p>
      <div class="callout subtle" style="margin-top:12px">
        <strong>Orden recomendado si eres nuevo:</strong> Proyecto → Visión → Análisis → Docs → Devlog.
      </div>
    </article>
  </section>

  <style>
    /* Hero un pelín más “main page” sin romper tu sistema */
    .hero-home{ position:relative; overflow:hidden; }
    .hero-home:after{
      content:"";
      position:absolute;
      inset:-2px;
      pointer-events:none;
      background:
        radial-gradient(900px 340px at 18% 0%, rgba(70,255,150,.10), transparent 65%),
        radial-gradient(760px 320px at 92% 12%, rgba(120,160,255,.12), transparent 60%);
      opacity:.9;
    }
    .hero-home > *{ position:relative; z-index:1; }

    .kicker{ letter-spacing:.08em; text-transform:uppercase; opacity:.75; font-size:.82rem; margin-bottom:6px; }
    .lead{ margin-top:8px; line-height:1.6; opacity:.92; max-width: 980px; }

    .meta{
      display:flex;
      flex-wrap:wrap;
      gap:10px;
      margin-top:12px;
      justify-content:flex-start;
    }
    .tag{
      display:inline-flex;
      align-items:center;
      padding:7px 12px;
      border-radius:999px;
      border:1px solid rgba(255,255,255,.10);
      background: rgba(0,0,0,.16);
      color: rgba(255,255,255,.82);
      font-weight:900;
      letter-spacing:.02em;
      font-size:.86rem;
    }

    /* Featured card (Proyecto) */
    .featured{
      border-color: rgba(140,120,255,.28);
      background: linear-gradient(180deg, rgba(140,120,255,.10), rgba(0,0,0,.18));
      box-shadow: 0 18px 60px rgba(140,120,255,.10);
    }
  </style>
</BaseLayout>
```

---
## FILE: src/pages/kaelum.astro
---

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
---

<BaseLayout
  title="Kaelum — Proyecto"
  description="Resumen general del proyecto Kaelum: enfoque, género y estructura del videojuego."
>
  <section class="hero">
    <p class="kicker">Proyecto</p>
    <h1>Kaelum</h1>

    <p class="lead">
      Kaelum es un shooter en primera persona con habilidades diseñadas como complemento,
      no como eje central. El proyecto prioriza un gunplay consistente, movimiento fluido
      y decisiones de diseño justificadas, con un alcance controlado.
    </p>

    <div class="meta">
      <span class="tag">FPS</span>
      <span class="tag">Armas primero</span>
      <span class="tag">Movimiento fluido</span>
      <span class="tag">Narrativa contextual</span>
      <span class="tag">PC</span>
    </div>

    <div class="actions">
      <a class="btn primary" href={`${import.meta.env.BASE_URL}vision/`}>Ver visión</a>
      <a class="btn" href={`${import.meta.env.BASE_URL}analisis/`}>Ver análisis</a>
      <a class="btn" href={`${import.meta.env.BASE_URL}docs/`}>Ver documentación</a>
      <a class="btn" href={`${import.meta.env.BASE_URL}devlog/`}>Ver devlog</a>
    </div>
  </section>

  <div class="grid">
    <div class="card">
      <h3>¿Qué tipo de juego es?</h3>
      <p class="muted">
        Kaelum combina acción directa con narrativa ambiental. El jugador descubre el mundo
        a través del entorno, textos opcionales y encuentros breves, sin interrumpir el ritmo
        de juego con exposiciones largas.
      </p>
    </div>

    <div class="card">
      <h3>Dos experiencias complementarias</h3>
      <p class="muted">
        El proyecto se estructura en dos vertientes diferenciadas pero coherentes dentro
        del mismo universo.
      </p>
      <ul class="list">
        <li><strong>Historia (Singleplayer)</strong>: narrativa contextual con Kael como eje.</li>
        <li><strong>Multijugador</strong>: partidas rápidas y competitivas con personajes propios.</li>
      </ul>
    </div>

    <div class="card full">
      <h3>Cómo está organizado el proyecto</h3>
      <p class="muted">
        Kaelum se presenta como un proyecto completo de diseño y documentación.
        Cada apartado cumple una función concreta dentro del proceso.
      </p>
      <ul class="list">
        <li><strong>Visión</strong>: moodboard y one-pager como presentación principal.</li>
        <li><strong>Análisis</strong>: DAFO y CAME para justificar decisiones y alcance.</li>
        <li><strong>Documentación</strong>: GDD completo y folleto imprimible.</li>
        <li><strong>Devlog</strong>: seguimiento del desarrollo y evolución del proyecto.</li>
      </ul>
    </div>
  </div>
</BaseLayout>
```

---
## FILE: src/pages/proyecto/cinematicas.astro
---

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
const base = import.meta.env.BASE_URL;
---

<BaseLayout
    title="Kaelum — Cinemáticas"
    description="Escenas narrativas y cinemáticas completas de Kaelum: dirección visual, storyboard, carga emocional y diseño audiovisual."
>
    <section class="hero">
        <header class="header">
            <p class="kicker">GDD · Dirección Cinemática</p>
            <h1>Cinemáticas</h1>
            <p class="lead">
                Las cinemáticas de <strong>Kaelum</strong> no sustituyen el gameplay.
                Lo estructuran. Marcan puntos de no retorno narrativos y emocionales.
                Todo lo que ocurre aquí redefine cómo el jugador entiende el mundo.
            </p>

            <div class="actions">
                <a class="btn" href={`${base}proyecto/`}>Volver a Proyecto</a>
                <a class="btn" href={`${base}proyecto/historia/`}
                    >Ver Historia</a
                >
                <a class="btn" href={`${base}proyecto/mundo/`}>Ver Mundo</a>
                <a class="btn" href={`${base}proyecto/personajes/`}
                    >Ver Personajes</a
                >
                <a class="btn primary" href={`${base}proyecto/enemigos/`}
                    >Ver Enemigos</a
                >
                <a class="btn" href={`${base}proyecto/progreso/`}
                    >Ver Progreso</a
                >
            </div>
        </header>
    </section>
    <section class="gdd-section">
        <article class="card">
            <h2>Estructura narrativa audiovisual</h3>

            <ul class="bullets">
                <li>Tercera persona limitada centrada en Kael.</li>
                <li>Sin narrador omnisciente.</li>
                <li>Lo que se muestra es lo que Kael vive o comprende.</li>
                <li>
                    Transiciones diseñadas para volver al gameplay sin ruptura
                    artificial.
                </li>
            </ul>

            <div class="callout">
                Las cinemáticas están vinculadas directamente a decisiones,
                karma y reputación. No son decorativas. Son estructurales.
            </div>
        </article>

        <article class="card major">
            <p class="kicker">PRÓLOGO</p>
            <h2>El Eclipse</h2>
            <p class="muted">
                Introducción absoluta. Evento imposible. Ruptura de realidad.
            </p>

            <div class="subcard">
                <h3>Objetivo narrativo</h3>
                <ul>
                    <li>El protagonista era normal.</li>
                    <li>El eclipse es anómalo.</li>
                    <li>Solo él reacciona.</li>
                    <li>Despierta como Kael en Kaelum.</li>
                </ul>
            </div>

            <div class="subcard">
                <h3>Clave emocional</h3>
                <blockquote>“¿Eso… siempre ha estado ahí?”</blockquote>
                <p>Nadie responde. Nadie mira. Solo tú.</p>
            </div>

            <div class="subcard">
                <h3>Dirección visual</h3>
                <ul>
                    <li>
                        Transición cálido → púrpura → oscuridad → rural apagado.
                    </li>
                    <li>Glitches progresivos.</li>
                    <li>Latido en negro total.</li>
                </ul>
            </div>
        </article>

        <article class="card">
            <p class="kicker">FIN ACTO I</p>
            <h2>La Persecución</h2>

            <p class="muted">
                El momento donde Kael deja de ser extraño para convertirse en
                amenaza pública.
            </p>

            <div class="subcard">
                <h3>Escenario</h3>
                <ul>
                    <li>Plaza central de Vesperia.</li>
                    <li>Guardias movilizados.</li>
                    <li>Multitud alterada.</li>
                </ul>
            </div>

            <div class="subcard">
                <h3>Carga emocional</h3>
                <blockquote>
                    “¡El monstruo!” “¡No dejéis que escape!”
                </blockquote>
                <p>No hay juicio. Solo miedo colectivo.</p>
            </div>
        </article>

        <article class="card">
            <p class="kicker">FIN ACTO II</p>
            <h3>La Verdad del Orbe</h3>

            <p class="muted">
                La ruptura moral del juego. La Orden no combatía el caos. Lo
                administraba.
            </p>

            <div class="subcard">
                <h4>Revelación</h4>
                <ul>
                    <li>Registros sellados.</li>
                    <li>Sacrificios aceptados como “coste”.</li>
                    <li>Gran Maestro convencido de su postura.</li>
                </ul>
            </div>

            <div class="subcard">
                <blockquote>“El mundo necesita control.”</blockquote>
                <p>No suena villano. Suena necesario.</p>
            </div>
        </article>

        <article class="card major">
            <p class="kicker">CLÍMAX</p>
            <h3>El Orbe del Origen — Final Variable</h3>

            <div class="grid3">
                <div class="pill good">
                    <h4>Final Bueno — La Luz No Es Gratis</h4>
                    <p>
                        Kael destruye el Orbe. Renuncia al poder. La Fisura
                        retrocede.
                    </p>
                    <blockquote>“No necesita otro tirano.”</blockquote>
                </div>

                <div class="pill neutral">
                    <h4>Final Neutral — Equilibrio Inestable</h4>
                    <p>
                        El Orbe se sella parcialmente. El ciclo no desaparece.
                    </p>
                    <blockquote>“Solo lo he frenado.”</blockquote>
                </div>

                <div class="pill bad">
                    <h4>Final Malo — El Monstruo Que Eligieron</h4>
                    <p>Kael absorbe el poder. El eclipse se completa.</p>
                    <blockquote>“Queríais un monstruo.”</blockquote>
                </div>
            </div>

            <div class="callout">
                El final depende de karma acumulado + decisiones clave +
                elección final. No es estético. Es estructural.
            </div>
        </article>
        <div class="actions">
                <a class="btn" href={`${base}proyecto/`}>Volver a Proyecto</a>
                <a class="btn" href={`${base}proyecto/historia/`}
                    >Ver Historia</a
                >
                <a class="btn" href={`${base}proyecto/mundo/`}>Ver Mundo</a>
                <a class="btn" href={`${base}proyecto/personajes/`}
                    >Ver Personajes</a
                >
                <a class="btn primary" href={`${base}proyecto/enemigos/`}
                    >Ver Enemigos</a
                >
                <a class="btn" href={`${base}proyecto/progreso/`}
                    >Ver Progreso</a
                >
            </div>
    </section>

    <style>

        .header {
            margin-bottom: 20px;
        }

        .kicker {
            letter-spacing: 0.06em;
            text-transform: uppercase;
            opacity: 0.7;
            font-size: 0.85rem;
        }

        .lead {
            margin-top: 6px;
            line-height: 1.6;
            opacity: 0.9;
        }

        .card {
            margin-top: 18px;
            padding: 18px;
            border-radius: 14px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(255, 255, 255, 0.04);
        }

        .card.major {
            border: 1px solid rgba(170, 120, 255, 0.25);
            background: rgba(170, 120, 255, 0.08);
        }

        .subcard {
            margin-top: 14px;
            padding: 14px;
            border-radius: 12px;
            background: rgba(0, 0, 0, 0.2);
        }

        .bullets {
            padding-left: 20px;
        }

        blockquote {
            margin: 8px 0;
            font-weight: 600;
        }

        .grid3 {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 14px;
            margin-top: 14px;
        }

        .pill {
            padding: 14px;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .pill.good {
            background: rgba(100, 255, 170, 0.07);
        }
        .pill.neutral {
            background: rgba(255, 220, 120, 0.07);
        }
        .pill.bad {
            background: rgba(255, 90, 140, 0.07);
        }

        .callout {
            margin-top: 18px;
            padding: 14px;
            border-radius: 12px;
            border: 1px dashed rgba(255, 255, 255, 0.2);
            opacity: 0.85;
        }
    </style>
</BaseLayout>
```

---
## FILE: src/pages/proyecto/enemigos.astro
---

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
const base = import.meta.env.BASE_URL;

const roles = [
  {
    id: "luchador",
    name: "Luchadores",
    desc: "Cuerpo a cuerpo y ejecución. Te persiguen, te acorralan y castigan cada duda.",
    points: [
      { k: "Te obliga a", v: "moverte, kitear, usar verticalidad y cobertura" },
      { k: "Señal clara", v: "silueta agresiva + animación de carga + audio cercano" },
      { k: "Counter", v: "control de espacio + burst + precisión bajo presión" },
    ],
  },
  {
    id: "soporte",
    name: "Soportes",
    desc: "No ganan el combate por daño: lo ganan por ventaja. Curación, escudos, rescates, buffs.",
    points: [
      { k: "Te obliga a", v: "priorizar objetivos y cortar habilidades" },
      { k: "Señal clara", v: "pulsos, enlaces, marcas y “ritmo” de equipo" },
      { k: "Counter", v: "focus + interrupción + presión constante" },
    ],
  },
  {
    id: "especialista",
    name: "Especialistas",
    desc: "Controlan escenario e información: humo, señuelos, CC, trampas activas, negación de visión.",
    points: [
      { k: "Te obliga a", v: "leer señales, avanzar con calma y evitar túneles de muerte" },
      { k: "Señal clara", v: "gadgets/rituales visibles + sonido de activación + zonas marcadas" },
      { k: "Counter", v: "paciencia + lectura + romper su set-up" },
    ],
  },
  {
    id: "guardian",
    name: "Guardianes",
    desc: "Defensa dura. No destacan por daño, destacan por negarte el avance y obligarte a ejecutar plan.",
    points: [
      { k: "Te obliga a", v: "buscar ángulos, rodear, destruir núcleos y jugar con recursos" },
      { k: "Señal clara", v: "postura firme + elementos anclados al terreno (barreras/tótems/torretas)" },
      { k: "Counter", v: "flanqueo + explosivo/impacto + romper foco o punto débil" },
    ],
  },
];

const families = [
  {
    id: "fisura",
    name: "La Fisura",
    subtitle: "morado — anomalías orgánicas e inhumanas",
    intro:
      "No son monstruos “random”: son la ruptura del mundo hecha carne. El púrpura no es decoración, es infección. Su fantasía es clara: la realidad está rota y ellos son la forma en la que esa rotura te muerde.",
  },
  {
    id: "pueblo",
    name: "Extremistas del pueblo",
    subtitle: "naranja — humanos improvisados (miedo organizado)",
    intro:
      "No tienen “magia de videojuego”. Tienen rabia, antorchas, calle y números. Su peligro no es lo sobrenatural: es lo humano cuando decide que tú eres el problema.",
  },
  {
    id: "orden",
    name: "La Orden",
    subtitle: "azul — disciplina, arcano y control",
    intro:
      "Su color no es estético, es jerarquía. Sus armas son funcionales y sus símbolos son propaganda. No vienen a “ganarte por daño”: vienen a controlarte, negarte rutas y convertir el combate en un procedimiento.",
  },
  {
    id: "ruinas",
    name: "Ruinas y subditos",
    subtitle: "ámbar/amarillo — defensa mineral, ritual y núcleo",
    intro:
      "No son “malos” en lo moral: son mecanismos antiguos reactivados. Se sienten como estatuas vivas con un ente dentro: mineral, luz ámbar, runas y núcleos expuestos.",
  },
];

const enemies = [
  // ===== FISURA (4 roles) =====
  {
    id: "fisura-voraz",
    faction: "fisura",
    role: "luchador",
    name: "Anomalía Voraz",
    fantasy: "Caza a corta distancia. Si te pilla, te ejecuta.",
    lectura: "carga + chillido corto + estela violeta",
    peligro: "salto/agarre si te quedas quieto",
    counter: "espacio + burst + castigar la carga",
    img: `${base}img/enemigos/fisura_anomalia_voraz.png`,
  },
  {
    id: "fisura-asceta",
    faction: "fisura",
    role: "soporte",
    name: "Asceta de Bruma",
    fantasy: "Sostiene al grupo con pulsos: cura, refuerza o rescata anomalías.",
    lectura: "cántico + halo violeta suave + enlaces",
    peligro: "alarga combates, vuelve injusto el DPS race",
    counter: "focus + interrupción + presión constante",
    img: `${base}img/enemigos/fisura_asceta_bruma.png`,
  },
  {
    id: "fisura-mimetico",
    faction: "fisura",
    role: "especialista",
    name: "Mimético de Umbral",
    fantasy: "Engaña y controla: humo violeta, señuelos y CC breve. Te roba información.",
    lectura: "distorsión del aire + “doble” falso + chasquido",
    peligro: "te descoloca y te mete en túnel de muerte",
    counter: "calma + lectura + no perseguir sombras",
    img: `${base}img/enemigos/fisura_mimetico_umbral.png`,
  },
  {
    id: "fisura-obelisco",
    faction: "fisura",
    role: "guardian",
    name: "Obelisco Latente",
    fantasy: "Defensa viva: bloquea ruta, crea barrera y castiga acercarte sin plan.",
    lectura: "ancla al suelo + runas violetas + pulso periódico",
    peligro: "te frena y te obliga a exponerte",
    counter: "flanqueo + destruir núcleo/punto débil",
    img: `${base}img/enemigos/fisura_obelisco_latente.png`,
  },

  // ===== PUEBLO (4 “humanos”) =====
  {
    id: "pueblo-bravo",
    faction: "pueblo",
    role: "luchador",
    name: "Bravo del Umbral",
    fantasy: "Cuerpo a cuerpo con arma improvisada. Te acorrala en espacios estrechos.",
    lectura: "grito + carga torpe + swings amplios",
    peligro: "knockback/stagger si te pilla mal posicionado",
    counter: "espacio + headshots + no encerrarte",
    img: `${base}img/enemigos/pueblo_bravo_umbral.png`,
  },
  {
    id: "pueblo-abanderado",
    faction: "pueblo",
    role: "soporte",
    name: "Abanderado",
    fantasy: "Coordina y “bufea” con gritos y señales: moral + empuje colectivo.",
    lectura: "silbato/bandera/brazalete naranja",
    peligro: "convierte una turba en amenaza real",
    counter: "focus temprano + cortar la cadena",
    img: `${base}img/enemigos/pueblo_abanderado.png`,
  },
  {
    id: "pueblo-alquimista",
    faction: "pueblo",
    role: "especialista",
    name: "Alquimista de Calle",
    fantasy: "Lanza humo, brea o polvo irritante. Niega visión y corta rutas.",
    lectura: "frascos/bandolera/chispa",
    peligro: "te obliga a moverte “mal”",
    counter: "cambiar ángulo + no atravesar humo gratis",
    img: `${base}img/enemigos/pueblo_alquimista_calle.png`,
  },
  {
    id: "pueblo-barricadero",
    faction: "pueblo",
    role: "guardian",
    name: "Barricadero",
    fantasy: "Defensa improvisada: escudo chatarra + trampas simples + bloqueo de calle.",
    lectura: "placas metálicas + clavos + postura baja",
    peligro: "te frena y te expone a la turba",
    counter: "flanqueo + explosivo/impacto + punto débil",
    img: `${base}img/enemigos/pueblo_barricadero.png`,
  },

  // ===== ORDEN =====
  {
    id: "orden-verdugo",
    faction: "orden",
    role: "luchador",
    name: "Verdugo Inquisitorial",
    fantasy: "Cierra distancia con técnica: te persigue con disciplina y remata.",
    lectura: "pasos pesados + capa corta azul + arma de asta/filo",
    peligro: "castiga asomar sin pensar",
    counter: "distancia + burst + negar su entrada",
    img: `${base}img/enemigos/orden_verdugo_inquisitorial.png`,
  },
  {
    id: "orden-capellan",
    faction: "orden",
    role: "soporte",
    name: "Capellán de Sello",
    fantasy: "Escudo/curación ritual. Mantiene la línea. Si vive, el frente no cae.",
    lectura: "sello azul brillante + gesto de mano + cantos cortos",
    peligro: "resetea tu progreso de combate",
    counter: "focus + cortar canalización",
    img: `${base}img/enemigos/orden_capellan_sello.png`,
  },
  {
    id: "orden-estratega",
    faction: "orden",
    role: "especialista",
    name: "Estratega de Campo",
    fantasy: "Control de información y rutas: marcas, humo arcano, trampas de visión.",
    lectura: "visor/monóculo + runas azules flotantes",
    peligro: "te obliga a pelear en su terreno",
    counter: "cambiar ritmo + romper gadgets",
    img: `${base}img/enemigos/orden_estratega_campo.png`,
  },
  {
    id: "orden-bastion",
    faction: "orden",
    role: "guardian",
    name: "Bastión Juramentado",
    fantasy: "Defensa formal: barrera arcana, escudo de torre, negación de ángulo.",
    lectura: "escudo grande + runas azules + postura inmóvil",
    peligro: "te bloquea rutas y te “ordena” el combate",
    counter: "flanqueo + romper foco/núcleo de barrera",
    img: `${base}img/enemigos/orden_bastion_juramentado.png`,
  },

  // ===== RUINAS =====
  {
    id: "ruinas-martillo",
    faction: "ruinas",
    role: "luchador",
    name: "Martillo de Ruina",
    fantasy: "Golpes pesados en corto. Te obliga a respetar tiempos y distancias.",
    lectura: "crujido de piedra + levantamiento lento + golpe brutal",
    peligro: "stun/knock si comes el impacto",
    counter: "castigar recovery + mantener distancia",
    img: `${base}img/enemigos/ruinas_martillo_ruina.png`,
  },
  {
    id: "ruinas-cantor",
    faction: "ruinas",
    role: "soporte",
    name: "Cantor del Núcleo",
    fantasy: "Repara y refuerza a otros constructos con pulsos ámbar.",
    lectura: "runas encendiendo en ciclos + zumbido armónico",
    peligro: "si no lo cortas, el dungeon se alarga",
    counter: "focus + romper tótem/columna cercana",
    img: `${base}img/enemigos/ruinas_cantor_nucleo.png`,
  },
  {
    id: "ruinas-oraculo",
    faction: "ruinas",
    role: "especialista",
    name: "Oráculo de Runa",
    fantasy: "Control del escenario: marcas, zonas de CC y negación de ruta.",
    lectura: "círculos en el suelo + líneas ámbar + “clic” de activación",
    peligro: "te encierra en rutas malas",
    counter: "leer el suelo + rotar rápido",
    img: `${base}img/enemigos/ruinas_oraculo_runa.png`,
  },
  {
    id: "ruinas-muralla",
    faction: "ruinas",
    role: "guardian",
    name: "Muralla Viva",
    fantasy: "Defensa pura: muro/torreta/escudo. Te bloquea hasta que rompes el núcleo.",
    lectura: "anclaje al terreno + núcleo expuesto parcial + foco ámbar",
    peligro: "te corta avance y te obliga a exponerte",
    counter: "flanqueo + romper núcleo/punto débil",
    img: `${base}img/enemigos/ruinas_muralla_viva.png`,
  },
];

const bosses = [
  {
    id:"b1",
    faction:"fisura",
    tag:"Castillo Noctiferum",
    name:"Boss 01 — Heraldo Voraz",
    desc:"Caza, salto y ejecución. El castillo se siente como una garganta.",
    img:`${base}img/bosses/fisura_heraldo_voraz.png`,
  },
  {
    id:"b2",
    faction:"fisura",
    tag:"Castillo Umbrafortis",
    name:"Boss 02 — Arconte de Bruma",
    desc:"Soporte + fase de niebla. El combate es información y paciencia.",
    img:`${base}img/bosses/fisura_arconte_bruma.png`,
  },
  {
    id:"b3",
    faction:"fisura",
    tag:"Castillo Tenebrium",
    name:"Boss 03 — Obispo del Umbral",
    desc:"Control del escenario + barreras vivas. Te obliga a romper el sistema.",
    img:`${base}img/bosses/fisura_obispo_umbral.png`,
  },
  {
    id:"b4",
    faction:"pueblo",
    tag:"Side quest",
    name:"Boss — El Portantorchas",
    desc:"Carisma de turba. Miedo en forma humana. Setpiece social.",
    img:`${base}img/bosses/pueblo_portantorchas.png`,
  },
  {
    id:"b5",
    faction:"orden",
    tag:"Asalto al Orbe",
    name:"Boss 01 — Inquisidor de Umbral",
    desc:"Si no te infiltraste: castigo frontal. Defensa + disciplina.",
    img:`${base}img/bosses/orden_inquisidor_umbral.png`,
  },
  {
    id:"b6",
    faction:"orden",
    tag:"Antes del final",
    name:"Boss 02 — Custodio del Sello",
    desc:"Prueba de control: muros, sellos, negación de ruta. Te obliga a pensar.",
    img:`${base}img/bosses/orden_custodio_sello.png`,
  },
];
---

<BaseLayout
  title="Kaelum — Enemigos"
  description="Enemigos del proyecto Kaelum: roles, facciones, lectura visual y diseño de combate."
>
  <section class="hero">
    <header class="header">
      <p class="kicker">GDD · Combate</p>
      <h1>Enemigos</h1>
      <p class="lead">
        En Kaelum, un enemigo no es una skin: es una decisión.
        Cada tipo existe para forzarte a leer el escenario, reposicionarte y elegir cómo gastas recursos.
        Menos cantidad. Más identidad. Más intención.
      </p>

      <div class="actions">
        <a class="btn" href={`${base}proyecto/`}>Volver a Proyecto</a>
        <a class="btn" href={`${base}proyecto/historia/`}>Ver Historia</a>
        <a class="btn" href={`${base}proyecto/mundo/`}>Ver Mundo</a>
        <a class="btn" href={`${base}proyecto/personajes/`}>Ver Personajes</a>
        <a class="btn" href={`${base}proyecto/cinematicas/`}>Ver Cinemáticas</a>
        <a class="btn primary" href={`${base}proyecto/progreso/`}>Ver Progreso</a>
      </div>
        <nav class="subnav" aria-label="Índice de enemigos">
          <a class="chip" href="#roles">Roles</a>
          <a class="chip chip-fisura" href="#fisura">La Fisura</a>
          <a class="chip chip-pueblo" href="#pueblo">Extremistas</a>
          <a class="chip chip-orden" href="#orden">La Orden</a>
          <a class="chip chip-ruinas" href="#ruinas">Ruinas</a>
          <a class="chip" href="#jefes">Bosses</a>
        </nav>
    </header>
  </section>

  <section class="gdd-section">

    <article class="card full" id="roles">
      <div class="label">// ROLES</div>
      <h2>4 roles (lectura rápida, identidad clara)</h2>
      <p class="muted">
        Inspiración estructural tipo “agentes” (para entenderlo rápido), pero llevado a Kaelum:
        aquí los roles no son “clases bonitas”, son <strong>comportamientos</strong> que cambian cómo se juega el combate.
      </p>

      <div class="role-grid">
        {roles.map((r) => (
          <section class="role" data-role={r.id}>
            <div class="role-top">
              <span class="badge role">{r.id.toUpperCase()}</span>
              <h3>{r.name}</h3>
            </div>
            <p class="muted">{r.desc}</p>
            <ul class="list">
              {r.points.map((p) => (
                <li><strong>{p.k}:</strong> {p.v}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>

    {families.map((f) => (
      <article
        id={f.id}
        class={`card full family faction--${f.id}`}
        data-faction={f.id}
      >
        <div class="label">// FAMILIA</div>
        <h2>{f.name} <span class="muted">({f.subtitle})</span></h2>
        <p class="muted">{f.intro}</p>

        <div class="enemy-flex">
          {enemies.filter(e => e.faction === f.id).map((e) => (
            <article class={`enemy faction--${e.faction}`} data-faction={e.faction} data-role={e.role}>
              <header class="enemy-head">
                <div class="badges">
                  <span class="badge faction">{e.faction.toUpperCase()}</span>
                  <span class="badge role">{e.role}</span>
                </div>
                <h3>{e.name}</h3>
                <p class="muted">{e.fantasy}</p>
              </header>

              <div class="enemy-body">
                <div class="enemy-media">
                  <div class="ph" aria-hidden="true">
                    <div class="ph-icon">✦</div>
                    <div class="ph-text">Imagen pendiente</div>
                  </div>
                  <img
                    src={e.img}
                    alt={e.name}
                    loading="lazy"
                    onload="this.parentElement.classList.add('has-img')"
                    onerror="this.remove()"
                  />
                </div>

                <div class="enemy-info">
                  <ul class="list compact">
                    <li><strong>Lectura:</strong> {e.lectura}.</li>
                    <li><strong>Peligro:</strong> {e.peligro}.</li>
                    <li><strong>Counter:</strong> {e.counter}.</li>
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </article>
    ))}

    <article class="card full" id="jefes">
      <div class="label">// BOSSES</div>
      <h2>Bosses (setpieces con propósito)</h2>
      <p class="muted">
        Los bosses no son “más vida y ya”: son pruebas de lectura.
        En Kaelum cada boss representa un argumento del mundo: Fisura (corrupción), Orden (control), Pueblo (odio organizado).
      </p>

      <div class="boss-flex">
        {bosses.map((b) => (
          <article class={`boss faction--${b.faction}`} data-faction={b.faction}>
            <div class="boss-media">
              <div class="ph" aria-hidden="true">
                <div class="ph-icon">✦</div>
                <div class="ph-text">Imagen pendiente</div>
              </div>
              <img
                src={b.img}
                alt={b.name}
                loading="lazy"
                onload="this.parentElement.classList.add('has-img')"
                onerror="this.remove()"
              />
            </div>

            <div class="boss-info">
              <div class="badges">
                <span class="badge faction">{b.faction.toUpperCase()}</span>
                <span class="badge tag">{b.tag}</span>
              </div>
              <h3>{b.name}</h3>
              <p class="muted">{b.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </article>

    <div class="actions bottom">
      <a class="btn" href={`${base}proyecto/`}>Volver a Proyecto</a>
      <a class="btn" href={`${base}proyecto/historia/`}>Ver Historia</a>
      <a class="btn" href={`${base}proyecto/mundo/`}>Ver Mundo</a>
      <a class="btn" href={`${base}proyecto/personajes/`}>Ver Personajes</a>
      <a class="btn" href={`${base}proyecto/cinematicas/`}>Ver Cinemáticas</a>
      <a class="btn primary" href={`${base}proyecto/progreso/`}>Ver Progreso</a>
    </div>

  </section>

<style>
  /* ===== Base ===== */
  .header{ margin-bottom:18px; }
  .kicker{ letter-spacing:.06em; text-transform:uppercase; opacity:.7; font-size:.85rem; }
  .lead{ margin-top:6px; line-height:1.6; opacity:.9; max-width:980px; }
  .muted{ color:var(--muted); opacity:.95; }

  .card{
    margin-top:18px;
    padding:18px;
    border-radius:14px;
    border:1px solid rgba(255,255,255,.10);
    background:rgba(255,255,255,.04);
  }
  .card.full{ width:100%; }

  .label{
    font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    color:var(--muted2);
    letter-spacing:.12em;
    text-transform:uppercase;
    font-size:.72rem;
    margin-bottom:8px;
  }

  .list{ padding-left:18px; }
  .list.compact{ margin:0; padding-left:18px; }
  .list li{ margin:6px 0; }

  .callout{
    margin-top:14px;
    padding:12px 14px;
    border-radius:12px;
    border:1px dashed rgba(255,255,255,.18);
    background:rgba(0,0,0,.18);
    color:var(--muted);
  }
  .callout.subtle{
    border-style:solid;
    border-color:rgba(255,255,255,.08);
    background:rgba(255,255,255,.03);
  }

  /* ===== Subnav chips ===== */
  .subnav{
    margin-top:14px;
    display:flex;
    gap:10px;
    flex-wrap:wrap;
    justify-content:center;
  }
  .chip{
    display:inline-flex;
    align-items:center;
    text-decoration:none;
    color:rgba(255,255,255,.82);
    border:1px solid rgba(255,255,255,.10);
    background:rgba(0,0,0,.16);
    padding:8px 12px;
    border-radius:999px;
    font-weight:900;
    letter-spacing:.04em;
    text-transform:uppercase;
    font-size:.78rem;
    transition:transform .12s ease, background .12s ease, border-color .12s ease;
  }
  .chip:hover{
      transform: translateY(-1px);
      background: rgba(255,255,255,.06);
      border-color: rgba(255,255,255,.18);
    }
    .chip-fisura{ border-color: rgba(170,120,255,.28); background: rgba(170,120,255,.10); }
    .chip-pueblo{ border-color: rgba(255,170,90,.28);  background: rgba(255,170,90,.10); }
    .chip-orden { border-color: rgba(110,170,255,.28); background: rgba(110,170,255,.10); }
    .chip-ruinas{ border-color: rgba(255,220,120,.28); background: rgba(255,220,120,.10); }

  /* ===== Facciones (accent real) ===== */
  .faction--fisura{ --accent:170,120,255; }
  .faction--pueblo{ --accent:255,170,90; }
  .faction--orden { --accent:110,170,255; }
  .faction--ruinas{ --accent:255,220,120; }

  .family{
    border:1px solid rgba(var(--accent), .20);
    background:rgba(var(--accent), .06);
    box-shadow:0 18px 60px rgba(var(--accent), .10);
  }
  .family .callout{
    border-color:rgba(var(--accent), .22);
    background:rgba(var(--accent), .07);
  }
  .family .callout.subtle{
    border-color:rgba(var(--accent), .16);
    background:rgba(0,0,0,.16);
  }

  /* ===== Roles ===== */
  .role-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));
    gap:14px;
    margin-top:14px;
  }
  .role{
    padding:14px;
    border-radius:12px;
    border:1px solid rgba(255,255,255,.10);
    background:rgba(255,255,255,.03);
  }
  .role-top{
    display:flex;
    align-items:center;
    gap:10px;
    margin-bottom:6px;
  }

  /* ===== Role colors ===== */
  [data-role="luchador"]{ --role:255, 90, 140; }
  [data-role="soporte"]{ --role:100,255,170; }
  [data-role="especialista"]{ --role:170,120,255; }
  [data-role="guardian"]{ --role:255,220,120; }

  /* ===== Badges ===== */
  .badge{
    display:inline-flex;
    align-items:center;
    padding:5px 10px;
    border-radius:999px;
    font-size:.78rem;
    border:1px solid rgba(255,255,255,.10);
    background:rgba(255,255,255,.03);
    color:rgba(255,255,255,.85);
    white-space:nowrap;
  }
  .badge.faction{
    background:rgba(var(--accent), .10);
    border-color:rgba(var(--accent), .22);
  }
  .badge.role{
    background:rgba(var(--role), .10);
    border-color:rgba(var(--role), .22);
    text-transform:capitalize;
  }
  .badge.tag{
    background:rgba(0,0,0,.18);
    border-color:rgba(255,255,255,.10);
    color:rgba(255,255,255,.78);
  }

  /* =========================================================
     ENEMIES — FLEX WRAP + 2 POR FILA (desktop first)
     - enemy-grid: flex row wrap
     - enemy: flex 1 1 40%
     - enemy-body: COLUMN (imagen arriba, info abajo)
     ========================================================= */
  .enemy-grid{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    gap:14px;
    margin-top:14px;
    align-items:stretch;
    justify-content:stretch;
  }

  .enemy{
    flex:1 1 40%;
    min-width:460px; /* si quieres más 2-por-fila, baja a 420 */
    border-radius:14px;
    border:1px solid rgba(var(--accent), .18);
    background:rgba(0,0,0,.18);
    padding:14px;
    overflow:hidden;
  }

  /* anti desbordes por si acaso */
  .enemy, .boss{ overflow-wrap:anywhere; word-break:break-word; }

  .enemy-flex{
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    gap:14px;
    align-items:stretch;
  }

  .enemy-head{
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    gap:6px;
  }
  .enemy-head .badges{
    display:flex;
    gap:8px;
    flex-wrap:wrap;
    justify-content:center;
    margin-bottom:6px;
  }
  .enemy-head h3{ margin:4px 0 2px; line-height:1.15; }

  /* BODY en columna: media arriba, info abajo */
  .enemy-body{
    display:flex;
    flex-direction:column;
    gap:12px;
    margin-top:12px;
  }

  .enemy-media{
    width:100%;
    border-radius:12px;
    border:1px solid rgba(var(--accent), .22);
    background:rgba(255,255,255,.03);
    padding:10px;
    display:grid;
    place-items:center;
    min-height:220px;
    position:relative;
    overflow:hidden;
  }

  .enemy-media .ph{
    display:grid;
    place-items:center;
    gap:6px;
    text-align:center;
    padding:14px 10px;
    color:rgba(255,255,255,.75);
    border-radius:10px;
    border:1px dashed rgba(var(--accent), .26);
    background:rgba(var(--accent), .08);
    width:100%;
    height:100%;
    min-height:190px;
  }
  .enemy-media .ph-icon{ font-size:1.2rem; opacity:.9; }
  .enemy-media .ph-text{
    font-weight:900;
    letter-spacing:.06em;
    text-transform:uppercase;
    font-size:.78rem;
    opacity:.85;
  }
  .enemy-media.has-img .ph{ display:none; }
  .enemy-media img{
    width:100%;
    height:auto;
    max-height:300px;
    object-fit:contain;
    filter:drop-shadow(0 10px 22px rgba(0,0,0,.45));
  }

  .enemy-info{ width:100%; }
  .enemy-info .list.compact{ margin:0; }

  /* =========================================================
     BOSSES — FLEX WRAP + 2 POR FILA (desktop first)
     - boss-grid: flex wrap
     - boss: flex 1 1 40%
     - boss interno en columna para imagen/escenario arriba
     ========================================================= */
  .boss-grid{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    gap:14px;
    margin-top:14px;
    align-items:stretch;
    justify-content:stretch;
  }

  .boss{
    flex:1 1 40%;
    min-width:460px;
    border-radius:14px;
    border:1px solid rgba(var(--accent), .18);
    background:rgba(var(--accent), .06);
    padding:14px;
    overflow:hidden;

    display:flex;
    flex-direction:column;
    gap:12px;
  }
  .boss-flex{
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    gap:14px;
    align-items:flex-start;
  }
  .boss .badges{
    display:flex;
    gap:8px;
    flex-wrap:wrap;
    margin-bottom:6px;
  }
  .boss h3{ margin:4px 0 2px; line-height:1.15; }

  .boss-media{
    width:100%;
    border-radius:12px;
    border:1px solid rgba(var(--accent), .22);
    background:rgba(0,0,0,.18);
    padding:10px;
    display:grid;
    place-items:center;
    min-height:220px;
    overflow:hidden;
  }
  .boss-media.has-img .ph{ display:none; }
  .boss-media img{
    width:100%;
    height:auto;
    max-height:320px;
    object-fit:contain;
    filter:drop-shadow(0 10px 22px rgba(0,0,0,.45));
  }
  .boss-info{
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    gap:6px;
  }
  .actions.bottom{ margin-top:18px; }
</style>

</BaseLayout>
```

---
## FILE: src/pages/proyecto/historia.astro
---

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
const base = import.meta.env.BASE_URL;
---

<BaseLayout
  title="Kaelum — Historia"
  description="Historia y narrativa (Actos 1–3 + Misiones principales): enfoque narrativo, estructura de actos, misiones clave y decisiones."
>

<section class="hero">
  <header class="header">
    <p class="kicker">GDD · Modo Historia</p>
    <h1>Historia y narrativa</h1>
    <p class="lead">
      Kaelum cuenta su historia desde dentro: lo que vives, lo que eliges y lo que el mundo decide creer sobre ti.
      No vienes a que te aplaudan. Vienes a sobrevivir… y a decidir qué tipo de persona vas a ser cuando tengas poder de verdad.
    </p>
    <div class="actions">
        <a class="btn" href={`${base}proyecto/`}>Volver a Proyecto</a>
        <a class="btn primary" href={`${base}proyecto/mundo/`}>Ver Mundo</a>
        <a class="btn " href={`${base}proyecto/personajes/`}>Ver Personajes</a>
        <a class="btn" href={`${base}proyecto/cinematicas/`}>Ver cinemáticas</a>
        <a class="btn" href={`${base}proyecto/enemigos/`}>Ver Enemigos</a>
        <a class="btn" href={`${base}proyecto/progreso/`}>Ver Progreso</a>
    </div>
  </header>
</section>
<section class="gdd-section" id="historia">
  <article class="card">
    <h2>Enfoque narrativo</h2>
    <ul class="bullets">
      <li>La narrativa no corta el ritmo: se construye con exploración, diálogos, misiones y consecuencias.</li>
      <li>La información se revela poco a poco: primero el rechazo, luego la verdad, y al final la decisión.</li>
      <li>El conflicto no es solo contra monstruos: es social, moral y estructural.</li>
    </ul>

    <blockquote class="quote">
      <p>“Te trajeron para salvarlos… pero también puedes ser la razón de su caída.”</p>
      <cite>Frase núcleo</cite>
    </blockquote>
  </article>

  <article class="card">
    <h2>Acto 1 — “No eres bienvenido”</h2>
    <p>
      El juego abre con <strong>El Eclipse</strong>: una calle normal, un evento imposible y una ruptura de realidad.
      Despiertas en Kaelum convertido en <strong>Kael</strong>, y el primer aprendizaje no es el combate: es la sensación de ser
      observado como una amenaza.
    </p>

    <div class="subcard">
      <h3>El tabú del pasado (por qué el pueblo te teme)</h3>
      <p>
        Durante un ataque de anomalías, Kael desató por primera vez una magia distinta, vinculada a la energía violeta de La Fisura.
        Detuvo a las criaturas… pero esa energía rebotó e impactó en civiles. Algunos murieron. Otros sobrevivieron rotos.
        Fue un accidente, pero el mundo lo recuerda como prueba.
      </p>
    </div>

    <div class="subcard">
      <h4>Giro del Acto 1 (punto de no retorno emocional)</h4>
      <p>
        Tras un evento con <strong>Liora</strong> (criaturas de una anomalía entrando en la ciudad y yendo a por ella),
        el mundo no responde con gratitud: aparecen extremistas del pueblo llano y la situación escala a persecución.
        Da igual tu intención: si te temen, te van a querer muerto.
      </p>
    </div>
  </article>

  <article class="card">
    <h2>Acto 2 — “La verdad está bajo sus túnicas”</h2>
    <p>
      El Acto 2 deja de ir “sobre aguantar el rechazo” y pasa a ir sobre entender el sistema.
      Ruinas, runas y pistas te llevan al núcleo: <strong>el Orbe del Origen</strong> y su relación con La Fisura.
    </p>

    <div class="subcard">
      <h3>La Orden no es un villano plano</h3>
      <p>
        La Orden funciona: ha contenido amenazas, ha construido conocimiento y ha dado herramientas al mundo.
        Pero el coste está oculto: estabilidad a cambio de aceptar tragedias como “daño colateral”.
      </p>
    </div>

    <div class="subcard">
      <h3>Giro del Acto 2 (plot twist principal)</h3>
      <p>
        Descubres que La Orden no solo conocía el Orbe: lo tenía y lo usaba deliberadamente.
        Ese momento rompe el centro moral del juego: ya no puedes “seguir como si nada”.
      </p>
    </div>
  </article>

  <article class="card">
    <h2>Acto 3 — “Tu decisión pesa”</h2>
    <p>
      El cierre no va de ganar o perder: va de qué haces con lo que has entendido.
      El final depende del <strong>karma</strong>, de decisiones clave y de la elección final sobre el Orbe.
    </p>

    <div class="subcard">
      <h3>Golpe inevitable antes del clímax</h3>
      <p>
        Antes del final, <strong>Liora muere</strong> durante el avance a la batalla final, en medio del caos (restos de La Orden y anomalías).
        Es un recordatorio: da igual lo que hayas intentado, hay cosas que la guerra no negocia.
      </p>
    </div>

    <div class="grid3">
      <div class="pill">
        <h3>Final bueno</h3>
        <p>Kael destruye el Orbe. Renuncia al dominio. No hay celebración: hay alivio.</p>
      </div>
      <div class="pill">
        <h3>Final neutral</h3>
        <p>Kael sella el Orbe. Estabilidad imperfecta. El peso se comparte, no se elimina.</p>
      </div>
      <div class="pill">
        <h3>Final malo</h3>
        <p>Kael absorbe el Orbe. Abraza La Fisura. Se convierte en lo que el mundo temía.</p>
      </div>
    </div>
  </article>

  <article class="card">
    <h2>Misiones principales (columna vertebral)</h2>
    <p class="muted">
      La estructura sigue un escalado claro: <strong>Identidad → Verdad → Decisión</strong>.
      Cada bloque desbloquea sistemas y eleva el conflicto sin perder el foco del gunplay.
    </p>

    <div class="timeline">
      <div class="tblock">
        <h3>Acto 1 — Identidad</h3>
        <ol>
          <li><strong>Despertar en Kaelum</strong> — tutorial + primer rechazo.</li>
          <li><strong>La Ciudad no te quiere</strong> — primer hub + Liora + reputación social.</li>
          <li><strong>El Taller Silencioso</strong> — Maeren + memoria 1.</li>
          <li><strong>Grieta en el Bosque</strong> — decisión civiles vs eficacia.</li>
          <li><strong>El Poder de la Fisura</strong> — primer poder + persecución (fin de acto).</li>
        </ol>
      </div>

      <div class="tblock">
        <h3>Acto 2 — Verdad</h3>
        <ol start="6">
          <li><strong>Ruinas y Runas</strong> — vínculo Orbe-Fisura.</li>
          <li><strong>La Orden observa</strong> — jerarquía + control.</li>
          <li><strong>El Fugitivo</strong> — proteger o entregar (punto de no retorno).</li>
          <li><strong>Castillo de la Pieza</strong> — jefe + pieza para guardianes.</li>
          <li><strong>El Orbe del Origen</strong> — revelación: La Orden lo usaba.</li>
        </ol>
      </div>

      <div class="tblock">
        <h3>Acto 3 — Decisión</h3>
        <ol start="11">
          <li><strong>Reunir a los Guardianes</strong> — aliados + preparación final.</li>
          <li><strong>Decisión y Final</strong> — 3 finales según karma + decisiones.</li>
        </ol>
      </div>
    </div>
  </article>
  <div class="actions">
        <a class="btn" href={`${base}proyecto/`}>Volver a Proyecto</a>
        <a class="btn primary" href={`${base}proyecto/mundo/`}>Ver Mundo</a>
        <a class="btn " href={`${base}proyecto/personajes/`}>Ver Personajes</a>
        <a class="btn" href={`${base}proyecto/cinematicas/`}>Ver cinemáticas</a>
        <a class="btn" href={`${base}proyecto/enemigos/`}>Ver Enemigos</a>
        <a class="btn" href={`${base}proyecto/progreso/`}>Ver Progreso</a>
    </div>
</section>

<style>
  .header{ margin-bottom: 18px; }
  .kicker{
    letter-spacing: .06em;
    text-transform: uppercase;
    opacity: .75;
    margin: 0 0 6px;
    font-size: .86rem;
  }
  h2{ margin: 0 0 10px; font-size: 2rem; }
  .lead{ margin: 0 ; text-align:justify; opacity: .92; line-height: 1.55; }
  .card{
    margin-top: 16px;
    padding: 16px 16px;
    border: 1px solid rgba(255,255,255,.10);
    border-radius: 14px;
    background: rgba(255,255,255,.04);
  }
  .subcard{
    margin-top: 12px;
    padding: 12px 12px;
    border-radius: 12px;
    border: 1px solid rgba(29, 11, 11, 0.1);
    background: rgba(0,0,0,.18);
  }
  .subcard p{
    text-align: justify;
  }
  .bullets{ margin: 10px 0 0; padding-left: 38px; }
  .bullets li{ margin: 6px 0; }

  .quote{
    margin: 14px 0 0;
    padding: 12px 12px;
    border-left: 4px solid rgba(170,120,255,.65);
    background: rgba(170,120,255,.08);
    border-radius: 10px;
  }
  .quote p{ margin: 0 0 6px; font-weight: 600; }
  .quote cite{ opacity: .8; font-style: normal; font-size: .92rem; }

  .grid3{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-top: 12px;
  }
  .pill{
    padding: 12px 12px;
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.03);
  }
  .pill h3{ margin: 0 0 8px; }
  .pill p{ margin: 0; opacity: .92; line-height: 1.45; }

  .muted{ opacity: .82; }

  .timeline{ margin-top: 12px; display: grid; gap: 12px; }
  .tblock{
    padding: 12px 12px;
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(0,0,0,.14);
  }
  .tblock h3{ margin: 0 0 10px; font-size: 1.4rem; }
  .tblock ol{ margin: 0; padding-left: 18px; }
  .tblock li{ margin: 6px 40px; line-height: 1.45; }

  @media (max-width: 860px){
    .grid3{ grid-template-columns: 1fr; }
  }
</style>

</BaseLayout>
```

---
## FILE: src/pages/proyecto/index.astro
---

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
const base = import.meta.env.BASE_URL;
---

<BaseLayout
  title="Kaelum — Proyecto"
  description="Sección de proyecto: historia, mundo, cinemáticas, personajes, enemigos y progreso."
>
  <section class="hero hero-pro">
    <p class="kicker">Proyecto</p>
    <h1>Guion, mundo y contenido</h1>
    <p class="lead">
      Esto se lee como un dossier: titulares claros, bloques visuales y decisiones defendibles.
      En Kaelum nada está “por estar”: cada pieza existe porque <strong>empuja gameplay</strong>.
    </p>
    <div class="meta">
      <span class="tag">Narrativa</span>
      <span class="tag">Cinemáticas</span>
      <span class="tag">Personajes</span>
      <span class="tag">Enemigos</span>
      <span class="tag">Progreso</span>
      <span class="tag">Devlog</span>
    </div>
    <div class="callout subtle" style="margin-top:12px">
      <strong>Orden recomendado:</strong> Historia → Mundo → Personajes → Enemigos → Cinemáticas → Progreso.
      (Las cinemáticas aquí están en versión resumida “publicable”, no storyboard full.)
    </div>
        <div class="actions">
      <a class="btn primary" href={`${base}proyecto/historia/`}>Historia</a>
      <a class="btn" href={`${base}proyecto/mundo/`}>Mundo</a>
      <a class="btn" href={`${base}proyecto/cinematicas/`}>Cinemáticas</a>
      <a class="btn" href={`${base}proyecto/personajes/`}>Personajes</a>
      <a class="btn" href={`${base}proyecto/enemigos/`}>Enemigos</a>
      <a class="btn" href={`${base}proyecto/progreso/`}>Progreso</a>
    </div>
  </section>

  <div class="grid">
    <article class="card">
      <div class="label">// BACKGROUND</div>
      <h2>Historia</h2>
      <p class="muted">
        Premisa, conflicto, objetivo del protagonista y rumbo narrativo.
        Enfocado para que alguien ajeno al proyecto lo entienda rápido.
      </p>
      <div class="actions">
        <a class="btn primary" href={`${base}proyecto/historia/`}>Abrir</a>
      </div>
    </article>

    <article class="card">
      <div class="label">// WORLD_BUILDING</div>
      <h2>Mundo</h2>
      <p class="muted">
        Tono, ambientación, reglas del universo y referencias visuales.
        Lo justo para sostener el juego sin convertirlo en novela.
      </p>
      <div class="actions">
        <a class="btn primary" href={`${base}proyecto/mundo/`}>Abrir</a>
      </div>
    </article>

    <article class="card">
      <div class="label">// CHARACTERS</div>
      <h2>Personajes</h2>
      <p class="muted">
        Protagonista, aliados y secundarios. Ficha rápida, rol en historia, función en gameplay,
        y “lectura” visual.
      </p>
      <div class="actions">
        <a class="btn primary" href={`${base}proyecto/personajes/`}>Abrir</a>
      </div>
    </article>

    <article class="card">
      <div class="label">// ENEMIES</div>
      <h2>Enemigos</h2>
      <p class="muted">
        Roles de combate + facciones por color. Diseñado para lectura rápida: qué es, qué hace,
        cómo se contrarresta.
      </p>
      <div class="actions">
        <a class="btn primary" href={`${base}proyecto/enemigos/`}>Abrir</a>
      </div>
    </article>

    <article class="card">
      <div class="label">// SEQUENCES</div>
      <h2>Cinemáticas</h2>
      <p class="muted">
        Versión resumida “publicable”: intención audiovisual, estructura y momentos clave.
        Profundiza sin comerse la página.
      </p>
      <div class="actions">
        <a class="btn primary" href={`${base}proyecto/cinematicas/`}>Abrir</a>
      </div>
    </article>

    <article class="card">
      <div class="label">// PROGRESSION</div>
      <h2>Progreso</h2>
      <p class="muted">
        Objetivos, ritmo y consecuencias. Un mapa defendible: bucle de progreso + estructura + hitos.
      </p>
      <div class="actions">
        <a class="btn primary" href={`${base}proyecto/progreso/`}>Abrir</a>
      </div>
    </article>
    <article class="card full">
      <h2>Por qué este formato</h2>
      <p class="muted">
        La idea es que mañana cambias una cinemática o un enemigo y esto se actualiza sin romper el resto.
        Todo queda en piezas pequeñas, con intención, y sin “texto de guía” que dé vergüenza enseñar.
      </p>
      <div class="actions" style="margin-top:10px">
        <a class="btn" href={`${base}kaelum/`}>Volver a Resumen</a>
        <a class="btn" href={`${base}vision/`}>Ir a Visión</a>
      </div>
    </article>
  </div>

  <style>
    .hero-pro{ position:relative; overflow:hidden; }
    .hero-pro:after{
      content:"";
      position:absolute;
      inset:-2px;
      pointer-events:none;
      background: radial-gradient(900px 260px at 20% 0%, rgba(70,255,150,.12), transparent 65%),
                  radial-gradient(700px 260px at 90% 10%, rgba(120,160,255,.10), transparent 60%);
      opacity:.9;
    }

    .label{
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      color: var(--muted2);
      letter-spacing: .12em;
      text-transform: uppercase;
      font-size: .72rem;
      margin-bottom: 8px;
    }

    .callout{
      margin-top: 14px;
      padding: 12px 14px;
      border-radius: 12px;
      border: 1px dashed rgba(255,255,255,.18);
      background: rgba(0,0,0,.18);
      color: var(--muted);
    }
    .callout.subtle{ border-style: solid; border-color: rgba(255,255,255,.08); background: rgba(255,255,255,.03); }
  </style>
</BaseLayout>
```

---
## FILE: src/pages/proyecto/mundo.astro
---

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
const base = import.meta.env.BASE_URL;
---

<BaseLayout
    title="Kaelum — Mundo"
    description="Mundo y ambientación de Kaelum: zonas, reglas, facciones, La Fisura y lectura visual aplicada a gameplay."
>
    <section class="hero">
        <p class="kicker">Proyecto</p>
        <h1>Mundo</h1>
        <p class="lead">
            Kaelum no es un decorado: es un sistema que empuja al jugador a leer
            el entorno, entender el rechazo social y tomar decisiones que dejan
            huella. Medieval y rural en apariencia, pero con tecnología arcana y
            armas de fuego lo bastante presentes como para que el mundo se
            sienta “funcional”.
        </p>

        <div class="actions">
            <a class="btn" href={`${base}proyecto/`}>Volver a Proyecto</a>
            <a class="btn" href={`${base}proyecto/historia/`}>Ver Historia</a>
            <a class="btn primary" href={`${base}proyecto/personajes/`}
                >Ver Personajes</a
            >
            <a class="btn" href={`${base}proyecto/cinematicas/`}
                >Ver cinemáticas</a
            >
            <a class="btn" href={`${base}proyecto/enemigos/`}>Ver Enemigos</a>
            <a class="btn" href={`${base}proyecto/progreso/`}>Ver Progreso</a>
        </div>
    </section>

    <div class="grid">
        <section class="card full">
            <div class="label">// IDENTIDAD</div>
            <h2>Medieval funcional + tecnología arcana (la mezcla)</h2>
            <p class="muted">
                La estética base es rural/medieval, pero el mundo está
                atravesado por una “lógica moderna”: control, jerarquía, rutas,
                permisos, protocolos. Lo que la gente no entiende lo llama
                maldición, pero lo que la Orden no explica… lo administra.
            </p>

            <div class="chips">
                <span class="chip">Arquitectura robusta</span>
                <span class="chip">Rutas de control</span>
                <span class="chip">Armas comunes</span>
                <span class="chip">Energía rara</span>
                <span class="chip">Miedo social</span>
                <span class="chip">Bruma violeta</span>
            </div>

            <div class="callout">
                <strong>Idea clave:</strong> Kaelum se entiende por contraste: lo
                cotidiano busca calma, pero La Fisura y la Orden convierten esa calma
                en una “estabilidad vigilada”.
            </div>
        </section>

        <section class="card">
            <div class="label">// LA FISURA</div>
            <h2>Qué es para la gente</h2>
            <p class="muted">
                La mayoría no sabe “qué es” La Fisura. Lo que sí conoce: grietas
                que se abren, anomalías que salen, y temporadas donde el bosque
                se vuelve territorio hostil. La explicación popular es simple y
                peligrosa:
                <strong>una maldición</strong>, “el reflejo de que el mundo no
                está en balance”.
            </p>

            <ul class="list">
                <li>
                    <strong>Señales:</strong> bruma violeta, distorsión sutil, cicatrices
                    en el terreno.
                </li>
                <li>
                    <strong>Consecuencia:</strong> aparición de anomalías en rutas
                    y eventos de grieta.
                </li>
                <li>
                    <strong>Lectura jugable:</strong> el jugador aprende a identificar
                    “zonas enfermas” sin HUD invasivo.
                </li>
            </ul>
        </section>

        <section class="card">
            <div class="label">// SOCIEDAD</div>
            <h2>Rechazo como sistema</h2>
            <p class="muted">
                Kael no es rechazado por un rumor cualquiera: el pueblo lo
                asocia con un accidente real (magia violeta fuera de control
                durante un ataque) que dejó civiles muertos y otros marcados.
                Aunque intente hacer el bien, el mundo responde con miedo.
            </p>
            <ul class="list">
                <li>
                    <strong>El miedo se contagia:</strong> primero miradas, luego
                    rumores, luego persecución.
                </li>
                <li>
                    <strong>El tabú se hereda:</strong> lo “diferente” se trata como
                    amenaza.
                </li>
                <li>
                    <strong>El jugador lo vive:</strong> cambia la reacción de NPCs,
                    acceso a rutas y apoyo social.
                </li>
            </ul>
        </section>

        <section class="card full">
            <div class="label">// ZONAS</div>
            <h2>Mapa mental del mundo (zonas y función jugable)</h2>
            <p class="muted">
                El viaje se apoya en transiciones claras de tono y color: <strong
                    >cálido cotidiano</strong
                > → <strong>violeta frío</strong> →
                <strong>oscuridad</strong> → <strong>rural apagado</strong>. No
                es solo cinemática: guía la progresión por biomas y tensión.
            </p>

            <div class="grid" style="margin-top:10px">
                <div class="card" style="grid-column: span 6;">
                    <h3>1) Casa de Kael</h3>
                    <p class="muted">
                        Inicio y choque de identidad. Espacio seguro narrativo
                        (no por “peligro cero”, sino por intimidad). Sirve para
                        tutorial, atmósfera y primer contacto con el rechazo.
                    </p>
                    <ul class="list">
                        <li>Tutorial + lectura de entorno</li>
                        <li>Transición del mundo “real” a Kaelum</li>
                        <li>Primeras pistas de La Fisura a distancia</li>
                    </ul>
                </div>

                <div class="card" style="grid-column: span 6;">
                    <h3>2) Vesperia (ciudad principal / hub)</h3>
                    <p class="muted">
                        Núcleo social y político. Misiones, comercio, jerarquía
                        visible, propaganda y “normalidad” forzada. Aquí vive
                        Liora como ancla emocional y humana del mundo.
                    </p>
                    <ul class="list">
                        <li>Misiones principales y secundarias</li>
                        <li>Facciones, reputación, rumores</li>
                        <li>
                            Control de la Orden (guardias, símbolos, permisos)
                        </li>
                    </ul>
                </div>

                <div class="card" style="grid-column: span 6;">
                    <h3>3) Bosques exteriores</h3>
                    <p class="muted">
                        Zona intermedia recurrente. Camino de paso y termómetro
                        de amenaza: patrullas, emboscadas, eventos aleatorios y
                        grietas que “respiran”.
                    </p>
                    <ul class="list">
                        <li>Rutas, patrullas, eventos</li>
                        <li>Primeras grietas serias</li>
                        <li>Lectura clara de peligro por ambiente</li>
                    </ul>
                </div>

                <div class="card" style="grid-column: span 6;">
                    <h3>4) Ruinas antiguas</h3>
                    <p class="muted">
                        Altares, runas y llaves de progreso. Aquí el lore se
                        cuenta con símbolos, mecánicas y memorias, no con
                        biblias eternas.
                    </p>
                    <ul class="list">
                        <li>Runas / llaves / gating</li>
                        <li>Lore breve y significativo</li>
                        <li>Piezas del sistema de Guardianes</li>
                    </ul>
                </div>

                <div class="card" style="grid-column: span 6;">
                    <h3>5) Cuevas</h3>
                    <p class="muted">
                        Atajos y secretos. Funcionan como “tuberías”: conectan
                        zonas y recompensan exploración con loot, lore y rutas
                        alternativas.
                    </p>
                    <ul class="list">
                        <li>Atajos entre biomas</li>
                        <li>Loot / notas / coleccionables</li>
                        <li>Secretos y acceso alternativo</li>
                    </ul>
                </div>

                <div class="card" style="grid-column: span 6;">
                    <h3>6) Nocturn (aldea secundaria)</h3>
                    <p class="muted">
                        Identidad propia. Es el lugar donde el “precio” se
                        vuelve humano: misiones, trauma social, supersticiones y
                        consecuencias de decisiones.
                    </p>
                    <ul class="list">
                        <li>Misiones y microhistorias</li>
                        <li>Reacción fuerte al karma</li>
                        <li>Espacios de calma que se rompen rápido</li>
                    </ul>
                </div>

                <div class="card" style="grid-column: span 12;">
                    <h3>7) Castillos (3 fortalezas clave)</h3>
                    <p class="muted">
                        Escalones de dificultad. Zonas de prueba real: jefes,
                        piezas clave y momentos de “subida” narrativa. Aquí el
                        mundo deja claro que la amenaza no es solo monstruosa:
                        también es estructural.
                    </p>
                    <ul class="list">
                        <li>
                            <strong>Noctiferum</strong> — noche como naturaleza (acto
                            de presión y caza)
                        </li>
                        <li>
                            <strong>Umbrafortis</strong> — fortaleza de sombra (control
                            y bloqueo de rutas)
                        </li>
                        <li>
                            <strong>Tenebrium</strong> — tiniebla estructural (clímax
                            de peligro y pieza clave)
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="card full">
            <div class="label">// TECNOLOGÍA Y ARMAS</div>
            <h2>Armas de fuego comunes, energía rara</h2>
            <p class="muted">
                Las armas de fuego son parte del mundo: no son un “capricho
                moderno”. Lo raro es la tecnología de energía: aparece como
                ventaja, misterio o símbolo de estatus. La Orden y artesanos
                forasteros fabrican y mantienen.
            </p>

            <div class="grid" style="margin-top:10px">
                <div class="card" style="grid-column: span 6;">
                    <h3>Lo común</h3>
                    <ul class="list">
                        <li>
                            Armas de fuego presentes en rutas, guardias y
                            mercado
                        </li>
                        <li>
                            Mejoras y consumibles accesibles para progresión
                        </li>
                        <li>Economía sencilla y clara para el jugador</li>
                    </ul>
                </div>
                <div class="card" style="grid-column: span 6;">
                    <h3>Lo raro</h3>
                    <ul class="list">
                        <li>
                            Armas/artefactos de energía con identidad visual
                            propia
                        </li>
                        <li>Más únicas, más “de historia” que de spam</li>
                        <li>
                            Asociadas a jerarquía, pruebas o zonas restringidas
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="card">
            <div class="label">// REGLAS</div>
            <h2>Reglas del mundo</h2>
            <ul class="list">
                <li>
                    <strong>El poder se nota:</strong> guardias, checkpoints, símbolos,
                    permisos, patrullas.
                </li>
                <li>
                    <strong>La información es un recurso:</strong> rumores, carteles,
                    notas cortas, coleccionables.
                </li>
                <li>
                    <strong>El entorno enseña:</strong> La Fisura se lee por bruma,
                    distorsión y cicatrices, no por tutoriales eternos.
                </li>
                <li>
                    <strong>La calma es frágil:</strong> el mundo puede parecer estable…
                    hasta que una grieta decide abrirse.
                </li>
            </ul>
        </section>

        <section class="card">
            <div class="label">// LECTURA</div>
            <h2>Lectura visual</h2>
            <ul class="list">
                <li>
                    <strong>Claridad</strong> por encima de detalle: que el jugador
                    entienda dónde está y qué amenaza hay.
                </li>
                <li>
                    <strong>Landmarks</strong> para orientar (torres, puertas, símbolos
                    de la Orden, altares en ruinas).
                </li>
                <li>
                    <strong>Color</strong> como lenguaje: cálido = humano, violeta
                    = infección, apagado = desgaste.
                </li>
            </ul>
        </section>

        <section class="card full">
            <div class="label">// TRADUCCIÓN A GAMEPLAY</div>
            <h2>Cómo se convierte en gameplay</h2>
            <p class="muted">
                El mundo se diseña para soportar el loop central: explorar →
                enterarte → decidir → pagar consecuencias. Kael no avanza solo
                por disparar mejor, sino por cómo se relaciona con el poder y
                con el miedo de la gente.
            </p>

            <div class="grid" style="margin-top:10px">
                <div class="card" style="grid-column: span 6;">
                    <h3>Escenarios</h3>
                    <ul class="list">
                        <li>
                            Zonas de control (puertas, inspecciones, rutas
                            cortadas, guardias)
                        </li>
                        <li>
                            Zonas de conflicto (líneas de visión, cobertura,
                            emboscadas, persecuciones)
                        </li>
                        <li>
                            Zonas de descubrimiento (ruinas, cuevas, altares,
                            notas, memorias)
                        </li>
                    </ul>
                </div>

                <div class="card" style="grid-column: span 6;">
                    <h3>Recompensas</h3>
                    <ul class="list">
                        <li>
                            Información útil (rutas, llaves, decisiones, acceso)
                        </li>
                        <li>
                            Recursos (mejoras, consumibles, ventajas
                            situacionales)
                        </li>
                        <li>
                            Contexto (lore breve pero con intención y
                            consecuencias)
                        </li>
                    </ul>
                </div>
            </div>

            <div class="actions">
            <a class="btn" href={`${base}proyecto/`}>Volver a Proyecto</a>
            <a class="btn" href={`${base}proyecto/historia/`}>Ver Historia</a>
            <a class="btn primary" href={`${base}proyecto/personajes/`}
                >Ver Personajes</a
            >
            <a class="btn" href={`${base}proyecto/cinematicas/`}
                >Ver cinemáticas</a
            >
            <a class="btn" href={`${base}proyecto/enemigos/`}>Ver Enemigos</a>
            <a class="btn" href={`${base}proyecto/progreso/`}>Ver Progreso</a>
        </div>
        </section>
    </div>

    <style>
        .label {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--muted2);
            letter-spacing: 0.12em;
            text-transform: uppercase;
            font-size: 0.72rem;
            margin-bottom: 8px;
        }
        .chips {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 10px;
        }
        .chip {
            border: 1px solid var(--border);
            background: rgba(255, 255, 255, 0.03);
            color: var(--muted);
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 0.85rem;
        }
        .callout {
            margin-top: 14px;
            border: 1px dashed rgba(120, 255, 180, 0.35);
            background: rgba(70, 255, 150, 0.07);
            border-radius: var(--radius);
            padding: 12px 14px;
            color: var(--muted);
        }
    </style>
</BaseLayout>
```

---
## FILE: src/pages/proyecto/personajes.astro
---

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
const base = import.meta.env.BASE_URL;
---

<BaseLayout
    title="Kaelum — Personajes"
    description="Personajes principales de Kaelum: Kael, Liora, Maeren y el Gran Maestro. Rol narrativo, motivaciones y presencia en gameplay."
>
    <section class="hero" id="personajes">
        <header class="header">
            <p class="kicker">GDD · Modo Historia</p>
            <h2>Personajes</h2>
            <p class="lead">
                En Kaelum, los personajes no están para “contar lore”: están
                para empujarte a decisiones. Kael es el centro del conflicto,
                Liora es el ancla humana, Maeren es la raíz, y el Gran Maestro
                es el sistema con cara.
            </p>

            <div class="actions">
                <a class="btn" href={`${base}proyecto/`}>Volver a Proyecto</a>
                <a class="btn" href={`${base}proyecto/historia/`}
                    >Ver Historia</a
                >
                <a class="btn" href={`${base}proyecto/mundo/`}>Ver Mundo</a>
                <a class="btn primary" href={`${base}proyecto/cinematicas/`}
                    >Ver cinemáticas</a
                >
                <a class="btn" href={`${base}proyecto/enemigos/`}
                    >Ver Enemigos</a
                >
                <a class="btn" href={`${base}proyecto/progreso/`}
                    >Ver Progreso</a
                >
            </div>
        </header>
    </section>
    <section class="card-container">
        <article class="card">
            <h3>Kael</h3>

            <div class="pgrid">
                <div class="portrait">
                    <img
                        src={`${base}assets/personajes/kael.webp`}
                        alt="Ilustración de Kael"
                        loading="lazy"
                    />
                </div>

                <div class="pcontent">
                    <p class="muted">
                        Joven adulto (25–30). No busca ser héroe: busca
                        demostrar que su existencia no es un error. Su arco no
                        va de “ser más fuerte”, va de decidir qué tipo de
                        persona es cuando el poder deja de ser teoría.
                    </p>

                    <div class="chips">
                        <span class="chip">Frases cortas</span>
                        <span class="chip">Ironía defensiva</span>
                        <span class="chip">Moral obstinada</span>
                        <span class="chip">Poder como riesgo</span>
                    </div>

                    <div class="grid2">
                        <div class="subcard">
                            <h4>Objetivo interno</h4>
                            <p>
                                Que el mundo deje de tratarlo como amenaza.
                                <br />Vivir sin tener que justificarse.
                            </p>
                        </div>
                        <div class="subcard">
                            <h4>Objetivo externo</h4>
                            <p>
                                Decidir el destino del Orbe del Origen y el
                                futuro de La Fisura.
                            </p>
                        </div>
                    </div>

                    <div class="subcard">
                        <h4>Relación con el poder</h4>
                        <p>
                            Empieza con miedo y supervivencia. Evoluciona a
                            desconfianza lúcida. El final lo define: ayudar a
                            todos, apartarse y delegar, o abrazar la caída y
                            volverse el monstruo que esperaban.
                        </p>
                    </div>

                    <blockquote class="quote">
                        <p>“No necesita otro tirano.”</p>
                        <cite>Kael</cite>
                    </blockquote>

                    <div class="subcard">
                        <h4>Arma icónica</h4>
                        <p>
                            Una espada heredada de Maeren. No es “la mejor” para
                            un shooter… por eso pesa más: la lleva como
                            recordatorio de quién confió en él cuando nadie lo
                            hacía.
                        </p>
                    </div>
                </div>
            </div>
        </article>

        <article class="card">
            <h3>Liora</h3>

            <div class="pgrid">
                <div class="portrait">
                    <img
                        src={`${base}assets/personajes/liora.webp`}
                        alt="Ilustración de Liora"
                        loading="lazy"
                    />
                </div>

                <div class="pcontent">
                    <p class="muted">
                        Liora es el punto raro del mundo: alguien que mira a
                        Kael y ve persona, no leyenda. No sabe la verdad del
                        Orbe ni las cloacas políticas del consejo. Su papel es
                        humano: confianza, vínculo y pérdida.
                    </p>

                    <div class="chips">
                        <span class="chip">Ancla emocional</span>
                        <span class="chip">Confianza difícil</span>
                        <span class="chip">Rechazo del mundo</span>
                        <span class="chip">Tragedia inevitable</span>
                    </div>

                    <div class="grid2">
                        <div class="subcard">
                            <h4>Qué es para Kael</h4>
                            <p>
                                La persona que lo llena. El “si existe alguien
                                bueno aquí, quizá todavía no está todo roto”.
                            </p>
                        </div>
                        <div class="subcard">
                            <h4>Función jugable</h4>
                            <p>
                                Apoya el peso de decisiones (ayudar / fallar /
                                consecuencias), y marca el coste real antes del
                                clímax.
                            </p>
                        </div>
                    </div>

                    <div class="subcard">
                        <h4>Momento clave</h4>
                        <p>
                            Su muerte ocurre durante el avance hacia la batalla
                            final, en medio del caos (restos de La Orden y
                            anomalías). No es “castigo al jugador”: es una
                            verdad del mundo. Hay cosas que la guerra no
                            negocia.
                        </p>
                    </div>
                </div>
            </div>
        </article>

        <article class="card">
            <h3>Maeren</h3>

            <div class="pgrid">
                <div class="portrait">
                    <img
                        src={`${base}assets/personajes/maeren.webp`}
                        alt="Ilustración de Maeren"
                        loading="lazy"
                    />
                </div>

                <div class="pcontent">
                    <p class="muted">
                        Mentor y única figura real de confianza para Kael. La
                        voz que le enseñó a sostenerse cuando todo lo demás lo
                        empujaba al barro. Muere (o desaparece) 5 años antes de
                        los eventos del juego. Su ausencia se convierte en
                        sistema: memorias, taller, legado.
                    </p>

                    <div class="chips">
                        <span class="chip">Mentor</span>
                        <span class="chip">Legado</span>
                        <span class="chip">Memorias</span>
                        <span class="chip">Herida abierta</span>
                    </div>

                    <div class="subcard">
                        <h4>Función narrativa</h4>
                        <p>
                            El Taller Silencioso y las Memorias no son
                            “flashbacks bonitos”: son piezas de comprensión. Te
                            dan mecánicas, contexto y un espejo moral: qué
                            significa controlar el poder sin convertirte en
                            excusa.
                        </p>
                    </div>
                </div>
            </div>
        </article>

        <article class="card">
            <h3>Gran Maestro</h3>

            <div class="pgrid">
                <div class="portrait">
                    <img
                        src={`${base}assets/personajes/gran-maestro.webp`}
                        alt="Ilustración del Gran Maestro"
                        loading="lazy"
                    />
                </div>

                <div class="pcontent">
                    <p class="muted">
                        No es un villano de caricatura. Es una idea con mando:
                        “estabilidad a cualquier precio”. Representa el control
                        como doctrina, y el Orbe como herramienta. Si el mundo
                        te teme, él lo usa.
                    </p>

                    <div class="chips">
                        <span class="chip">Autoridad</span>
                        <span class="chip">Control</span>
                        <span class="chip">Consejo</span>
                        <span class="chip">Orbe del Origen</span>
                    </div>

                    <div class="grid2">
                        <div class="subcard">
                            <h4>Lo que defiende</h4>
                            <p>
                                Orden, jerarquía, “paz” sostenida por
                                sacrificios aceptados como daño colateral.
                            </p>
                        </div>
                        <div class="subcard">
                            <h4>Lo que provoca</h4>
                            <p>
                                Ruptura moral del Acto 2: cuando el jugador
                                descubre que La Orden lo tenía… y lo usaba
                                deliberadamente.
                            </p>
                        </div>
                    </div>

                    <blockquote class="quote">
                        <p>“El mundo necesita control.”</p>
                        <cite>Gran Maestro</cite>
                    </blockquote>
                </div>
            </div>
        </article>
    </section>
    <div class="actions">
                <a class="btn" href={`${base}proyecto/`}>Volver a Proyecto</a>
                <a class="btn" href={`${base}proyecto/historia/`}
                    >Ver Historia</a
                >
                <a class="btn" href={`${base}proyecto/mundo/`}>Ver Mundo</a>
                <a class="btn primary" href={`${base}proyecto/cinematicas/`}
                    >Ver cinemáticas</a
                >
                <a class="btn" href={`${base}proyecto/enemigos/`}
                    >Ver Enemigos</a
                >
                <a class="btn" href={`${base}proyecto/progreso/`}
                    >Ver Progreso</a
                >
            </div>
</BaseLayout>

<style>
    .kicker {
        letter-spacing: 0.06em;
        text-transform: uppercase;
        opacity: 0.75;
        margin: 0 0 6px;
        font-size: 0.86rem;
    }
    h2 {
        margin: 0 0 10px;
        font-size: 2rem;
    }
    .lead {
        margin: 0;
        text-align: justify;
        opacity: 0.92;
        line-height: 1.55;
    }
    .card-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 5% 5%;
    }
    .card {
        flex: 1 1 45%;
        display: flex;
        flex-direction: column;
        margin-top: 16px;
        padding: 16px 16px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.04);
    }

    .pgrid {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .portrait {
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 14px;
        background: rgba(0, 0, 0, 0.18);
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 260px;
        overflow: hidden;
    }
    .portrait img {
        width: 100%;
        height: auto;
        object-fit: contain;
        filter: drop-shadow(0 10px 24px rgba(0, 0, 0, 0.45));
    }

    .pcontent p {
        text-align: justify;
    }
    .muted {
        opacity: 0.86;
    }

    .chips {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        margin-top: 10px;
    }
    .chip {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(255, 255, 255, 0.03);
        color: rgba(255, 255, 255, 0.82);
        padding: 6px 10px;
        border-radius: 999px;
        font-size: 0.85rem;
    }

    .grid2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
        margin-top: 12px;
    }

    .subcard {
        margin-top: 12px;
        padding: 12px 12px;
        border-radius: 12px;
        border: 1px solid rgba(29, 11, 11, 0.1);
        background: rgba(0, 0, 0, 0.18);
    }
    .subcard h4 {
        margin: 0 0 8px;
    }
    .subcard p {
        margin: 0;
        opacity: 0.92;
        line-height: 1.5;
    }

    .quote {
        margin: 14px 0 0;
        padding: 12px 12px;
        border-left: 4px solid rgba(170, 120, 255, 0.65);
        background: rgba(170, 120, 255, 0.08);
        border-radius: 10px;
    }
    .quote p {
        margin: 0 0 6px;
        font-weight: 600;
    }
    .quote cite {
        opacity: 0.8;
        font-style: normal;
        font-size: 0.92rem;
    }

    @media (max-width: 860px) {
        .pgrid {
            grid-template-columns: 1fr;
        }
        .grid2 {
            grid-template-columns: 1fr;
        }
        .portrait {
            min-height: 220px;
        }
    }
</style>
```

---
## FILE: src/pages/proyecto/progreso.astro
---

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
const base = import.meta.env.BASE_URL;

const acts = [
  {
    n: "00",
    title: "Prólogo — El Eclipse",
    desc: "Un evento ignorado por casi todos. El protagonista humano lo observa… y despierta en Kaelum dentro de Kael. Desde el minuto uno, el mundo te mira raro: no eres “el elegido”, eres el que no encaja.",
    goals: [
      "Presentar el tono: oscuro, funcional, sin épica gratis",
      "Primer choque: estar en Kael = cargar con prejuicios ajenos",
      "Plantar la semilla: La Fisura responde a “señales”",
    ],
  },
  {
    n: "01",
    title: "Acto 1 — “No eres bienvenido”",
    desc: "Aprendes el mundo por experiencia: ayudas, te esfuerzas, intentas hacer lo correcto… y aun así te rechazan. Kael no es odiado por lo que hace hoy, sino por lo que creen que es.",
    goals: [
      "Entender por qué Kael es tratado como “peligro”",
      "Conocer zonas base, aliados y reglas sociales del mundo",
      "Introducir a La Orden como poder real (control + jerarquía)",
    ],
    twist:
      "Plot twist 1: Kael usa por primera vez el Poder de La Fisura para salvar… y la reacción es miedo, persecución y rechazo. Se fija la idea: la intención no basta; el mundo responde a lo que teme.",
  },
  {
    n: "02",
    title: "Acto 2 — “La verdad está bajo sus túnicas”",
    desc: "Dejas de pelear solo contra anomalías y empiezas a pelear contra el sistema: aparece el Orbe del Origen, y con él la doble cara de La Orden. El enemigo ya no es “lo raro”. Es lo organizado.",
    goals: [
      "Conocer el Orbe del Origen y su impacto real en el mundo",
      "Descubrir qué esconde La Orden (y lo que ha aceptado como coste)",
      "Elegir hacia dónde tiras: pueblo, disidentes, guardianes… o tu ambición",
    ],
    twist:
      "Plot twist 2: La Orden no solo sabía del Orbe: lo ha usado deliberadamente asumiendo tragedias como “daño colateral”. Aquí el jugador se define: se rompe por dentro… o se le despierta el hambre de poder.",
  },
  {
    n: "03",
    title: "Acto 3 — “Tu decisión pesa”",
    desc: "El cierre no va de “ganar”. Va de qué haces con lo que ya sabes. El mundo se alinea contra ti o contigo en base a tu conducta y a puntos de no retorno. Y el Orbe deja de ser un objeto: se convierte en sentencia.",
    goals: [
      "Resolver el destino del Orbe (y lo que implica para Kaelum)",
      "Afrontar las consecuencias de tu karma y decisiones irreversibles",
      "Cierre por rutas: bueno / neutral / malo",
    ],
  },
];

const endings = [
  {
    title: "Final bueno",
    subtitle: "protección del mundo (cuesta, pero se sostiene)",
    desc: "Con ayuda de aliados y guardianes, se invoca el enfrentamiento definitivo contra la amenaza y se busca cerrar el ciclo sin perpetuar el control. Kael no se convierte en símbolo perfecto: se convierte en alguien que eligió cargar con el precio.",
    points: [
      "Karma alto (tendencia responsable)",
      "Ayudas y alianzas activas",
      "El mundo reacciona con respeto (no con miedo)",
    ],
  },
  {
    title: "Final neutral",
    subtitle: "contención (estabilidad… con sombra)",
    desc: "Se entrega el Orbe a guardianes para contenerlo/controlarlo. Kaelum se estabiliza, pero Kael elige no cargar con todo el peso del destino. No es cobardía: es aceptar límites.",
    points: [
      "Karma medio (decisiones mezcladas)",
      "Menos aliados, más pragmatismo",
      "El mundo queda estable, pero no “libre”",
    ],
  },
  {
    title: "Final malo",
    subtitle: "poder (el mundo confirma lo que temía)",
    desc: "Kael toma el Orbe, abraza La Fisura y se convierte en el jefe final. El jugador decide si lo justifica como justicia… o como caos. El mundo no te perdona: te recuerda.",
    points: [
      "Karma bajo (tendencia egoísta / uso desmedido)",
      "Caza activa y ruptura social total",
      "Corrupción visible y autoridad por miedo",
    ],
  },
];
---

<BaseLayout
  title="Kaelum — Progreso"
  description="Progreso del juego (historia): prólogo, actos, giros y finales por decisiones."
>
  <section class="hero">
    <p class="kicker">Proyecto</p>
    <h1>Progreso</h1>
    <p class="lead">
      Aquí “progreso” no es el estado del portfolio: es <strong
        >cómo avanza el juego</strong
      >. Prólogo → Acto 1 → Acto 2 → Acto 3. Y el final cambia según lo que
      hayas hecho.
    </p>

    <div class="actions">
      <a class="btn primary" href={`${base}proyecto/`}>Volver a Proyecto</a>
      <a class="btn" href={`${base}proyecto/historia/`}>Ver Historia</a>
      <a class="btn" href={`${base}proyecto/mundo/`}>Ver Mundo</a>
      <a class="btn" href={`${base}proyecto/personajes/`}>Ver Personajes</a>
      <a class="btn" href={`${base}proyecto/cinematicas/`}>Ver Cinemáticas</a>
      <a class="btn" href={`${base}proyecto/enemigos/`}>Ver Enemigos</a>
    </div>
  </section>

  <div class="grid">
    <section class="card full">
      <div class="label">// PROGRESO PRINCIPAL</div>
      <h2>Estructura narrativa (Prólogo + 3 actos)</h2>
      <p class="muted">
        Escalado dramático claro: <strong>identidad → verdad → decisión</strong
        >. En Acto 1 aprendes lo que el mundo cree que eres. En Acto 2 descubres
        por qué funciona así. En Acto 3 decides qué haces con el Orbe… y qué
        haces contigo.
      </p>

      <div class="steps">
        {
          acts.map((a) => (
            <div class="step">
              <div class="left">
                <div class="n">{a.n}</div>
              </div>

              <div class="right">
                <div class="t">{a.title}</div>
                <div class="d muted">{a.desc}</div>

                <ul class="list compact">
                  {a.goals.map((g) => (
                    <li>{g}</li>
                  ))}
                </ul>

                {a.twist && (
                  <div class="callout">
                    <strong>Giro narrativo:</strong> {a.twist}
                  </div>
                )}
              </div>
            </div>
          ))
        }
      </div>
    </section>

    <section class="card full">
      <div class="label">// RELACIÓN NARRATIVA / MECÁNICA</div>
      <h2>Qué cambia realmente al avanzar</h2>
      <p class="muted">
        La historia no está para adornar el combate. Está para modificar cómo el
        mundo reacciona a ti, qué puertas se abren y cuáles se cierran. La
        narrativa no interrumpe el gameplay: lo condiciona.
      </p>

      <div class="grid" style="margin-top:10px">
        <div class="card" style="grid-column: span 6;">
          <h3>Lo que entiendes como jugador</h3>
          <ul class="list">
            <li>
              <strong>Acto 1:</strong> la intención no basta. El mundo reacciona a
              lo que teme.
            </li>
            <li>
              <strong>Acto 2:</strong> el verdadero peligro no siempre es la anomalía,
              sino quien la administra.
            </li>
            <li>
              <strong>Acto 3:</strong> decidir implica aceptar consecuencias irreversibles.
            </li>
          </ul>
        </div>

        <div class="card" style="grid-column: span 6;">
          <h3>Lo que se vuelve jugable</h3>
          <ul class="list">
            <li>
              Sistema de reputación y tendencia moral visible en reacciones
              sociales.
            </li>
            <li>
              Puntos de no retorno que alteran rutas, alianzas y
              enfrentamientos.
            </li>
            <li>
              El Orbe como elemento jugable y moral: no es un objeto, es una
              postura.
            </li>
          </ul>
        </div>
      </div>

      <div class="callout subtle">
        <strong>Clave temática:</strong> cuando usas el Poder de La Fisura para resolver
        conflictos, el mundo no lo interpreta como salvación. Lo interpreta como una
        confirmación de lo que ya sospechaba.
      </div>
    </section>

    <section class="card full">
      <div class="label">// FINALES</div>
      <h2>Tres rutas finales (derivadas de tu conducta)</h2>
      <p class="muted">
        No hay finales por “seleccionar una frase correcta”. El desenlace es el
        resultado acumulado de tus decisiones, tus alianzas y cómo utilizaste el
        Orbe del Origen.
      </p>

      <div class="endings">
        {
          endings.map((e) => (
            <div class="ending">
              <h3>{e.title}</h3>
              <p class="muted">
                <strong>{e.subtitle}</strong>
              </p>
              <p class="muted">{e.desc}</p>
              <ul class="list compact">
                {e.points.map((p) => (
                  <li>{p}</li>
                ))}
              </ul>
            </div>
          ))
        }
      </div>
    </section>

    <section class="card full">
      <div class="label">// MULTIJUGADOR</div>
      <h2>Mismo universo, intención distinta</h2>
      <p class="muted">
        El modo multijugador comparte estética, facciones y trasfondo, pero no
        continúa la línea argumental del singleplayer. La campaña construye
        identidad y conflicto. El multijugador destila ese mundo en
        enfrentamientos directos, legibles y competitivos.
      </p>

      <div class="callout">
        <strong>En resumen:</strong> la historia crea significado. El multijugador
        explota sus sistemas.
      </div>
    </section>

    <section class="card full">
      <div class="label">// CIERRE</div>
      <h2>Progresión en una frase</h2>
      <p class="muted">
        Kaelum no progresa por dificultad creciente, sino por revelación
        creciente. Empieza definiéndote desde fuera, continúa mostrándote el
        sistema que te clasifica, y termina obligándote a elegir si lo rompes,
        lo perpetúas o te conviertes en él.
      </p>
    </section>
  </div>
  <div class="actions">
      <a class="btn primary" href={`${base}proyecto/`}>Volver a Proyecto</a>
      <a class="btn" href={`${base}proyecto/historia/`}>Ver Historia</a>
      <a class="btn" href={`${base}proyecto/mundo/`}>Ver Mundo</a>
      <a class="btn" href={`${base}proyecto/personajes/`}>Ver Personajes</a>
      <a class="btn" href={`${base}proyecto/cinematicas/`}>Ver Cinemáticas</a>
      <a class="btn" href={`${base}proyecto/enemigos/`}>Ver Enemigos</a>
  </div>
</BaseLayout>

<style>
  .label {
    font-family:
      ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    color: var(--muted2);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-size: 0.72rem;
    margin-bottom: 8px;
  }

  .steps {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
  }

  .step {
    display: flex;
    gap: 14px;
    border: 1px solid var(--border);
    background: rgba(255, 255, 255, 0.03);
    border-radius: var(--radius);
    padding: 14px 16px;
    align-items: flex-start;
  }

  .left {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    min-width: 60px;
    padding-top: 2px;
  }

  .step .n {
    font-weight: 1000;
    letter-spacing: 0.18em;
    opacity: 0.55;
    font-size: 1rem;
  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 0;
  }

  .step .t {
    font-weight: 900;
    color: var(--muted2);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.92rem;
    line-height: 1.15;
  }

  .d {
    line-height: 1.55;
  }

  .list.compact {
    margin: 0;
    padding-left: 18px;
  }

  .callout {
    margin-top: 6px;
    padding: 10px 12px;
    border-radius: 12px;
    border: 1px dashed rgba(255, 255, 255, 0.18);
    background: rgba(0, 0, 0, 0.18);
    color: var(--muted);
  }

  .callout.subtle {
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.03);
  }

  .endings {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 12px;
    align-items: stretch;
  }

  .ending {
    flex: 1 1 320px;
    border: 1px solid var(--border);
    background: rgba(255, 255, 255, 0.03);
    border-radius: var(--radius);
    padding: 14px 16px;
    min-width: 280px;
  }
</style>
```

---
## FILE: src/pages/sobre-mi.astro
---

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
---

<BaseLayout
  title="Sobre mí"
  description="Quién soy y cómo enfoco el desarrollo de proyectos y videojuegos."
>
  <section class="hero">
    <p class="kicker">Sobre mí</p>
    <h1>Portfolio vivo</h1>
    <p class="lead">
      Me interesa que se vea el proceso real: decisiones, problemas y cómo se aterriza una idea
      hasta convertirla en algo jugable. Kaelum es el proyecto principal en el que aplico este enfoque.
    </p>

    <div class="meta">
      <span class="tag">Game dev</span>
      <span class="tag">Diseño</span>
      <span class="tag">Prototipado</span>
      <span class="tag">Documentación</span>
    </div>

    <div class="actions">
      <a class="btn primary" href={`${import.meta.env.BASE_URL}kaelum/`}>Ver Kaelum</a>
      <a class="btn" href={`${import.meta.env.BASE_URL}docs/`}>Ver documentación</a>
    </div>
  </section>

  <div class="grid">
    <div class="card">
      <h3>Lo que hago</h3>
      <ul class="list">
        <li>Diseño de mecánicas con alcance realista</li>
        <li>Prototipos jugables (primero divertido, luego bonito)</li>
        <li>Devlog y documentación clara</li>
        <li>Iteración constante a partir de feedback</li>
      </ul>
    </div>

    <div class="card">
      <h3>Herramientas</h3>
      <ul class="list">
        <li>Unity</li>
        <li>Git y GitHub</li>
        <li>Documentación estructurada</li>
        <li>Blender / Aseprite (según necesidad)</li>
      </ul>
    </div>

    <div class="card full">
      <h3>Enlaces</h3>
      <p class="muted">Perfiles y proyectos externos.</p>
      <div class="actions">
        <a class="btn" href="#" aria-disabled="true">GitHub</a>
        <a class="btn" href="#" aria-disabled="true">itch.io</a>
        <a class="btn" href="#" aria-disabled="true">LinkedIn</a>
      </div>
    </div>
  </div>
</BaseLayout>
```

---
## FILE: src/pages/vision/index.astro
---

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
const base = import.meta.env.BASE_URL;
---

<BaseLayout
  title="Kaelum — Visión"
  description="Visión del proyecto Kaelum: moodboard principal y presentación visual del enfoque."
>
  <section class="hero">
    <p class="kicker">Visión</p>
    <h1>Moodboard</h1>
    <p class="lead">
      Esta es la <strong>presentación principal</strong> del proyecto: tono, intención, promesa y dirección visual.
      Si quieres entender Kaelum en 30 segundos, es aquí.
    </p>

    <div class="meta">
      <span class="tag">Presentación</span>
      <span class="tag">Tono</span>
      <span class="tag">Arte</span>
      <span class="tag">Universo</span>
    </div>

    <div class="actions">
      <a class="btn primary" href={`${base}vision/moodboard/`}>Ver moodboard</a>
      <a class="btn" href={`${base}analisis/`}>Ver análisis</a>
      <a class="btn" href={`${base}docs/`}>Ver docs</a>
      <a class="btn" href={`${base}devlog/`}>Ver devlog</a>
    </div>
  </section>

  <div class="grid">
    <article class="card">
      <h2>🎨 Moodboard (principal)</h2>
      <p class="muted">
        One-pager visual con el mensaje central, tono, experiencia de juego y personalidad del proyecto.
      </p>
      <p class="small">Recomendado si entras por primera vez.</p>
      <div class="actions">
        <a class="btn primary" href={`${base}vision/moodboard/`}>Abrir moodboard</a>
      </div>
    </article>

    <article class="card">
      <h2>🧩 Futuro de esta sección</h2>
      <p class="muted">
        Esta carpeta está pensada para crecer con material visual sin ensuciar la parte técnica.
      </p>
      <ul class="list">
        <li>Ambientación de escenarios / referencias</li>
        <li>Dirección de arte (paletas, UI, lectura visual)</li>
        <li>Diseño de personajes / identidad de Kael</li>
        <li>Capturas del prototipo y evolución visual</li>
      </ul>
      <p class="small" style="margin-top:10px">
        O sea: <strong>la “cara” del proyecto</strong>.
      </p>
    </article>

    <article class="card full">
      <h2>Ruta recomendada</h2>
      <p class="muted">
        1) Visión (moodboard) → 2) Análisis (DAFO/CAME) → 3) Docs (GDD/Folleto) → 4) Devlog (proceso).
      </p>
      <div class="actions" style="margin-top:10px">
        <a class="btn" href={`${base}analisis/`}>Siguiente: Análisis</a>
        <a class="btn" href={`${base}kaelum/`}>Volver a Proyecto</a>
      </div>
    </article>
  </div>
</BaseLayout>
```

---
## FILE: src/pages/vision/moodboard.astro
---

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
const base = import.meta.env.BASE_URL;

//const imgUrl = `${base}images/vision/moodboard.jpg`;
const imgUrl = `${base}images/vision/Moodboard_QR.png`;

---

<BaseLayout
  title="Kaelum — Moodboard"
  description="Tono, arte, universo y promesa de Kaelum."
>
  <section class="hero">
    <p class="kicker">Visión</p>
    <h1>Moodboard</h1>
    <p class="lead">
      Cada disparo cuenta. Cada decisión pesa.
      Kaelum no busca ser complaciente: busca ser honesto.
    </p>

    <div class="actions noprint">
      <a class="btn" href={`${base}vision/`}>Volver a Visión</a>
      <a class="btn primary" href={imgUrl} download>Descargar imagen</a>
    </div>
  </section>

  <section class="card full">
    <img
      src={imgUrl}
      alt="Moodboard de Kaelum"
      style="width:100%; border-radius: var(--radius);"
      loading="eager"
    />
  </section>

  <div class="grid">
    <div class="card">
      <h3>Qué es Kaelum</h3>
      <p class="muted">
        Shooter en primera persona donde juegas tú, no el sistema.
        Combate claro, decisiones reales y aprendizaje constante.
      </p>
    </div>

    <div class="card">
      <h3>Por qué es diferente</h3>
      <p class="muted">
        Sin progreso artificial.
        Sin héroes invencibles.
        Si fallas, lo sabes. Si ganas, te lo has ganado.
      </p>
    </div>

    <div class="card full">
      <h3>Tono, arte y universo</h3>
      <p class="muted">
        El arte no satura: acompaña.
        El mundo se descubre jugando, no mirando cinemáticas.
      </p>
    </div>
  </div>
</BaseLayout>
```
