import './styles/main.scss';

import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const LOGOS = [
  {
    src: "./assets/images/Lenovo.svg",
    alt: 'Lenovo icon',
  },
  {
    src: "./assets/images/Samsung.svg",
    alt: 'Samsung icon',
  },
  {
    src: "./assets/images/Apple.svg",
    alt: 'Apple icon',
  },
  {
    src: "./assets/images/ViewSonic.svg",
    alt: 'ViewSonic icon',
  },
  {
    src: "./assets/images/Bosch.svg",
    alt: 'Bosch icon',
  },
  {
    src: "./assets/images/Hp.svg",
    alt: 'HP icon',
  },
  {
    src: "./assets/images/Acer.svg",
    alt: 'Acer icon',
  },
  {
    src: "./assets/images/Sony.svg",
    alt: 'Sony icon',
  },
  {
    src: "./assets/images/Lenovo.svg",
    alt: 'Lenovo icon',
  },
  {
    src: "./assets/images/Samsung.svg",
    alt: 'Samsung icon',
  },
  {
    src: "./assets/images/Apple.svg",
    alt: 'Apple icon',
  },
  {
    src: "./assets/images/ViewSonic.svg",
    alt: 'ViewSonic icon',
  },
  {
    src: "./assets/images/Bosch.svg",
    alt: 'Bosch icon',
  },
  {
    src: "./assets/images/Hp.svg",
    alt: 'HP icon',
  },
  {
    src: "./assets/images/Acer.svg",
    alt: 'Acer icon',
  },
  {
    src: "./assets/images/Sony.svg",
    alt: 'Sony icon',
  },
];

const DEVICES = [
  'Ремонт ноутбуков',
  'Ремонт планшетов',
  'Ремонт ПК',
  'Ремонт мониторов',
  'Ремонт смартфонов',
  'Ремонт мобильных телефонов',
  'Ремонт плееров',
  'Ремонт экранов',
];

const PRICES = [
  {
    service: 'Диагностика',
    price: 'Бесплатно',
    time: '30 мин',
  },
  {
    service: 'Замена дисплея',
    price: '1 000 ₽',
    time: '30-120 мин',
  },
  {
    service: 'Замена полифонического динамика',
    price: '1 000 ₽',
    time: '30-120 мин',
  },
  {
    service: 'Тестирование с выдачей технического заключения',
    price: '1 000 ₽',
    time: '30-120 мин',
  },
];

const state = {

  screenWidth: window.innerWidth,

  brands: {isShowAll: false},
  devices: {isShowAll: false},
  pageHero: {isShowAll: false},

};

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

let brandsSwiper = null;

const initBrandsSwiper = () => {
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

let devicesSwiper = null;

const initDevicesSwiper = () => {
  if (window.innerWidth < 768 && !devicesSwiper) {
    createDevicesSlides();

    devicesSwiper = new Swiper('.devices-swiper', {
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
  }

  if (window.innerWidth >= 768 && devicesSwiper) {
    devicesSwiper.destroy(true, true);
    devicesSwiper = null;
  }
};

const pricesWrapper = document.querySelector('.prices-wrapper');

const createPricesSlides = () => {
  pricesWrapper.innerHTML = '';

  PRICES.forEach((item) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';

    const card = document.createElement('div');
    card.className = 'prices__card';

    const service = document.createElement('div');
    service.className = 'prices__service';
    service.innerHTML = `
      <div class="prices__service-title">Ремонтные услуги</div>
      <div class="prices__service-text">${item.service}</div>
    `;

    const priceRow = document.createElement('div');
    priceRow.className = 'prices__row';
    priceRow.innerHTML = `
      <div class="prices__service-title">Цена</div>
      <div class="prices__service-text">${item.price}</div>
    `;

    const timeRow = document.createElement('div');
    timeRow.className = 'prices__bottom';
    timeRow.innerHTML = `
        <div>
          <div class="prices__service-title">Срок</div>
          <div class="prices__service-text">${item.time}</div>
        </div>
        <button class="prices-button">
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

let pricesSwiper = null;

const initPricesSwiper = () => {
  if (window.innerWidth < 768) {

    if (!pricesSwiper) {
      createPricesSlides();

      pricesSwiper = new Swiper('.prices-swiper', {
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
    }

  } else {

    if (pricesSwiper) {
      pricesSwiper.destroy(true, true);
      pricesSwiper = null;
    }

    pricesWrapper.innerHTML = '';
  }
};

const initMobileSwipers = () => {
  initBrandsSwiper();
  initDevicesSwiper();
  initPricesSwiper();
};

window.addEventListener('load', initMobileSwipers);
window.addEventListener('resize', initMobileSwipers);

const renderBrands = () => {
  const brandsGrid = document.querySelector('.brands-grid');
  brandsGrid.innerHTML = '';

  let visibleCount = 8;

  if (window.innerWidth < 1100) {
    visibleCount = 6;
  }

  LOGOS.forEach((logo, index) => {
    const card = document.createElement("a");
    card.className = "brands__card";
    card.href = "#";

    if (!state.brands.isShowAll && index >= visibleCount) card.classList.add('hidden');

    const img = document.createElement("img");
    img.className = "brands__logo";
    img.src = logo.src;
    img.alt = logo.alt;

    const arrow = document.createElement("div");
    arrow.className = "arrow";
    const arrowIcon = document.createElement("img");
    arrowIcon.src = "./assets/images/dropdown.svg";
    arrowIcon.alt = "";
    arrow.append(arrowIcon);

    card.append(img, arrow);
    brandsGrid.append(card);
  });

}

const renderDevices = () => {
  const devicesGrid = document.querySelector('.devices-grid');
  devicesGrid.innerHTML = '';

  let visibleCount = 4;

  if (window.innerWidth < 1100) {
    visibleCount = 3;
  }

  DEVICES.forEach((text, index) => {
    const card = document.createElement("a");
    card.className = "devices__card";
    card.href = "#";

    if (!state.devices.isShowAll && index >= visibleCount) card.classList.add('hidden');

    const span = document.createElement("span");
    span.className = "devices__text";
    span.innerHTML = text;

    const arrow = document.createElement("div");
    arrow.className = "arrow";
    const arrowIcon = document.createElement("img");
    arrowIcon.src = "./assets/images/dropdown.svg";
    arrowIcon.alt = "";
    arrow.append(arrowIcon);

    card.append(span, arrow);
    devicesGrid.append(card);
  });
}

const render = () => {
  renderBrands();
  renderDevices();
}

const createSectionController = (section, sectionState) => {

  const button = section.querySelector('.button');
  const icon = section.querySelector('.button__icon');
  const text = section.querySelector('.button__text');

  button.addEventListener('click', () => {

    sectionState.isShowAll = !sectionState.isShowAll;

    icon.src = sectionState.isShowAll ? "assets/images/arrows_collapse.svg" : "assets/images/arrows_show.svg";

    if (button.classList.contains('read-more')) {

      const content = section.querySelector('.page-hero__text');

      content.classList.toggle('hidden', !sectionState.isShowAll);

      text.innerText = sectionState.isShowAll
        ? "Скрыть"
        : "Читать далее";
    }

    if (button.classList.contains('show')) {
      text.innerText = sectionState.isShowAll
        ? "Скрыть"
        : "Показать все";
    }
    render();
  });
}

const sections = document.querySelectorAll('.section');
sections.forEach(section => {
  if (section.classList.contains('brands')) {
    createSectionController(section, state.brands);
  }

  if (section.classList.contains('devices')) {
    createSectionController(section, state.devices);
  }

  if (section.classList.contains('page-hero')) {
    createSectionController(section, state.pageHero);
  }
});

const burger = document.querySelector('.header__burger');
const closeMenu = document.querySelector('.sidebar__header-close');
burger.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
});

closeMenu.addEventListener('click', () => {
  document.body.classList.remove('menu-open');
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1440) {
    document.body.classList.remove('menu-open');
  }
});

const openCall = document.querySelectorAll('.open-call');
const openFeedback = document.querySelectorAll('.open-feedback');


const closeModal = document.querySelectorAll('.modal-button__close');
const submitModal = document.querySelectorAll('.modal-button');

openCall.forEach((button) => {
  button.addEventListener('click', () => {
    document.body.classList.toggle('modal-call-open');
  });
})

openFeedback.forEach((button) => {
  button.addEventListener('click', () => {
    document.body.classList.toggle('modal-feedback-open');
  });
})

closeModal.forEach((button) => {
  button.addEventListener('click', () => {
    document.body.classList.remove('modal-call-open');
    document.body.classList.remove('modal-feedback-open');
  });
})

submitModal.forEach((button) => {
  button.addEventListener('click', () => {
    document.body.classList.remove('modal-call-open');
    document.body.classList.remove('modal-feedback-open');
  });
})

render();
