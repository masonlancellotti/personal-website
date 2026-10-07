const directory = document.querySelector('.site-directory');
const menu = document.getElementById('site-menu');
const menuToggle = document.querySelector('.directory-toggle');
const mobileNavigation = window.matchMedia('(max-width: 959px)');

if (directory && menu && menuToggle) {
  const home = document.createComment('Directory position');
  directory.before(home);

  function updateDirectory() {
    document.documentElement.classList.toggle('has-mobile-navigation', mobileNavigation.matches);
    if (mobileNavigation.matches) {
      menu.querySelector('.site-menu-body').append(directory);
    } else {
      if (menu.open) menu.close();
      home.after(directory);
    }
  }

  menuToggle.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'true');
    document.documentElement.classList.add('has-site-menu');
    menu.showModal();
  });
  menu.querySelector('.site-menu-close').addEventListener('click', () => menu.close());
  menu.addEventListener('close', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    document.documentElement.classList.remove('has-site-menu');
    if (mobileNavigation.matches) menuToggle.focus({ preventScroll: true });
  });
  menu.addEventListener('click', (event) => {
    if (event.target.closest('.tabs button, a')) {
      menu.close();
      return;
    }
    if (event.target !== menu) return;
    const bounds = menu.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) menu.close();
  });
  mobileNavigation.addEventListener('change', updateDirectory);
  updateDirectory();
}
