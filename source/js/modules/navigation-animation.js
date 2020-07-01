export default () => {
  const DEFAULT_TRANSITION_DURATION = 300;
  const ROUTE_NAVIGATION_DELAY = {
    story: {
      prizes: DEFAULT_TRANSITION_DURATION
    }
  };

  const toMenuItemName = (ref) => ref.replace(`#`, ``);

  const animationWithLinks = document.querySelectorAll(`.with-animation`);
  const body = document.querySelector(`body`);

  let activeTimeout;

  animationWithLinks.forEach((link) => {
    link.addEventListener(`click`, (event) => {
      const from = toMenuItemName(window.location.hash);
      clearTimeout(activeTimeout);

      event.preventDefault();
      const to = toMenuItemName(link.hash);

      body.classList.add(`transition-active`);

      const timeout = (ROUTE_NAVIGATION_DELAY[from] || {})[to] || 0;
      activeTimeout = setTimeout(() => {
        document.location = link.href;
        body.classList.remove(`transition-active`);
      }, timeout);
    });
  });
};
