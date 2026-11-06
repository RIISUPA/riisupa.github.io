/* -----------------------------------------------------------------------
   RIISUPA — datos compartidos
   Una sola fuente de verdad para todas las páginas del sitio.

   Para actualizar el contenido, editá estos arrays y guardá el archivo:
   todas las páginas se actualizan solas.

   - Los IDs son textos en minúscula y sin espacios (kebab-case) y se usan
     para relacionar datos entre sí (p. ej. integrante -> universidad).
   - Si un texto lleva apóstrofo (D'Angelo, O'Donnell), escribilo entre
     comillas dobles: "D'Angelo".
   - Cada elemento de una lista termina con coma.

   Fuente del contenido: "Integrantes_Red_RIISUPA_oct.2026.xlsx"
   (solapas "Miembros web" y "Sedes") y documento "Web de RIISUPA".
   ----------------------------------------------------------------------- */

window.RIISUPA = window.RIISUPA || {};

/* =======================================================================
   CONTACTO OFICIAL Y REDES DE LA RED
   Un único canal de correo y el perfil de LinkedIn, aprobados por la
   Comisión de Comunicación (24/8).
   ======================================================================= */

window.RIISUPA.contacto = {
  email: 'rediisupa@gmail.com',
  linkedin: 'https://www.linkedin.com/company/red-de-investigaci%C3%B3n-e-innovaci%C3%B3n-en-salud-de-universidades-privadas-de-argentina-riisupa',
};

/* =======================================================================
   NODOS TEMÁTICOS
   Temas en los que investigan, principalmente, las universidades miembro.
   Se muestran en la portada (sección "Líneas de investigación").
   ======================================================================= */

window.RIISUPA.nodos = [
  { id: 'oncologia-inmunologia-biomedicina', nombre: 'Oncología, Inmunología y Biomedicina Molecular' },
  { id: 'cardiometabolicas-nutricion', nombre: 'Enfermedades Cardiometabólicas y Nutrición' },
  { id: 'neurociencias-salud-mental', nombre: 'Neurociencias y Salud Mental' },
  { id: 'envejecimiento-gerontologia', nombre: 'Envejecimiento y Gerontología' },
  { id: 'kinesiologia-rehabilitacion', nombre: 'Kinesiología, Rehabilitación y Movimiento' },
  { id: 'tecnologia-ia-bioingenieria', nombre: 'Tecnología, IA y Bioingeniería en Salud' },
  { id: 'educacion-salud-publica', nombre: 'Educación, Salud Pública y Estudios Sociales' },
];

/* =======================================================================
   COMITÉ EJECUTIVO
   `universidad` es el id de la universidad (ver lista más abajo).
   ======================================================================= */

window.RIISUPA.comiteEjecutivo = [
  { cargo: 'Presidente', nombre: 'Ariana Goldman', universidad: 'barcelo', periodo: '2025-2027' },
  { cargo: 'Vicepresidente', nombre: 'Ariadna Guaglianone', universidad: 'uai', periodo: '2025-2027' },
  { cargo: 'Secretario', nombre: 'Marcelo F. Ahumada', universidad: 'uda', periodo: '2025-2027' },
];

/* =======================================================================
   UNIVERSIDADES MIEMBRO
   `sedes`: provincias donde la universidad tiene sede (sin detalle de
   localidad). Usar los nombres de la lista PROVINCIAS de más abajo.
   ======================================================================= */

window.RIISUPA.universidades = [
  {
    id: 'ucp',
    nombre: 'Universidad de la Cuenca del Plata',
    sigla: 'UCP',
    sitioWeb: 'https://www.ucp.edu.ar',
    sedes: ['Corrientes', 'Chaco', 'Formosa', 'Misiones'],
  },
  {
    id: 'barcelo',
    nombre: 'Instituto Universitario de Ciencias de la Salud – Fundación Barceló',
    sigla: 'IU Barceló',
    sitioWeb: 'https://www.barcelo.edu.ar',
    sedes: ['CABA', 'La Rioja', 'Corrientes'],
  },
  {
    id: 'universidad-austral',
    nombre: 'Universidad Austral',
    sigla: 'U. Austral',
    sitioWeb: 'https://www.austral.edu.ar',
    sedes: ['CABA', 'Pcia. de Buenos Aires', 'Santa Fe'],
  },
  {
    id: 'ugr',
    nombre: 'Universidad del Gran Rosario',
    sigla: 'UGR',
    sitioWeb: 'https://www.ugr.edu.ar',
    sedes: ['Santa Fe', 'Córdoba'],
  },
  {
    id: 'u-mendoza',
    nombre: 'Universidad de Mendoza',
    sigla: 'U. Mendoza',
    sitioWeb: 'https://www.um.edu.ar',
    sedes: ['Mendoza', 'Córdoba'],
  },
  {
    id: 'unsta',
    nombre: 'Universidad del Norte Santo Tomás de Aquino',
    sigla: 'UNSTA',
    sitioWeb: 'https://www.unsta.edu.ar',
    sedes: ['Tucumán'],
  },
  {
    id: 'uai',
    nombre: 'Universidad Abierta Interamericana',
    sigla: 'UAI',
    sitioWeb: 'https://www.uai.edu.ar',
    sedes: ['CABA', 'Santa Fe'],
  },
  {
    id: 'uda',
    nombre: 'Universidad del Aconcagua',
    sigla: 'UDA',
    sitioWeb: 'https://www.uda.edu.ar',
    sedes: ['Mendoza'],
  },
  {
    id: 'usal',
    nombre: 'Universidad del Salvador',
    sigla: 'USAL',
    sitioWeb: 'https://www.usal.edu.ar',
    sedes: ['CABA'],
  },
  {
    id: 'ufasta',
    nombre: 'Universidad FASTA',
    sigla: 'UFASTA',
    sitioWeb: 'https://www.ufasta.edu.ar',
    sedes: ['Pcia. de Buenos Aires'],
  },
  {
    id: 'universidad-favaloro',
    nombre: 'Universidad Favaloro',
    sigla: 'U. Favaloro',
    sitioWeb: 'https://www.favaloro.edu.ar',
    sedes: ['CABA'],
  },
  {
    id: 'ucu',
    nombre: 'Universidad de Concepción del Uruguay',
    sigla: 'UCU',
    sitioWeb: 'https://www.ucu.edu.ar',
    sedes: ['Entre Ríos', 'Santa Fe'],
  },
  {
    id: 'ucsf',
    nombre: 'Universidad Católica de Santa Fe',
    sigla: 'UCSF',
    sitioWeb: 'https://www.ucsf.edu.ar',
    sedes: ['Santa Fe'],
  },
  {
    id: 'uspt',
    nombre: 'Universidad de San Pablo Tucumán',
    sigla: 'USP-T',
    sitioWeb: 'https://www.uspt.edu.ar',
    sedes: ['Tucumán'],
  },
  {
    id: 'itba',
    nombre: 'Instituto Tecnológico de Buenos Aires',
    sigla: 'ITBA',
    sitioWeb: 'https://www.itba.edu.ar',
    sedes: ['CABA'],
  },
  {
    id: 'umsa',
    nombre: 'Universidad del Museo Social Argentino',
    sigla: 'UMSA',
    sitioWeb: 'https://www.umsa.edu.ar',
    sedes: ['CABA'],
  },
  {
    id: 'u-flores',
    nombre: 'Universidad de Flores',
    sigla: 'UFLO',
    sitioWeb: 'https://www.uflo.edu.ar',
    sedes: ['CABA', 'Pcia. de Buenos Aires', 'Neuquén', 'Río Negro'],
  },
  {
    id: 'universidad-atlantida',
    nombre: 'Universidad Atlántida Argentina',
    sigla: 'U. Atlántida',
    sitioWeb: 'https://www.atlantida.edu.ar',
    sedes: ['Pcia. de Buenos Aires'],
  },
  {
    id: 'cemic',
    nombre: 'Instituto Universitario CEMIC',
    sigla: 'IU CEMIC',
    sitioWeb: 'https://www.cemic.edu.ar',
    sedes: ['CABA'],
  },
  {
    id: 'isalud',
    nombre: 'Universidad ISALUD',
    sigla: 'ISALUD',
    sitioWeb: 'https://www.isalud.edu.ar',
    sedes: ['CABA'],
  },
];

/* =======================================================================
   ASAMBLEA DE MIEMBROS — INTEGRANTES
   Todas las personas que representan a su universidad en la Red, sin
   distinción entre titular y suplente. Se muestran agrupadas por
   universidad en la página "La Red".
   ======================================================================= */

window.RIISUPA.integrantes = [
  // Universidad de la Cuenca del Plata
  { nombre: "Silvia D'Angelo", cargo: 'Secretaria de Políticas del Conocimiento', universidad: 'ucp' },
  { nombre: 'Guadalupe Leiva', cargo: 'Directora del Instituto de Investigaciones Científicas', universidad: 'ucp' },
  // Instituto Universitario de Ciencias de la Salud – Fundación Barceló
  { nombre: "Carolina O'Donnell", cargo: 'Secretaria de Ciencia y Tecnología', universidad: 'barcelo' },
  { nombre: 'Soraya Acardi', cargo: 'Coordinadora - Secretaria Regional de Ciencia y Tecnología', universidad: 'barcelo' },
  // Universidad Austral
  { nombre: 'María Florencia Coronel', cargo: 'Secretaria de Investigación - Facultad de Ciencias Médicas', universidad: 'universidad-austral' },
  // Universidad del Gran Rosario
  { nombre: 'Ariana Dávila', cargo: 'Subsecretaría de Investigación', universidad: 'ugr' },
  // Universidad de Mendoza
  { nombre: 'María Virginia Avena', cargo: 'Directora de Investigación de la Facultad de Ciencias de la Salud', universidad: 'u-mendoza' },
  { nombre: 'Cristián Quintero', cargo: 'Coordinador de Investigación de la Facultad de Ciencias Médicas', universidad: 'u-mendoza' },
  // Universidad del Norte Santo Tomás de Aquino
  { nombre: 'Ezequiel Dominguez', cargo: 'Servicio de Investigación y Desarrollo', universidad: 'unsta' },
  { nombre: 'Agostina Navarro Aranda', cargo: 'Servicio de Investigación y Desarrollo', universidad: 'unsta' },
  // Universidad Abierta Interamericana
  { nombre: 'Florencia Fernández', cargo: 'Prosecretaria de Investigación - Sede Rosario', universidad: 'uai' },
  // Universidad del Aconcagua
  { nombre: 'Claudio Fader', cargo: 'Director del Instituto de investigación de Ciencias Médicas', universidad: 'uda' },
  // Universidad del Salvador
  { nombre: 'Gustavo José Leirós', cargo: 'Director del Instituto de Investigación en Medicina y Ciencias de la Salud', universidad: 'usal' },
  { nombre: 'Adriana Presa', cargo: 'Directora de Investigación', universidad: 'usal' },
  // Universidad FASTA
  { nombre: 'Guillermina Riba', cargo: 'Secretaria de Investigación. Facultad de Ciencias Médicas', universidad: 'ufasta' },
  // Universidad Favaloro
  { nombre: 'Melina Rapacioli', cargo: 'Directora de Ciencia, Tecnología e Innovación', universidad: 'universidad-favaloro' },
  // Universidad de Concepción del Uruguay
  { nombre: 'Adriana Noelia Poco', cargo: 'Secretaria de Ciencia y Tecnología', universidad: 'ucu' },
  { nombre: 'María Ovejero', cargo: 'Secretaria Adjunta de Ciencia y Tecnología', universidad: 'ucu' },
  // Universidad Católica de Santa Fe
  { nombre: 'Guillermo Kerz', cargo: 'Vicerrector Académico', universidad: 'ucsf' },
  // Universidad de San Pablo Tucumán
  { nombre: 'Gabriela Zárate', cargo: 'Secretaría de Investigación, Desarrollo y Cultura', universidad: 'uspt' },
  // Instituto Tecnológico de Buenos Aires
  { nombre: 'María Paula Bonomini', cargo: 'Departamento de Investigación y Doctorado', universidad: 'itba' },
  { nombre: 'Raúl Marino', cargo: 'Director del Departamento de Investigación y Doctorado', universidad: 'itba' },
  // Universidad del Museo Social Argentino
  { nombre: 'María Fernanda Terzibachian', cargo: 'Coordinadora Instituto de Investigación', universidad: 'umsa' },
  // Universidad de Flores
  { nombre: 'María Victoria Jiménez', cargo: 'Secretaria de Investigación y Desarrollo', universidad: 'u-flores' },
  // Universidad Atlántida Argentina
  { nombre: 'Aurora Arena', cargo: 'Secretaria de Investigación', universidad: 'universidad-atlantida' },
  // Instituto Universitario CEMIC
  { nombre: 'María Vaccaro', cargo: 'Director Unidad de investigación Medicina Traslacional. Centro de Educación Médica e Investigación Clínica', universidad: 'cemic' },
  { nombre: 'Carlos Díaz', cargo: 'Secretario de Investigación del IUC y Director de Investigación', universidad: 'cemic' },
  // Universidad ISALUD
  { nombre: 'Claudio Ortiz', cargo: 'Secretario de Ciencia y Tecnología', universidad: 'isalud' },
];

/* =======================================================================
   PROVINCIAS
   Orden en que se presentan las jurisdicciones (CABA primero, luego el
   resto en orden alfabético, como en las estadísticas oficiales).
   ======================================================================= */

window.RIISUPA.provincias = [
  'CABA', 'Pcia. de Buenos Aires', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba',
  'Corrientes', 'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa', 'La Rioja',
  'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta', 'San Juan',
  'San Luis', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero',
  'Tierra del Fuego', 'Tucumán',
];

/* =======================================================================
   ACTIVIDADES (agenda de la Red y calendario compartido)

   - tipo 'efemeride' o 'iniciativa-institucional' -> aparece en la portada
     en "Calendario compartido".
   - cualquier otro tipo (webinar, jornada, taller, asamblea...) -> aparece
     en "Próximos eventos de la Red".
   - Las actividades pasadas pasan solas al "Archivo" de la página
     Actividades.

   Plantilla para cargar una actividad (copiar dentro de los corchetes,
   sin las barras de comentario, y completar):

   {
     id: 'jornada-ejemplo-2026',                 // único, sin espacios
     titulo: 'Título de la actividad',
     tipo: 'jornada',                            // webinar | jornada | taller | charla | congreso | asamblea | efemeride | iniciativa-institucional
     estado: 'programado',                       // programado | confirmado | cancelado
     fechaInicio: '2026-12-10T15:00:00-03:00',   // fecha y hora de Argentina (o solo '2026-12-10')
     duracionMinutos: 90,                        // opcional
     modalidad: 'virtual',                       // virtual | presencial | hibrido
     ubicacion: '',                              // opcional (presencial o híbrida)
     resumen: 'Breve descripción de la actividad.',
     organizador: 'usal',                        // id de la universidad, o null si organiza la Red
     linkInscripcion: '',                        // opcional
   },
   ======================================================================= */

window.RIISUPA.eventos = [];

/* =======================================================================
   HELPERS (funciones utilitarias compartidas)
   ======================================================================= */

window.RIISUPA.helpers = {
  getUniversidad: (id) => window.RIISUPA.universidades.find((u) => u.id === id),
  integrantesDe: (id) => window.RIISUPA.integrantes.filter((i) => i.universidad === id),
  ordenProvincia: (p) => {
    const i = window.RIISUPA.provincias.indexOf(p);
    return i === -1 ? 999 : i;
  },
  normalize: (s) => (s || '').toString().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''),
  escapeHTML: (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])),
};

window.RIISUPA.tipoEventoLabels = {
  'webinar': 'Webinar',
  'jornada': 'Jornada',
  'congreso': 'Congreso',
  'taller': 'Taller',
  'charla': 'Charla',
  'asamblea': 'Asamblea',
  'reunion-comite': 'Reunión de Comité',
  'efemeride': 'Efeméride',
  'iniciativa-institucional': 'Iniciativa institucional',
};

window.RIISUPA.estadoEventoLabels = {
  'programado': 'Programado',
  'confirmado': 'Confirmado',
  'en-vivo': 'En vivo',
  'finalizado': 'Finalizado',
  'cancelado': 'Cancelado',
};

window.RIISUPA.modalidadLabels = {
  'virtual': 'Virtual',
  'presencial': 'Presencial',
  'hibrido': 'Híbrido',
};
