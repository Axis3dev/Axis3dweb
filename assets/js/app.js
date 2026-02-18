(function () {
  const config = window.SITE_CONFIG || {};

  function injectConfig() {
    document.querySelectorAll('[data-config]').forEach((el) => {
      const key = el.getAttribute('data-config');
      if (key && config[key] != null) el.textContent = String(config[key]);
    });

    document.querySelectorAll('[data-config-href]').forEach((el) => {
      const mapKey = el.getAttribute('data-config-href');
      if (!mapKey) return;
      let value = config[mapKey];
      if (!value) return;
      if (mapKey === 'PHONE') value = `tel:${value}`;
      if (mapKey === 'EMAIL') value = `mailto:${value}`;
      el.setAttribute('href', String(value));
    });

    const waLinks = document.querySelectorAll('[data-whatsapp-link]');
    waLinks.forEach((el) => {
      const message = el.getAttribute('data-whatsapp-message') || `Hola ${config.BUSINESS_NAME || 'AXIS3D'}, quiero comenzar mi proyecto.`;
      const url = buildWhatsappUrl(config.WHATSAPP, message);
      if (url) el.setAttribute('href', url);
    });
  }

  function buildWhatsappUrl(number, message) {
    if (!number) return '';
    const clean = String(number).replace(/\D/g, '');
    return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
  }

  function setupActiveLinks() {
    const page = document.body.dataset.page;
    document.querySelectorAll('.nav-link[data-page]').forEach((el) => {
      if (el.getAttribute('data-page') === page) el.classList.add('active');
    });
  }

  function setupDrawer() {
    const drawer = document.querySelector('[data-drawer]');
    const openBtn = document.querySelector('[data-drawer-open]');
    const closeBtn = document.querySelector('[data-drawer-close]');
    const backdrop = drawer ? drawer.querySelector('.drawer-backdrop') : null;
    if (!drawer || !openBtn || !closeBtn || !backdrop) return;

    const setState = (open) => {
      drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
      document.body.style.overflow = open ? 'hidden' : '';
    };

    openBtn.addEventListener('click', () => setState(true));
    closeBtn.addEventListener('click', () => setState(false));
    backdrop.addEventListener('click', () => setState(false));
    drawer.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setState(false)));
  }

  function setupReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('show'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }

  function setupContactForm() {
    const form = document.querySelector('[data-contact-form]');
    if (!form) return;
    const success = document.querySelector('[data-form-success]');
    const waBtn = document.querySelector('[data-form-whatsapp]');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const nombre = data.get('nombre');
      const tel = data.get('telefono');
      const correo = data.get('correo');
      const privacidad = data.get('privacidad');

      if (!nombre || !tel || !correo || !privacidad) {
        alert('Completa los campos requeridos y acepta el aviso de privacidad.');
        return;
      }

      if (success) success.style.display = 'block';
      const msg = `Hola ${config.BUSINESS_NAME || 'AXIS3D'}, soy ${nombre}. Quiero cotizar un proyecto de impresión 3D.`;
      const waUrl = buildWhatsappUrl(config.WHATSAPP, msg);
      if (waBtn && waUrl) waBtn.setAttribute('href', waUrl);
      form.reset();
    });
  }

  injectConfig();
  setupActiveLinks();
  setupDrawer();
  setupReveal();
  setupContactForm();
})();
