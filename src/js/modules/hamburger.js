export const hamburger = () => {
  const iconMenu = document.querySelector('.hamburger');

  iconMenu.addEventListener('click', () => {
    iconMenu.classList.toggle('active');
  });
};
