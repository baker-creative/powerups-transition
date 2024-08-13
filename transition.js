(() => {
  window.addEventListener('load', () => {
    document.body.classList.add('view-transition-in');
  });

  if (!document.startViewTransition) return;

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a');

    if (link && link.href && link.href !== '#') {
      event.preventDefault();

      document.startViewTransition(() => {
        document.body.classList.add('view-transition-out');
        setTimeout(() => {
          window.location.href = link.href;
        }, 10);
      });
    }
  });
})();
