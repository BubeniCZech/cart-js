export default function renderCards(data) {
  const cardsWrapper = document.querySelector('.cards__wrapper');

  data.goods.forEach((good) => {
    const card = `
      <div class="card" data-id="${good.id}">

        <img class="card__img" src="${good.imgSrc}" alt="${good.name}">

        <h4 class="card__name">${good.name}</h4>
        <p data-items-in-box class="card__piece">${good.size}</p>

        <div class="items counter-wrapper">
          <div class="items__control" data-action-counter="minus">-</div>
          <div class="items__current" data-counter>1</div>
          <div class="items__control" data-action-counter="plus">+</div>
        </div>

        <div class="price">
          <div class="price__weight">${good.weight} g</div>
          <div class="price__currency">${good.price} kč</div>
        </div>

        <button data-add-cart type="button" class="card__add-cart">+ cart</button>

      </div>
    `;
    cardsWrapper.insertAdjacentHTML('beforeend', card);
  });
}
