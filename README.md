# RIISUPA — Sitio institucional

Sitio web institucional de la **Red de Investigación e Innovación en Salud de Universidades de gestión Privada de Argentina**. HTML5 estático, sin dependencias de build.

## Inventario

**10 páginas HTML**, 1 CSS, 2 JS, 1 favicon, 1 robots, 1 sitemap. ~250 KB total.

```
riisupa-html/
├── index.html                     Portada con stats, misión, universidades destacadas,
│                                  proyectos, líneas, últimos posts, próximos eventos
│                                  y convocatorias abiertas (todo auto-poblado).
├── la_red.html                    Estructura institucional: autoridades (Comité Ejecutivo),
│                                  Asamblea de miembros (18 universidades en tabla),
│                                  canales de contacto por rol, transparencia.
├── universidades.html             Listado de las 18 universidades con filtros por
│                                  provincia, línea y búsqueda. Distribución federal.
├── investigadores.html            Directorio filtrable por universidad, línea,
│                                  categoría y proyecto.
├── proyectos.html                 Catálogo filtrable por línea, tipo, estado,
│                                  universidad, investigador, FHIR R4 y activos.
├── lineas_investigacion.html      Detalle por línea con proyectos e investigadores
│                                  asociados y navegación lateral.
├── convocatorias.html             Convocatorias abiertas y cerradas, con countdown
│                                  a deadlines y prioritarias para la Red.
├── eventos.html                   Agenda de webinars, jornadas y asambleas,
│                                  próximos y archivo pasado.
├── blog.html                      Noticias, editoriales, reportes y entrevistas
│                                  filtrables por tipo y línea.
├── reglamento.html                Texto completo del reglamento con navegación lateral
│                                  scroll-spy y anchors por artículo.
├── robots.txt                     Indicador para buscadores.
├── sitemap.xml                    Sitemap para indexación.
├── favicon.svg                    Monograma "R" en azul institucional.
└── assets/
    ├── css/riisupa.css            Todo el estilo: paleta, tipografía, componentes.
    └── js/
        ├── data.js                FUENTE ÚNICA DE VERDAD de todo el contenido.
        └── riisupa.js             Header, footer, filtros, formato de fechas.
```

## Para ver el sitio

### Localmente sin servidor
Abrí `index.html` con doble clic en cualquier navegador moderno.

### Con servidor local
```bash
cd riisupa-html
python3 -m http.server 8000
# Abrí http://localhost:8000
```

### Publicar

Subí la carpeta completa a cualquiera de estos servicios (todos con HTTPS + CDN + uptime 99.99%+):

| Servicio | Cómo | Uptime |
| --- | --- | --- |
| **Cloudflare Pages** | Conectar repo GitHub o drag-and-drop en pages.cloudflare.com | 99.99%+ |
| **GitHub Pages** | Push a repo, activar Pages en Settings | 99.9%+ |
| **Netlify** | Drag-and-drop en app.netlify.com/drop | 99.99%+ |
| **Vercel** | `vercel` desde la terminal | 99.99%+ |

Todos soportan `riisupa.org.ar` como dominio personalizado.

## Cómo editar el contenido

**99% del contenido vive en `assets/js/data.js`.** Es un único archivo con siete arrays:

| Array | Contenido actual |
| --- | --- |
| `RIISUPA.lineas` | 6 líneas de investigación |
| `RIISUPA.universidades` | 18 universidades miembro |
| `RIISUPA.investigadores` | 8 investigadores de ejemplo |
| `RIISUPA.proyectos` | 7 proyectos de ejemplo |
| `RIISUPA.posts` | 8 posts de ejemplo |
| `RIISUPA.eventos` | 7 eventos de ejemplo |
| `RIISUPA.convocatorias` | 8 convocatorias de ejemplo |

**Al editar cualquier objeto, todas las páginas se actualizan automáticamente** — listados, filtros, stats de la home, distribución por provincia, tabla de la Asamblea, líneas con sus proyectos asociados, etc.

Los IDs son strings kebab-case (`itba`, `universidad-austral`, `salud-mental`). Se usan como anchors en URL — `universidades.html#itba` ya funciona. Cuando migres a páginas individuales, esos anchors se convierten en archivos como `universidades/itba.html` sin romper enlaces externos.

### Estructura esperada para agregar items

**Universidad:**
```javascript
{
  id: 'mi-universidad',
  nombre: 'Nombre completo',
  sigla: 'UM',
  fundacion: 1990,
  ciudad: 'Ciudad',
  provincia: 'Provincia',
  sitioWeb: 'https://...',
  descripcion: 'Descripción de 1-3 oraciones...',
  fechaAdhesion: '2026-03-15',
  activa: true,
  destacada: false,
  lineas: ['salud-mental', 'salud-digital'],
  representanteTitular: { nombre, cargo, email },
  representanteSuplente: { nombre, cargo, email },
}
```

**Investigador:**
```javascript
{
  id: 'apellido-nombre',
  nombre: 'Nombre',
  apellido: 'Apellido',
  cargo: 'Cargo académico',
  universidades: ['itba', 'universidad-austral'],
  bio: 'Biografía breve...',
  email: 'email@universidad.edu.ar',
  lineas: ['salud-digital'],
  orcid: '0000-0000-0000-0000',
  categoria: 'investigador-principal',
  palabrasClave: ['tema1', 'tema2'],
  activo: true,
}
```

**Proyecto:**
```javascript
{
  id: 'slug-proyecto',
  titulo: 'Título del proyecto',
  resumen: 'Resumen ejecutivo...',
  estado: 'en-ejecucion',
  tipoEstudio: 'observacional-cohorte',
  linea: 'enfermedades-cronicas',
  investigadorPrincipal: 'apellido-nombre',
  universidadLider: 'itba',
  universidadesParticipantes: ['itba', 'universidad-austral'],
  fechaInicio: '2026-03-01',
  duracionMeses: 24,
  palabrasClave: ['...'],
  usaFHIR: true,
  destacado: false,
  financiamiento: [{ fuente, tipo, estado }],
}
```

## Decisiones editoriales vigentes

Estas son convenciones que el sitio actualmente respeta y conviene mantener por consistencia:

- **Autoridades del Comité Ejecutivo**: mostradas como "A designar" hasta la Asamblea fundacional.
- **Representantes de Asamblea**: placeholders genéricos que cada universidad debe reemplazar con sus datos reales.
- **Casillas `@riisupa.org.ar`**: aún no configuradas; las consultas redirigen a `itba.riisupa@gmail.com` con aviso visible en `la_red.html`.
- **Comisiones ad hoc**: no se muestran activas; el marco explicativo (Art. 12) sí aparece.
- **FHIR R4**: diferenciador técnico visible con badge específico en proyectos que lo usan.

## Auditoría completada

El sitio fue validado con un script de auditoría que chequea:

- Referencias cruzadas entre todas las entidades (0 errores)
- Links internos entre páginas HTML (0 rotos)
- Accesibilidad básica: `lang="es-AR"`, meta viewport, h1 único por página, skip links, alt en imágenes, meta description
- SEO: titles y descripciones con longitud apropiada, Open Graph + Twitter Cards en todas las páginas, sitemap.xml, robots.txt
- Consistencia: todas las páginas renderizan el mismo header/footer vía `RIISUPA_UI.mount()`
- Anchors de fragmentos dentro de cada página

**Estado actual:** 0 errores, 0 warnings efectivos.

## Performance y accesibilidad

- **Peso total**: ~250 KB incluyendo fuentes de Google Fonts (cargadas con `display=swap`)
- **Sin JavaScript**: el 80% del sitio es funcional sin JS (solo los filtros lo requieren)
- **Mobile-first**: probado en viewports desde 320px
- **Nav responsive**: colapsa a menú mobile en viewports < 1280px para que los 10 items no se amontonen
- **Meta tags completos**: charset, viewport, favicon SVG, theme-color (`#0C447C`)
- **Prefers-reduced-motion** respetado en animaciones
- **Focus visible** en todos los elementos interactivos
- **Skip link** "Saltar al contenido principal" en todas las páginas

## Próximos pasos sugeridos

Una vez publicado, las siguientes piezas agregan valor progresivo:

1. **Páginas individuales por universidad** (18 HTMLs desde template) — útil para SEO cuando el sitio tenga tráfico real.
2. **Feeds** `rss.xml` del blog e `ics` del calendario de eventos — habilita suscripciones externas.
3. **Workflows de GitHub Actions** — deploy automático a Cloudflare Pages, Lighthouse CI, linkcheck semanal.
4. **Google Search Console + Analytics** (Plausible preferentemente, privacy-first) — métricas para decidir qué ampliar.
5. **Área privada de miembros** — cuando haya suficiente contenido restringido que lo justifique.

## Contacto del proyecto

- General: `contacto@riisupa.org.ar` (pendiente de configurar — temporalmente `itba.riisupa@gmail.com`)
- Técnico: `tech@riisupa.org.ar` (mismo status)
- GitHub: `github.com/riisupa` (pendiente de crear la organización)

## Licencia

- Código: **MIT**
- Contenido editorial y documentación: **CC BY 4.0**
- Datasets de investigación: según se especifique en cada repositorio de proyecto
