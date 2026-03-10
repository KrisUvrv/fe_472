import { subscribeSidebarCloseOnDesktop } from "../controllers/device";

export const initSidebar = () => {
  const burger = document.querySelector('.header__burger');
  const closeMenu = document.querySelector('.sidebar__header_close');
  const sidebar = document.querySelector('.sidebar');

  if (!burger || !closeMenu || !sidebar) return;

  const open = () => document.body.classList.add('menu-open');
  const close = () => document.body.classList.remove('menu-open');

  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    document.body.classList.toggle('menu-open');
  });

  closeMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    close();
  });

  document.addEventListener('click', (e) => {
    if (document.body.classList.contains('menu-open') && !sidebar.contains(e.target)) {
      close();
    }
  });

  sidebar.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  subscribeSidebarCloseOnDesktop(close);
};
