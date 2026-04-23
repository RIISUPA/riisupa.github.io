# RIISUPA

**Red de Investigación e Innovación en Salud de Universidades de gestión Privada de Argentina**

Asociación voluntaria y sin fines de lucro de universidades privadas argentinas, impulsada en el marco del Consejo de Rectores de Universidades Privadas (CRUP). Colaboramos para fortalecer la investigación científica, la innovación y la transferencia de conocimiento en el campo de la salud.

> 🌐 [riisupa.org.ar](https://riisupa.org.ar) · 📬 contacto@riisupa.org.ar · 🟢 [Estado de servicios](https://status.riisupa.org.ar)

---

## Qué encontrarás aquí

Este es el espacio técnico e institucional de la Red en GitHub. Desde acá gestionamos de forma abierta, trazable y colaborativa:

- El sitio institucional `riisupa.org.ar` y su infraestructura.
- El reglamento, las actas de Asamblea y las propuestas formales (RFCs).
- Los estándares de datos para investigación clínica colaborativa, basados en **HL7 FHIR R4**.
- Plantillas y herramientas que usan los grupos de investigación para iniciar proyectos reproducibles.
- Los proyectos de investigación avalados por el Comité Ejecutivo.

## Principios

- **Colaboración interinstitucional** por sobre la competencia.
- **Respeto a la autonomía universitaria** de cada institución miembro.
- **Ciencia abierta** por defecto (código, datos y publicaciones abiertos cuando es posible).
- **Interoperabilidad** mediante estándares internacionales (FHIR R4, SNOMED CT, LOINC).
- **Rigor metodológico e integridad científica** en toda la producción de la Red.
- **Democratización del acceso** al conocimiento generado.

## Estructura de gobernanza

| Órgano | Función | Composición |
| --- | --- | --- |
| **Asamblea de miembros** | Define lineamientos estratégicos | 1 representante titular + 1 suplente por universidad |
| **Comité Ejecutivo** | Administra y representa a la Red | Presidente, Vicepresidente y Secretario — mandato de 2 años |
| **Comisiones ad hoc** | Trabajan temáticas específicas | Según designación del Comité Ejecutivo |

Detalle operativo en [`GOVERNANCE.md`](GOVERNANCE.md). Reglamento completo en [riisupa.org.ar/reglamento](https://riisupa.org.ar/reglamento).

## Repositorios principales

**Institucional**
- [`.github`](https://github.com/riisupa/.github) — perfil público y plantillas compartidas de la organización.
- [`handbook`](https://github.com/riisupa/handbook) — reglamento, procedimientos y guías operativas.
- [`identity`](https://github.com/riisupa/identity) — marca, logos, plantillas de presentaciones y documentos.

**Plataforma web**
- [`riisupa.org.ar`](https://github.com/riisupa/riisupa.org.ar) — código del sitio institucional (Astro + Cloudflare Pages).
- [`status`](https://github.com/riisupa/status) — status page pública con Upptime.
- [`infra`](https://github.com/riisupa/infra) — configuración de DNS, despliegues y secretos.

**Gobernanza**
- [`proposals`](https://github.com/riisupa/proposals) — propuestas formales (RFCs), actas de Asamblea y decisiones del Comité.
- [`onboarding`](https://github.com/riisupa/onboarding) — alta de nuevas universidades miembro.
- [`comisiones`](https://github.com/riisupa/comisiones) — índice de comisiones ad hoc activas.

**Investigación**
- [`data-standards`](https://github.com/riisupa/data-standards) — Implementation Guides FHIR R4 específicos de la Red.
- [`toolkit`](https://github.com/riisupa/toolkit) — plantillas `cookiecutter` y utilidades para iniciar proyectos de investigación.
- `project-{slug}` — un repositorio por cada proyecto avalado por el Comité Ejecutivo.

## Sumar mi universidad a la Red

Si tu universidad es de gestión privada, tiene personería jurídica reconocida por el Ministerio de Educación de la Nación, es miembro del CRUP y cuenta con trayectoria demostrable en investigación en salud, pueden solicitar la adhesión.

**Cómo hacerlo:**
1. Abrí un issue con la [plantilla de adhesión](https://github.com/riisupa/onboarding/issues/new?template=adhesion.yml).
2. Adjuntá la nota firmada por la máxima autoridad académica o representante legal.
3. El Comité Ejecutivo lo eleva a la Asamblea para su aprobación.

Requisitos completos en el Art. 8 del Reglamento.

## Cómo contribuir

- Las **propuestas institucionales** (RFCs, líneas de trabajo, modificaciones al reglamento) se tramitan en [`proposals`](https://github.com/riisupa/proposals).
- Las **contribuciones a código y contenido** siguen [`CONTRIBUTING.md`](CONTRIBUTING.md).
- La **convivencia** en nuestros espacios se rige por el [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).
- Las **conversaciones abiertas** suceden en [GitHub Discussions](https://github.com/orgs/riisupa/discussions).

## Contacto

| Canal | Dirección |
| --- | --- |
| General | `contacto@riisupa.org.ar` |
| Comité Ejecutivo | `comite@riisupa.org.ar` |
| Coordinación técnica | `tech@riisupa.org.ar` |
| Proyectos de investigación | `proyectos@riisupa.org.ar` |
| Prensa y comunicación | `prensa@riisupa.org.ar` |

## Licencias

- Contenido editorial y documentación: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- Código: [MIT](https://opensource.org/license/mit)
- Datasets de investigación: según se especifique en cada repositorio de proyecto.
