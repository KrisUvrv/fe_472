import {state} from "../../state/state";

export const createSectionController = (section, sectionState, render) => {

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
};

export const initSectionControllers = (state, render) => {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    if (section.classList.contains('brands')) {
      createSectionController(section, state.brands, render);
    }

    if (section.classList.contains('devices')) {
      createSectionController(section, state.devices, render);
    }

    if (section.classList.contains('page-hero')) {
      createSectionController(section, state.pageHero, render);
    }
  });
}
