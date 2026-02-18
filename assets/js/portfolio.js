(function () {
  const root = document.querySelector('[data-portfolio-root]');
  if (!root) return;

  const cards = Array.from(root.querySelectorAll('[data-category]'));
  const filters = Array.from(document.querySelectorAll('[data-filter]'));
  const modal = document.querySelector('[data-project-modal]');
  const modalTitle = document.querySelector('[data-modal-title]');
  const modalSummary = document.querySelector('[data-modal-summary]');
  const modalMaterial = document.querySelector('[data-modal-material]');
  const modalTime = document.querySelector('[data-modal-time]');
  const modalCategory = document.querySelector('[data-modal-category]');
  const closeModalBtn = document.querySelector('[data-modal-close]');

  filters.forEach((btn) => {
    btn.addEventListener('click', () => {
      const value = btn.getAttribute('data-filter') || 'Todos';
      filters.forEach((x) => x.classList.remove('active'));
      btn.classList.add('active');

      cards.forEach((card) => {
        const cat = card.getAttribute('data-category');
        const show = value === 'Todos' || cat === value;
        card.style.display = show ? '' : 'none';
      });
    });
  });

  root.querySelectorAll('[data-open-project]').forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('[data-category]');
      if (!card || !modal) return;

      modalTitle.textContent = card.getAttribute('data-title') || 'Proyecto';
      modalSummary.textContent = card.getAttribute('data-summary') || '';
      modalMaterial.textContent = card.getAttribute('data-material') || '-';
      modalTime.textContent = card.getAttribute('data-time') || '-';
      modalCategory.textContent = card.getAttribute('data-category') || '-';
      modal.classList.add('show');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  closeModalBtn?.addEventListener('click', closeModal);
  modal?.querySelector('.modal-backdrop')?.addEventListener('click', closeModal);
})();
