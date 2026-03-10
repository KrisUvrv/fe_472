import Swiper from "swiper";
import {Pagination} from "swiper/modules";
import {DEVICES} from "../../data/devices";

const devicesWrapper = document.querySelector('.devices-wrapper');

const createDevicesSlides = () => {
  devicesWrapper.innerHTML = '';

  DEVICES.forEach((text) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';

    const card = document.createElement('a');
    card.className = 'devices__card';
    card.href = '#';

    const span = document.createElement('span');
    span.className = 'devices__text';
    span.textContent = text;

    const arrow = document.createElement('div');
    arrow.className = 'arrow';

    const arrowIcon = document.createElement('img');
    arrowIcon.src = './assets/images/dropdown.svg';
    arrowIcon.alt = '';

    arrow.appendChild(arrowIcon);
    card.append(span, arrow);
    slide.appendChild(card);

    devicesWrapper.appendChild(slide);
  });
};

export const initDevicesSwiper = () => {
    createDevicesSlides();
    return new Swiper('.devices-swiper', {
      modules: [Pagination],
      slidesPerView: 1.2,
      spaceBetween: 16,
      loop: true,
      pagination: {
        el: '.devices__pagination',
        clickable: true,
        dynamicBullets: true,
      },
    });
};
