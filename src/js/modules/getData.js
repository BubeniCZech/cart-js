export default function getData() {
  // fetch('../assets/data/catalog.json');
  const cardsWrapper = document.querySelector('.cards__wrapper');
  return fetch('../assets/data/catalog.json')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Databaze nenalezena ${response.status}`);
    })
    .then((data) => (data))
    .catch((error) => {
      console.warn(error);
      cardsWrapper.innerHTML = '<div style="color: red; font-size: 20px">Opss něco není v pořádku!</div>';
      cardsWrapper.style.display = 'flex';
      cardsWrapper.style.alignItems = 'center';
      cardsWrapper.style.justifyContent = 'center';
    });
}
