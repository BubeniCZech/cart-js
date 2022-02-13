import { preloader } from './modules/preloader.js';
import { hamburger } from './modules/hamburger.js';
import { toggleModals } from './modules/modals.js';

function cartCalcPrice() {
  const cartCards = document.querySelector('.cart__cards');
  const priceElements = cartCards.querySelectorAll('.price__currency');
  const totalPriceEl = document.querySelector('.total-price');
  const deliveryCost = document.querySelector('.delivery-cost');
  const cartDelivery = document.querySelector('[data-cart-delivery]');
  // console.log(cartItem);

  // Celková cena
  let priceTotal = 0;

  priceElements.forEach((item) => {
    // Zjištění množství zboží
    const amountEl = item.closest('.card-item').querySelector('[data-counter]');
    priceTotal += parseInt(item.innerText, 10) * parseInt(amountEl.innerText, 10);
  });

  console.log(priceTotal);

  totalPriceEl.innerText = priceTotal;

  if (priceTotal > 0) {
    cartDelivery.classList.remove('hide');
  } else {
    cartDelivery.classList.add('hide');
  }

  if (priceTotal >= 600) {
    deliveryCost.classList.add('free');
    deliveryCost.innerText = 'zdarma';
  } else {
    deliveryCost.classList.remove('free');
    deliveryCost.innerText = '50 Kč';
  }
}

function toggleCartStatus() {
  // console.log('cart status');
  const cartCards = document.querySelector('.cart__cards');
  // console.log(cartCards.children.length);
  const cartEmpty = document.querySelector('[data-cart-empty]');

  if (cartCards.children.length) {
    console.log('FULL');
    cartEmpty.classList.add('hide');
  } else {
    console.log('EMPTY');
    cartEmpty.classList.remove('hide');
  }
}

function toggleCounter() {
  // const counter = document.querySelector('[data-counter]');
  // const counterMinus = document.querySelector('[data-action-counter="minus"]');
  // const counterPlus = document.querySelector('[data-action-counter="plus"]');

  // console.log(counter.innerText);
  // console.log(counterMinus);
  // console.log(counterPlus);

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
        toggleCartStatus();
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

function renderCard() {
  const cartCards = document.querySelector('.cart__cards');

  window.addEventListener('click', (event) => {
    if (event.target.hasAttribute('data-add-cart')) {
      const card = event.target.closest('.card');
      // console.log(card);

      const productInfo = {
        id: card.dataset.id,
        imgSrc: card.querySelector('.card__img').getAttribute('src'),
        name: card.querySelector('.card__name').innerText,
        itemsInBox: card.querySelector('[data-items-in-box]').innerText,
        weight: card.querySelector('.price__weight').innerText,
        price: card.querySelector('.price__currency').innerText,
        counter: card.querySelector('[data-counter]').innerText,
      };

      // console.log(productInfo);

      const itemInCart = cartCards.querySelector(`[data-id="${productInfo.id}"]`);
      // console.log(itemInCart);

      if (itemInCart) {
        const counterElement = itemInCart.querySelector('[data-counter]');
        // eslint-disable-next-line max-len
        counterElement.innerText = parseInt(counterElement.innerText, 10) + parseInt(productInfo.counter, 10);
      } else {
        const cartItemHTML = `
        <div class="card-item" data-id="${productInfo.id}">

          <img class="card-item__img" src="${productInfo.imgSrc}" alt="${productInfo.name}">

          <div class="card-item__name">${productInfo.name}</div>

          <div class="card-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

          <div class="items items-small counter-wrapper">
            <div class="items__control" data-action-counter="minus">-</div>
            <div class="items__current" data-counter>${productInfo.counter}</div>
            <div class="items__control" data-action-counter="plus">+</div>
          </div>

          <div class="price">
            <div class="price__currency">${productInfo.price}</div>
          </div>

        </div>
      `;

        cartCards.insertAdjacentHTML('beforeend', cartItemHTML);
      }

      card.querySelector('[data-counter]').innerText = '1';

      // Statu kosiku plny / prazdny
      toggleCartStatus();
      cartCalcPrice();
    }
  });
}

// preloader();
hamburger();
toggleModals();
cartCalcPrice();
toggleCartStatus();
renderCard();
toggleCounter();
