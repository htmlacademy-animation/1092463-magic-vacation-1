export default () => {
  const DEFAULT_TRANSITION_DURATION = 300;
  const ROUTE_NAVIGATION_DELAY = {
    story: {
      prizes: DEFAULT_TRANSITION_DURATION
    }
  };

  const toMenuItemName = (ref) => ref.replace(`#`, ``);

  let activeTimeout;
  const body = document.querySelector(`body`);
  const animationWithLinks = document.querySelectorAll(`.with-animation-before`);
  animationWithLinks.forEach((link) => {
    link.addEventListener(`click`, (event) => {
      event.preventDefault();

      body.classList.add(`transition-active`);

      clearTimeout(activeTimeout);

      const from = toMenuItemName(window.location.hash);
      const to = toMenuItemName(link.hash);
      const timeout = (ROUTE_NAVIGATION_DELAY[from] || {})[to] || 0;
      activeTimeout = setTimeout(() => {
        document.location = link.href;
        body.classList.remove(`transition-active`);
      }, timeout);
    });
  });
};
