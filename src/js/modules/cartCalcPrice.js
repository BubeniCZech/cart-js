export default function cartCalcPrice() {
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
