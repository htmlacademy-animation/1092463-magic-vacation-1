export default () => {
  document.querySelector(`.js-menu-link[href="#prizes"]`)
    .addEventListener(`click`, () => {
      document.querySelectorAll(`.prizes__icon img`)
        .forEach((iconElement) => {
          iconElement.src = `${iconElement.src}?r=${String(Math.random())}`;
        });
    });
};
