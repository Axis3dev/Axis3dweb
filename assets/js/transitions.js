(function () {
  const ORDER = ['portafolio', 'servicios', 'sobre', 'comienza'];
  const KEY = 'axis3d_nav_direction';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function rank(page) {
    if (page === 'index') return -1;
    return ORDER.indexOf(page);
  }

  function runEntryAnimation() {
    if (reduced) return;
    const direction = sessionStorage.getItem(KEY);
    if (!direction) return;
    sessionStorage.removeItem(KEY);
    document.body.classList.add(direction === 'forward' ? 'page-enter-forward' : 'page-enter-backward');
    setTimeout(() => {
      document.body.classList.remove('page-enter-forward', 'page-enter-backward');
    }, 450);
  }

  function runExitNavigation(targetUrl, direction) {
    if (reduced) {
      sessionStorage.setItem(KEY, direction);
      window.location.href = targetUrl;
      return;
    }

    const overlay = document.querySelector('[data-page-transition]');
    if (!overlay) {
      sessionStorage.setItem(KEY, direction);
      window.location.href = targetUrl;
      return;
    }

    sessionStorage.setItem(KEY, direction);
    overlay.classList.add(direction === 'forward' ? 'run-forward' : 'run-backward');
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 320);
  }

  function setupLinkTransitions() {
    const page = document.body.dataset.page || 'index';
    const current = rank(page);

    document.querySelectorAll('a[data-nav]').forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        const toPage = link.getAttribute('data-nav');
        if (!href || !toPage || href.startsWith('#')) return;
        if (href.startsWith('http')) return;

        const next = rank(toPage);
        const direction = next >= current ? 'forward' : 'backward';
        e.preventDefault();
        runExitNavigation(href, direction);
      });
    });
  }

  runEntryAnimation();
  setupLinkTransitions();
})();
