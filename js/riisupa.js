/* -----------------------------------------------------------------------
   RIISUPA — JS compartido
   Inserta header, footer y expone utilidades de render y de fechas.
   ----------------------------------------------------------------------- */

(function () {
  'use strict';

  const NAV = [
    { href: 'index.html', label: 'Inicio', key: 'inicio' },
    { href: 'la_red.html', label: 'La Red', key: 'la-red' },
    { href: 'universidades.html', label: 'Universidades', key: 'universidades' },
    { href: 'eventos.html', label: 'Actividades', key: 'eventos' },
  ];

  const NOMBRE_COMPLETO = 'Red de Investigación e Innovación en Salud de Universidades de Gestión Privada de Argentina';

  function brand() {
    return `
      <img class="brand-mark" src="assets/img/riisupa-isotipo.png" alt="" width="80" height="155" />
      <span class="brand-text">
        <span class="brand-name">RIISUPA</span>
        <span class="brand-tagline">Red de Investigación e Innovación en Salud</span>
      </span>
    `;
  }

  function renderHeader(activeKey) {
    const navItems = NAV.map((item) => {
      const aria = item.key === activeKey ? ' aria-current="page"' : '';
      return `<li><a href="${item.href}"${aria}>${item.label}</a></li>`;
    }).join('');

    const navItemsTop = NAV.map((item) => {
      const aria = item.key === activeKey ? ' aria-current="page"' : '';
      return `<a href="${item.href}"${aria}>${item.label}</a>`;
    }).join('');

    return `
      <header class="site-header">
        <div class="header-inner">
          <a href="index.html" class="brand" aria-label="RIISUPA · Inicio">
            ${brand()}
          </a>

          <nav class="main-nav" aria-label="Navegación principal">
            ${navItemsTop}
          </nav>

          <div class="header-actions">
            <a href="${window.RIISUPA.contacto.linkedin}" target="_blank" rel="noopener" class="header-link">
              LinkedIn ↗
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
    const { email, linkedin } = window.RIISUPA.contacto;
    return `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div>
              <div class="brand" style="cursor: default;">
                ${brand()}
              </div>
              <p class="footer-tagline">
                Una iniciativa conjunta impulsada por universidades de gestión privada de Argentina, orientada al fortalecimiento de la investigación y la innovación en salud.
              </p>
              <div class="footer-contacto">
                <a href="mailto:${email}"><span aria-hidden="true">✉</span> ${email}</a>
                <a href="${linkedin}" target="_blank" rel="noopener"><span aria-hidden="true">in</span> LinkedIn de la Red ↗</a>
              </div>
            </div>

            <div class="footer-cols">
              <div class="footer-col">
                <h3>La Red</h3>
                <ul>
                  <li><a href="la_red.html">Quiénes somos</a></li>
                  <li><a href="la_red.html#comite">Comité Ejecutivo</a></li>
                  <li><a href="la_red.html#asamblea">Asamblea de Miembros</a></li>
                  <li><a href="reglamento.html">Reglamento</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h3>Explorar</h3>
                <ul>
                  <li><a href="universidades.html">Universidades miembro</a></li>
                  <li><a href="index.html#nodos">Nodos temáticos</a></li>
                  <li><a href="eventos.html">Actividades</a></li>
                  <li><a href="la_red.html#contacto">Contacto</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="footer-bottom">
            <p>© ${year} RIISUPA · ${NOMBRE_COMPLETO}</p>
            <div class="footer-links">
              <a href="mailto:${email}">Contacto</a>
              <a href="${linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a>
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
        toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
      });
    }
  }

  /* Desplaza hasta el ancla de la URL una vez renderizado el contenido. */
  function scrollToHash() {
    if (!window.location.hash) return;
    setTimeout(() => {
      let target = null;
      try { target = document.querySelector(decodeURIComponent(window.location.hash)); } catch (e) { /* hash inválido */ }
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
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
        metaEl.innerHTML = `<strong>${filtrados.length}</strong> de ${config.datos.length} ${config.etiquetaResultado}`;
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

  /* -----------------------------------------------------------------------
     Fechas (es-AR, zona Buenos Aires)

     Las fechas de data.js pueden venir con hora ('2026-12-10T15:00:00-03:00')
     o solo con día ('2026-12-10'). Las de solo día se interpretan como día
     de Argentina (antes se corrían al día anterior por la zona horaria).
     ----------------------------------------------------------------------- */

  const TZ = 'America/Argentina/Buenos_Aires';
  const SOLO_DIA = /^\d{4}-\d{2}-\d{2}$/;

  function esSoloDia(fecha) {
    return typeof fecha === 'string' && SOLO_DIA.test(fecha);
  }

  function parseFecha(fecha) {
    if (fecha instanceof Date) return fecha;
    return esSoloDia(fecha) ? new Date(fecha + 'T12:00:00-03:00') : new Date(fecha);
  }

  function formatear(fecha, opciones) {
    return new Intl.DateTimeFormat('es-AR', { timeZone: TZ, ...opciones }).format(parseFecha(fecha));
  }

  function formatoFechaLarga(fecha) {
    return formatear(fecha, { day: 'numeric', month: 'long', year: 'numeric' });
  }

  function formatoFechaHora(fecha) {
    const dia = formatoFechaLarga(fecha);
    if (esSoloDia(fecha)) return dia;
    return dia + ' · ' + formatear(fecha, { hour: '2-digit', minute: '2-digit', hour12: false }) + ' hs';
  }

  /* Día, mes abreviado y año, todos calculados en hora de Argentina. */
  function partesFecha(fecha) {
    return {
      dia: formatear(fecha, { day: 'numeric' }),
      mes: formatear(fecha, { month: 'short' }).replace('.', ''),
      anio: formatear(fecha, { year: 'numeric' }),
    };
  }

  /* Momento en que termina una actividad (para saber si ya pasó). */
  function finEvento(e) {
    if (e.fechaFin) return esSoloDia(e.fechaFin) ? new Date(e.fechaFin + 'T23:59:59-03:00') : new Date(e.fechaFin);
    if (esSoloDia(e.fechaInicio)) return new Date(e.fechaInicio + 'T23:59:59-03:00');
    return new Date(parseFecha(e.fechaInicio).getTime() + (e.duracionMinutos || 0) * 60000);
  }

  function esProximo(e, ahora) {
    return finEvento(e) >= (ahora || new Date()) && e.estado !== 'finalizado' && e.estado !== 'cancelado';
  }

  function diasHasta(fecha) {
    const hoy = formatear(new Date(), { year: 'numeric', month: '2-digit', day: '2-digit' });
    const dia = formatear(fecha, { year: 'numeric', month: '2-digit', day: '2-digit' });
    const aUTC = (s) => { const [d, m, a] = s.split('/').map(Number); return Date.UTC(a, m - 1, d); };
    return Math.round((aUTC(dia) - aUTC(hoy)) / 86400000);
  }

  /* Expuesto global */
  window.RIISUPA_UI = {
    mount,
    scrollToHash,
    initFiltros,
    parseFecha,
    formatoFechaLarga,
    formatoFechaHora,
    partesFecha,
    finEvento,
    esProximo,
    diasHasta,
  };
})();
