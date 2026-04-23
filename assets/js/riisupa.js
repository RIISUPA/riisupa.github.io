/* -----------------------------------------------------------------------
   RIISUPA — JS compartido
   Inserta header, footer y expone utilidades de render.
   ----------------------------------------------------------------------- */

(function () {
  'use strict';

  const NAV = [
    { href: 'index.html', label: 'Inicio', key: 'inicio' },
    { href: 'la_red.html', label: 'La Red', key: 'la-red' },
    { href: 'universidades.html', label: 'Universidades', key: 'universidades' },
    { href: 'investigadores.html', label: 'Investigadores', key: 'investigadores' },
    { href: 'proyectos.html', label: 'Proyectos', key: 'proyectos' },
    { href: 'lineas_investigacion.html', label: 'Líneas', key: 'lineas' },
    { href: 'convocatorias.html', label: 'Convocatorias', key: 'convocatorias' },
    { href: 'eventos.html', label: 'Eventos', key: 'eventos' },
    { href: 'blog.html', label: 'Blog', key: 'blog' },
    { href: 'reglamento.html', label: 'Reglamento', key: 'reglamento' },
  ];

  function renderHeader(activeKey) {
    const navItems = NAV.map((item) => {
      const isActive = item.key === activeKey;
      const aria = isActive ? ' aria-current="page"' : '';
      return `<li><a href="${item.href}"${aria}>${item.label}</a></li>`;
    }).join('');

    const navItemsTop = NAV.map((item) => {
      const isActive = item.key === activeKey;
      const aria = isActive ? ' aria-current="page"' : '';
      return `<a href="${item.href}"${aria}>${item.label}</a>`;
    }).join('');

    return `
      <header class="site-header">
        <div class="header-inner">
          <a href="index.html" class="brand" aria-label="RIISUPA · Inicio">
            <span class="brand-mark" aria-hidden="true">R</span>
            <span class="brand-text">
              <span class="brand-name">RIISUPA</span>
              <span class="brand-tagline">Red de Investigación e Innovación en Salud</span>
            </span>
          </a>

          <nav class="main-nav" aria-label="Navegación principal">
            ${navItemsTop}
          </nav>

          <div class="header-actions">
            <a href="https://github.com/riisupa" target="_blank" rel="noopener"
               style="font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--ink-500); text-decoration: none;">
              GitHub ↗
            </a>
          </div>

          <button type="button" class="menu-toggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobile-nav">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round" />
            </svg>
          </button>
        </div>

        <nav id="mobile-nav" class="mobile-nav" aria-label="Navegación mobile">
          <ul>${navItems}</ul>
        </nav>
      </header>
    `;
  }

  function renderFooter() {
    const year = new Date().getFullYear();
    return `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div>
              <div class="brand" style="cursor: default;">
                <span class="brand-mark" aria-hidden="true">R</span>
                <span class="brand-text">
                  <span class="brand-name">RIISUPA</span>
                  <span class="brand-tagline">Red de Investigación e Innovación en Salud</span>
                </span>
              </div>
              <p class="footer-tagline">
                Universidades de gestión privada de Argentina colaborando para generar evidencia científica y soluciones con impacto en el sistema de salud.
              </p>
              <a href="#" class="status-link" style="margin-top: 1rem; text-decoration: none;">
                <span class="status-dot" aria-hidden="true"></span>
                <span style="font-family: var(--font-mono); font-size: 0.6875rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--ink-500);">
                  Estado de servicios
                </span>
              </a>
            </div>

            <div class="footer-cols">
              <div class="footer-col">
                <h3>La Red</h3>
                <ul>
                  <li><a href="la_red.html">Estructura institucional</a></li>
                  <li><a href="reglamento.html">Reglamento</a></li>
                  <li><a href="la_red.html#comite">Autoridades</a></li>
                  <li><a href="universidades.html">Universidades miembro</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h3>Investigación</h3>
                <ul>
                  <li><a href="proyectos.html">Proyectos</a></li>
                  <li><a href="lineas_investigacion.html">Líneas</a></li>
                  <li><a href="investigadores.html">Investigadores</a></li>
                  <li><a href="https://github.com/riisupa/data-standards">Estándares FHIR R4 ↗</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h3>Comunidad</h3>
                <ul>
                  <li><a href="eventos.html">Eventos y webinars</a></li>
                  <li><a href="blog.html">Blog y novedades</a></li>
                  <li><a href="convocatorias.html">Convocatorias</a></li>
                  <li><a href="https://github.com/orgs/riisupa/discussions">Discussions ↗</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h3>Contacto</h3>
                <ul>
                  <li><a href="mailto:contacto@riisupa.org.ar">contacto@riisupa.org.ar</a></li>
                  <li><a href="mailto:comite@riisupa.org.ar">Comité Ejecutivo</a></li>
                  <li><a href="mailto:proyectos@riisupa.org.ar">Proyectos</a></li>
                  <li><a href="mailto:prensa@riisupa.org.ar">Prensa</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="footer-bottom">
            <p>© ${year} RIISUPA · Asociación voluntaria sin fines de lucro</p>
            <div class="footer-links">
              <a href="#">Licencias</a>
              <a href="#">Privacidad</a>
              <a href="#">Accesibilidad</a>
              <a href="https://github.com/riisupa">GitHub ↗</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  function mount(activeKey) {
    const headerSlot = document.querySelector('[data-slot="header"]');
    const footerSlot = document.querySelector('[data-slot="footer"]');
    if (headerSlot) headerSlot.innerHTML = renderHeader(activeKey);
    if (footerSlot) footerSlot.innerHTML = renderFooter();

    const toggle = document.querySelector('.menu-toggle');
    const mobile = document.getElementById('mobile-nav');
    if (toggle && mobile) {
      toggle.addEventListener('click', () => {
        const isOpen = mobile.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
      });
    }
  }

  /* -----------------------------------------------------------------------
     Helpers de render para listados con filtros
     ----------------------------------------------------------------------- */

  function initFiltros(config) {
    const filtrosEl = document.getElementById(config.filtrosId);
    const resultadosEl = document.getElementById(config.resultadosId);
    const metaEl = document.getElementById(config.metaId);
    const resetBtn = document.getElementById(config.resetId);
    const selects = filtrosEl.querySelectorAll('select, input[type="search"]');

    function aplicar() {
      const state = {};
      selects.forEach((el) => { state[el.name] = el.value; });
      const filtrados = config.filtrar(config.datos, state);
      resultadosEl.innerHTML = filtrados.length
        ? filtrados.map(config.render).join('')
        : `<div class="empty-state" style="grid-column: 1 / -1;"><p>No hay resultados para los filtros seleccionados.</p></div>`;
      if (metaEl) {
        const total = config.datos.length;
        const visibles = filtrados.length;
        metaEl.innerHTML = `<strong>${visibles}</strong> de ${total} ${config.etiquetaResultado}`;
      }
    }

    selects.forEach((el) => el.addEventListener('input', aplicar));
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        selects.forEach((el) => { el.value = ''; });
        aplicar();
      });
    }
    aplicar();
  }

  /* Expuesto global */
  window.RIISUPA_UI = {
    mount,
    initFiltros,
    formatoFechaLarga,
    formatoFechaCorta,
    formatoFechaHora,
    diasHasta,
  };

  /* -----------------------------------------------------------------------
     Formato de fechas (es-AR, zona Buenos Aires)
     ----------------------------------------------------------------------- */

  function formatoFechaLarga(fecha) {
    const f = new Date(fecha);
    return new Intl.DateTimeFormat('es-AR', {
      day: 'numeric', month: 'long', year: 'numeric',
      timeZone: 'America/Argentina/Buenos_Aires',
    }).format(f);
  }

  function formatoFechaCorta(fecha) {
    const f = new Date(fecha);
    return new Intl.DateTimeFormat('es-AR', {
      day: '2-digit', month: '2-digit', year: 'numeric',
      timeZone: 'America/Argentina/Buenos_Aires',
    }).format(f);
  }

  function formatoFechaHora(fecha) {
    const f = new Date(fecha);
    const dia = new Intl.DateTimeFormat('es-AR', {
      day: 'numeric', month: 'long', year: 'numeric',
      timeZone: 'America/Argentina/Buenos_Aires',
    }).format(f);
    const hora = new Intl.DateTimeFormat('es-AR', {
      hour: '2-digit', minute: '2-digit', hour12: false,
      timeZone: 'America/Argentina/Buenos_Aires',
    }).format(f);
    return dia + ' · ' + hora + ' hs';
  }

  function diasHasta(fecha) {
    const ahora = new Date();
    const f = new Date(fecha);
    const diffMs = f - ahora;
    return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  }
})();
