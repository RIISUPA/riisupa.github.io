# RIISUPA — Sitio institucional

Sitio web institucional de la **Red de Investigación e Innovación en Salud de Universidades de gestión Privada de Argentina**. HTML5 estático, sin dependencias de build.

Versión aprobada por la Comisión de Comunicación (reunión 24/8/2026).

## Inventario

**8 páginas HTML**, 1 CSS, 2 JS, 1 favicon, 1 robots, 1 sitemap. ~230 KB total.

```
riisupa-html/
├── index.html                     Portada con: acceso al reglamento, líneas de
│                                  investigación, proyectos colaborativos (con
│                                  coordinadora + contacto + fecha), efemérides e
│                                  iniciativas institucionales, eventos de la Red.
├── la_red.html                    Estructura institucional: autoridades (Comité
│                                  Ejecutivo), Asamblea de miembros (18 universidades
│                                  en tabla) y un único canal de contacto:
│                                  rediisupa@gmail.com + LinkedIn de la Red.
├── universidades.html             Listado de las 18 universidades miembro con
│                                  filtros por provincia, línea y búsqueda.
├── proyectos.html                 Catálogo de proyectos colaborativos con
│                                  universidad coordinadora, contacto, fecha de
│                                  inicio y filtros por línea, tipo, estado, FHIR R4.
├── lineas_investigacion.html      Detalle por línea con proyectos asociados.
├── convocatorias.html             Convocatorias abiertas y cerradas.
├── eventos.html                   Agenda de actividades: webinars, jornadas,
│                                  talleres, asambleas, efemérides e iniciativas
│                                  institucionales.
├── reglamento.html                Texto completo del reglamento con navegación
│                                  lateral y anchors por artículo.
├── robots.txt                     Indicador para buscadores.
├── sitemap.xml                    Sitemap para indexación.
├── favicon.svg                    Monograma "R" en azul institucional.
└── assets/
    ├── css/riisupa.css            Todo el estilo: paleta, tipografía, componentes.
    └── js/
        ├── data.js                FUENTE ÚNICA DE VERDAD del contenido +
        │                          constantes de contacto oficial y LinkedIn.
        └── riisupa.js             Header, footer, filtros, formato de fechas.
```

## Cambios aplicados según Comisión de Comunicación (24/8/2026)

### En la home (`index.html`)
Se removieron: universidades destacadas, proyectos destacados, blog, oportunidades, "sumate" (CTA de adhesión), canales abiertos GitHub, distribución geográfica, "cómo postular", proponer un evento, sección Transparencia.

Se dejaron sólo: acceso al reglamento, líneas de investigación, proyectos colaborativos (con universidad **coordinadora** — no "líder" — contacto de investigación y fecha de inicio), calendario de efemérides + iniciativas institucionales, eventos de la Red.

### En el menú principal
Se removieron: Blog y Reglamento (Reglamento sigue accesible desde el CTA principal, el footer y links contextuales).

Menú vigente: **Inicio · La Red · Universidades · Proyectos · Líneas · Convocatorias · Actividades**

### Contacto y redes
Se unificó todo en **un único canal**:
- Email: `rediisupa@gmail.com`
- LinkedIn: RIISUPA en LinkedIn (link al perfil oficial)

Se eliminaron las 6 casillas rol-específicas (`contacto@`, `comite@`, `proyectos@`, etc.).

### Archivos eliminados
- `blog.html`
- `investigadores.html`

Sus datos siguen en `data.js` por si a futuro se restablece alguno.

## Cómo editar el contenido

**99% del contenido vive en `assets/js/data.js`.** Un único archivo con estos arrays:

| Array | Contenido actual |
| --- | --- |
| `RIISUPA.contacto` | Email + LinkedIn oficial |
| `RIISUPA.lineas` | 6 líneas de investigación |
| `RIISUPA.universidades` | 18 universidades miembro |
| `RIISUPA.investigadores` | 8 investigadores (referenciados por proyectos y posts) |
| `RIISUPA.proyectos` | 7 proyectos con `universidadCoordinadora` |
| `RIISUPA.eventos` | 10 actividades (webinars, jornadas, efemérides, iniciativas) |
| `RIISUPA.convocatorias` | 8 convocatorias |

Al editar cualquier objeto, todas las páginas se actualizan automáticamente.

## Publicar en GitHub Pages

El paquete está pensado para el repo `riisupa/riisupa.github.io` (que GitHub Pages sirve directamente en la raíz).

Descomprimir el ZIP e inicializar el repo:

```bash
cd riisupa.github.io/
git init
git branch -M main
git remote add origin https://github.com/riisupa/riisupa.github.io.git
git add .
git commit -m "feat: sitio institucional inicial de RIISUPA"
git push -u origin main
```

En **Settings → Pages** verificar que "Source" esté como "Deploy from a branch", branch `main`, folder `/ (root)`.

Sitio disponible en `https://riisupa.github.io/` en 1-2 minutos.

## Decisiones editoriales vigentes

- **Autoridades del Comité Ejecutivo**: "A designar" hasta la Asamblea fundacional.
- **Representantes de Asamblea**: placeholders genéricos que cada universidad debe reemplazar.
- **Contacto único**: `rediisupa@gmail.com` + LinkedIn (aprobado por Comisión de Comunicación).
- **Comisiones ad hoc**: no se muestran activas.
- **Convocatorias**: se mantiene la página, se va a alimentar con información.
- **FHIR R4**: diferenciador técnico visible con badge en proyectos que lo usan.

## Licencia

- Código: **MIT**
- Contenido editorial y documentación: **CC BY 4.0**
