export default function cartStatus() {
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
