import '../styles/main.scss';

import 'swiper/css';
import 'swiper/css/pagination';

import { state } from "./state/state";
import { initBrandsSwiper } from "./components/brands/brandsSwiper";
import { initDevicesSwiper } from "./components/devices/devicesSwiper";
import { initPricesSwiper } from "./components/prices/pricesSwiper";
import { initBrands } from "./components/brands/brands";
import { initDevices } from "./components/devices/devices";
import { initSectionControllers } from "./components/controller/sectionController";
import { initModals } from "./components/modal/modal";
import { initBurger } from "./components/controller/burgerController";

const render = () => {
  initBrands();
  initDevices();
}

initSectionControllers(state, render);
initModals();
initBurger();

const initMobileSwipers = () => {
  initBrandsSwiper();
  initDevicesSwiper();
  initPricesSwiper();
};

window.addEventListener('load', initMobileSwipers);
window.addEventListener('resize', initMobileSwipers);

render();
