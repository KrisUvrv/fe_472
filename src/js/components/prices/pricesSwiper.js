import Swiper from "swiper";
import {Pagination} from "swiper/modules";
import {PRICES} from "../../data/prices";

const pricesWrapper = document.querySelector('.prices-wrapper');

const createPricesSlides = () => {
  pricesWrapper.innerHTML = '';

  PRICES.forEach((item) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.classList.add('prices__slide');

    const card = document.createElement('div');
    card.className = 'prices__card';

    const service = document.createElement('div');
    service.className = 'prices__service';
    service.innerHTML = `
      <div class="prices__service_title">Ремонтные услуги</div>
      <div class="prices__service_text">${item.service}</div>
    `;

    const priceRow = document.createElement('div');
    priceRow.innerHTML = `
      <div class="prices__service_title">Цена</div>
      <div class="prices__service_text">${item.price}</div>
    `;

    const timeRow = document.createElement('div');
    timeRow.className = 'prices__bottom';
    timeRow.innerHTML = `
        <div>
          <div class="prices__service_title">Срок</div>
          <div class="prices__service_text">${item.time}</div>
        </div>
        <button class="prices__button">
                <span>Заказать</span>
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M4.08569 5.58569L0.292799 1.7928C-0.097725 1.40227 -0.0977242 0.769111 0.2928 0.378587L0.378586 0.292801C0.76911 -0.0977237 1.40228 -0.0977241 1.7928 0.2928L6.37859 4.87859C6.76911 5.26911 6.76911 5.90228 6.37859 6.2928L1.7928 10.8786C1.40228 11.2691 0.769111 11.2691 0.378587 10.8786L0.292801 10.7928C-0.0977237 10.4023 -0.0977241 9.76911 0.2928 9.37859L4.08569 5.58569Z"
                        fill="#FFFFFF"/>
                </svg>
         </button>
    `;

    card.append(service, priceRow, timeRow);
    slide.appendChild(card);
    pricesWrapper.appendChild(slide);
  });
};

export const initPricesSwiper = () => {
    createPricesSlides();
     return new Swiper('.prices-swiper', {
        modules: [Pagination],
        slidesPerView: 1.05,
        spaceBetween: 16,
        loop: true,
        pagination: {
          el: '.prices__pagination',
          clickable: true,
          dynamicBullets: true,
        },
      });
};
