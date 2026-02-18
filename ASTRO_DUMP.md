# Dump completo de archivos .astro

- Carpeta escaneada: `src`
- Archivos encontrados: **18**


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
          <a class={is("/kaelum") ? "pill active" : "pill"} href={`${base}kaelum/`}>Proyecto</a>
          <a class={is("/vision") ? "pill active" : "pill"} href={`${base}vision/`}>Visión</a>
          <a class={is("/analisis") ? "pill active" : "pill"} href={`${base}analisis/`}>Análisis</a>
          <a class={is("/devlog") ? "pill active" : "pill"} href={`${base}devlog/`}>Devlog</a>
          <a class={is("/docs") ? "pill active" : "pill"} href={`${base}docs/`}>Docs</a>
          <a class={is("/sobre-mi") ? "pill active" : "pill"} href={`${base}sobre-mi/`}>Sobre mí</a>
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
---

<BaseLayout title="Kaelum — Inicio">
  <section class="hero">
    <p class="kicker">Portfolio · Documentación</p>
    <h1>Kaelum</h1>

    <p class="lead">
      Proyecto personal de videojuego FPS con habilidades. Aquí no enseño solo el resultado:
      enseño la visión (moodboard), el análisis (DAFO/CAME) y la documentación que justifican cada decisión.
    </p>

    <div class="meta">
      <span class="tag">Shooter</span>
      <span class="tag">Habilidades</span>
      <span class="tag">Historia contextual</span>
      <span class="tag">PC</span>
    </div>

    <div class="actions">
      <a class="btn primary" href={`${base}vision/`}>Ver visión</a>
      <a class="btn" href={`${base}analisis/`}>Ver análisis</a>
      <a class="btn" href={`${base}docs/`}>Ver docs</a>
      <a class="btn" href={`${base}devlog/`}>Ver devlog</a>
    </div>
  </section>

  <section class="grid" aria-label="Mapa del proyecto">
    <article class="card">
      <h2>🎨 Visión del proyecto</h2>
      <p class="muted">
        Moodboard y dirección visual. La presentación principal: tono, intención, estilo y promesa del juego.
      </p>
      <p class="small">Recomendado si entras por primera vez.</p>
      <div class="actions">
        <a class="btn primary" href={`${base}vision/`}>Abrir visión</a>
      </div>
    </article>

    <article class="card">
      <h2>📊 Análisis y decisiones</h2>
      <p class="muted">
        DAFO + CAME. Riesgos, fortalezas y acciones concretas para mantener el proyecto realista y defendible.
      </p>
      <p class="small">Ideal para evaluación y coherencia.</p>
      <div class="actions">
        <a class="btn" href={`${base}analisis/`}>Abrir análisis</a>
      </div>
    </article>

    <article class="card">
      <h2>📄 Documentación técnica</h2>
      <p class="muted">
        GDD completo + folleto imprimible (A4). Documentación formal de entrega (sin ser la portada).
      </p>
      <p class="small">Para revisar el detalle completo.</p>
      <div class="actions">
        <a class="btn" href={`${base}docs/`}>Abrir docs</a>
      </div>
    </article>

    <article class="card">
      <h2>🛠 Proceso de desarrollo</h2>
      <p class="muted">
        Devlog semanal con decisiones, iteraciones y progreso real. El “cómo” del proyecto.
      </p>
      <p class="small">Para ver evolución y metodología.</p>
      <div class="actions">
        <a class="btn" href={`${base}devlog/`}>Abrir devlog</a>
      </div>
    </article>

    <article class="card full">
      <h2>Estado actual</h2>
      <p class="muted">
        Kaelum está en fase de prototipo: visión y análisis cerrados, documentación lista para presentar.
        El desarrollo ahora se centra en validar sensaciones de gameplay y núcleo jugable.
      </p>
    </article>
  </section>
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
## FILE: src/pages/proyecto/historia.astro
---

```astro

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

const imgUrl = `${base}images/vision/moodboard.jpg`;
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
