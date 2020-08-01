export default () => {
  document.querySelector(`.js-menu-link[href="#prizes"]`)
    .addEventListener(`click`, () => {
      document.querySelectorAll(`.prizes__icon img`)
        .forEach((iconElement) => {
          const [src] = iconElement.src.split(`?`);
          iconElement.src = `${src}?_=${String(new Date().getTime())}`;
        });
    });
};
