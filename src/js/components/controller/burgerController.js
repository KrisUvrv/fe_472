export const initBurger = () => {

  const burger = document.querySelector('.header__burger');
  const closeMenu = document.querySelector('.sidebar__header_close');
  burger.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
  });

  closeMenu.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1440) {
      document.body.classList.remove('menu-open');
    }
  });

}
