import cartStatus from './cartStatus.js';
import cartCalcPrice from './cartCalcPrice.js';

export default function renderCardInCart() {
  const cartCards = document.querySelector('.cart__cards');

  window.addEventListener('click', (event) => {
    if (event.target.hasAttribute('data-add-cart')) {
      const card = event.target.closest('.card');
      // console.log(card);

      const productInfo = {
        id: card.dataset.id,
        imgSrc: card.querySelector('.card__img').getAttribute('src'),
        name: card.querySelector('.card__name').innerText,
        size: card.querySelector('[data-items-in-box]').innerText,
        weight: card.querySelector('.price__weight').innerText,
        price: card.querySelector('.price__currency').innerText,
        counter: card.querySelector('[data-counter]').innerText,
      };

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

          <div class="card-item__weight">${productInfo.size} / ${productInfo.weight}</div>

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

      // Status kosiku plny / prazdny
      cartStatus();
      cartCalcPrice();
    }
  });
}
