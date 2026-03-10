export const initSidebarMenu = () => {
  const servicesMenu = document.querySelector('.sidebar__menu');

  const servicesTitle = document.querySelector('.services__title-text');


  servicesMenu.addEventListener('click', (e) => {
    const item = e.target.closest('.sidebar__menu-item');
    if (!item) return;

    document.querySelector('.sidebar__menu-item_active')
      ?.classList.remove('sidebar__menu-item_active');

    item.classList.add('sidebar__menu-item_active');

    servicesTitle.innerHTML = item.innerHTML;
  });
};


