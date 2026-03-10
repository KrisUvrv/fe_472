
export const initServicesMenu = () => {
  const servicesMenu = document.querySelector('.services__menu-list');

  servicesMenu.addEventListener('click', (e) => {
    const item = e.target.closest('.services__menu-item');
    if (!item) return;

    document.querySelector('.services__menu-item_active')
      ?.classList.remove('services__menu-item_active');

    item.classList.add('services__menu-item_active');
  });
};


