import '../styles/main.scss';

import 'swiper/css';
import 'swiper/css/pagination';

import { state } from "./state/state";
import { initBrandsSwiper } from "./components/brands/brandsSwiper";
import { initDevicesSwiper } from "./components/devices/devicesSwiper";
import { initPricesSwiper } from "./components/prices/pricesSwiper";
import { initBrands } from "./components/brands/brands";
import { initDevices } from "./components/devices/devices";
import { initSectionControllers } from "./components/controllers/sectionController";
import { initModals } from "./components/modal/modal";
import { initSidebar } from "./components/sidebar/sidebar";
import { initServicesMenu } from "./components/controllers/servicesMenuController";
import { subscribeDeviceChange } from "./components/controllers/device";
import {initSidebarMenu} from "./components/controllers/sidebarMenuController";

const render = () => {
  initBrands();
  initDevices();
  initServicesMenu();
  initSidebarMenu();
}

initSectionControllers(state, render);
initModals();
initSidebar();

let brandsSwiper = null;
let devicesSwiper = null;
let pricesSwiper = null;
const isMobile = () => window.matchMedia('(max-width: 767px)').matches;

const initMobileSwipers = () => {

  if (isMobile()) {

    if (!brandsSwiper) brandsSwiper = initBrandsSwiper();
    if (!devicesSwiper) devicesSwiper = initDevicesSwiper();
    if (!pricesSwiper) pricesSwiper = initPricesSwiper();

  } else {

    brandsSwiper?.destroy(true, true);
    devicesSwiper?.destroy(true, true);
    pricesSwiper?.destroy(true, true);

    brandsSwiper = null;
    devicesSwiper = null;
    pricesSwiper = null;
  }
};

window.addEventListener('load', initMobileSwipers);

subscribeDeviceChange(() => {
  initMobileSwipers();
  render();
});

render();
