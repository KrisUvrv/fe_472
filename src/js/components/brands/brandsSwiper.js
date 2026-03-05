import Swiper from "swiper";
import {Pagination} from "swiper/modules";
import {LOGOS} from "../../data/logos";

const createBrandsSlides = () => {
  const brandsWrapper = document.querySelector('.brands-wrapper');

  const swiperSlides = LOGOS.map((logo) => {
    const swiperSlide = document.createElement('div');
    swiperSlide.className = 'swiper-slide';

    const card = document.createElement('a');
    card.className = 'brands__card';
    card.href = '#';

    const img = document.createElement('img');
    img.className = 'brands__logo';
    img.src = logo.src;
    img.alt = logo.alt;

    const arrow = document.createElement('div');
    arrow.className = 'arrow';
    const arrowIcon = document.createElement('img');
    arrowIcon.src = './assets/images/dropdown.svg';
    arrowIcon.alt = '';
    arrow.appendChild(arrowIcon);

    card.append(img, arrow);
    swiperSlide.appendChild(card);

    return swiperSlide;
  });

  brandsWrapper.append(...swiperSlides);

};

let brandsSwiper = null;
export const initBrandsSwiper = () => {
  createBrandsSlides();

  if (window.innerWidth < 768 && !brandsSwiper) {
    brandsSwiper = new Swiper('.brands-swiper', {
      modules: [Pagination],
      slidesPerView: 1.2,
      loop: true,
      pagination: {
        el: '.brands__pagination',
        clickable: true,
        dynamicBullets: true,
      },
    });
  }

  if (window.innerWidth >= 768 && brandsSwiper) {
    brandsSwiper.destroy(true, true);
    brandsSwiper = null;
  }
};
