// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import assignAnimation from './modules/assign-animation';
import rulesLifeCycleAnimation from './modules/rules-life-cycle-animation.js';
import lifeCycleState from './modules/life-cycle-state';
import prizesAnimation from './modules/prizes-animation';
import navigationAnimation from './modules/navigation-animation.js';
import FullPageScroll from './modules/full-page-scroll';

// init modules
rulesLifeCycleAnimation();
lifeCycleState();
assignAnimation(document.querySelector(`.intro__title`), {delay: 30});
assignAnimation(document.querySelector(`.intro__date`), {delay: 30});
mobileHeight();
navigationAnimation();
prizesAnimation();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
