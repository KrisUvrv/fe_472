import { LOGOS } from "../../data/logos";
import {state} from "../../state/state";

export const initBrands = () => {
  const brandsGrid = document.querySelector('.brands__grid');
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

