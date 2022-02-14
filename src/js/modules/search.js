export default function toggleSearch() {
  const search = document.querySelector('.search__input');
  const btnSearch = document.querySelector('.search__btn');
  const cards = document.querySelectorAll('.card');

  btnSearch.addEventListener('click', () => {
    const searchText = new RegExp(search.value.trim(), 'gi');

    cards.forEach((card) => {
      const title = card.querySelector('.card__name');
      if ((!searchText.test(title.textContent))) {
        card.style.display = 'none';
      } else {
        card.style.display = '';
      }
      search.value = '';
    });
  });

  search.addEventListener('keyup', (event) => {
    const searchText = new RegExp(search.value.trim(), 'gi');
    if (event.keyCode === 13) {
      console.log(event.target.value);

      cards.forEach((card) => {
        const title = card.querySelector('.card__name');

        if ((!searchText.test(title.textContent))) {
          card.style.display = 'none';
        } else {
          card.style.display = '';
        }
        search.value = '';
      });
    }
  });
}
