import { preloader } from './modules/preloader.js';
import getData from './modules/getData.js';
import renderCards from './modules/renderCards.js';
import renderCardInCart from './modules/renderCardInCart.js';
import toggleCounter from './modules/toggleCounter.js';
import { hamburger } from './modules/hamburger.js';
import toggleModals from './modules/modals.js';
import toggleSearch from './modules/search.js';

preloader();
getData().then((data) => {
  renderCards(data);
  toggleSearch();
  renderCardInCart(data);
  toggleCounter();
  toggleModals();
  hamburger();
});
