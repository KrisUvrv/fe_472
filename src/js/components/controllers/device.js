
export const subscribeDeviceChange = (callback) => {

  const mqlMobile = window.matchMedia('(max-width: 767px)');

  const handler = (event) => {
    if (event.matches) {
      callback();
    }
  };

  mqlMobile.addEventListener('change', handler);
};

export const subscribeSidebarCloseOnDesktop = (sidebarCloseCallback) => {
  const mqlDesktop = window.matchMedia('(min-width: 1440px)');

  const handler = (event) => {
    if (event.matches) {
      sidebarCloseCallback();
    }
  };

  if (mqlDesktop.matches) {
    sidebarCloseCallback();
  }

  mqlDesktop.addEventListener('change', handler);
};
