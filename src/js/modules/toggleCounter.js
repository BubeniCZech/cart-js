import cartStatus from './cartStatus.js';
import cartCalcPrice from './cartCalcPrice.js';

export default function toggleCounter() {
  window.addEventListener('click', (event) => {
    // console.log(event.target.dataset.actionCounter);

    let counter;

    if (event.target.dataset.actionCounter === 'plus' || event.target.dataset.actionCounter === 'minus') {
      const cardCounter = event.target.closest('.counter-wrapper');
      // console.log(cardCounter);
      counter = cardCounter.querySelector('[data-counter]');
      // console.log(counter);
    }

    if (event.target.dataset.actionCounter === 'plus') {
      // console.log('PLUS');
      // eslint-disable-next-line no-plusplus
      counter.innerText = ++counter.innerText;
    }

    if (event.target.dataset.actionCounter === 'minus') {
      // console.log('MINUS');

      if (parseInt(counter.innerText, 10) > 1) {
        // eslint-disable-next-line no-plusplus
        counter.innerText = --counter.innerText;
      } else if (event.target.closest('.cart__cards') && parseInt(counter.innerText, 10) === 1) {
        // Kontrola zda je položka v košíku
        console.log('IN CART!!!');
        // Odebrání položky z košíku
        event.target.closest('.card-item').remove();
        // Zobrazit stav košíku prázdný / plný
        cartStatus();
        // Počítame celkovou cenu položek v košíku
        cartCalcPrice();
      }
    }

    // Kontrola kliknutí na + nebo - uvnitř košíku
    if (event.target.hasAttribute('data-action-counter') && event.target.closest('.cart__cards')) {
      // Počítame celkovou cenu položek v košíku
      cartCalcPrice();
    }
  });
}
