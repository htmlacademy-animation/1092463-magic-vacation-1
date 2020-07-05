export default () => {
  const btn = document.querySelector(`.rules__link`);

  const firstRulesLink = document.querySelector(`.rules__item:nth-of-type(1)`);
  firstRulesLink.addEventListener(`animationstart`, () => {
    btn.classList.remove(`rules__link--shown`);
  });

  const lastRulesLink = document.querySelector(`.rules__item:nth-of-type(4)`);
  lastRulesLink.addEventListener(`animationend`, () => {
    btn.classList.add(`rules__link--shown`);
  });
};
