import { DEVICES } from "../../data/devices";
import {state} from "../../state/state";

export const initDevices = () => {
  const devicesGrid = document.querySelector('.devices__grid');
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
