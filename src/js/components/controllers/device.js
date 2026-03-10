

export const getDeviceType = () => {
  if (window.matchMedia('(max-width: 767px)').matches) {
    return 'mobile';
  } else if (window.matchMedia('(min-width: 768px) and (max-width: 1024px)').matches) {
    return 'tablet';
  } else {
    return 'desktop';
  }
};

export const subscribeDeviceChange = (callback) => {

  const mqlMobile = window.matchMedia('(max-width: 767px)');
  const mqlTablet = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');
  const mqlDesktop = window.matchMedia('(min-width: 1025px)');

  const handler = (event) => {
    if (event.matches) {
      callback();
    }
  };

  mqlMobile.addEventListener('change', handler);
  mqlTablet.addEventListener('change', handler);
  mqlDesktop.addEventListener('change', handler);
};

export const subscribeSidebarCloseOnDesktop = (sidebarCloseCallback) => {
  const mql = window.matchMedia('(min-width: 1440px)');

  const handler = (event) => {
    if (event.matches) {
      sidebarCloseCallback();
    }
  };

  if (mql.matches) {
    sidebarCloseCallback();
  }

  mql.addEventListener('change', handler);
};
