function burgerMenu() {
  const burgerMenuBtn = document.querySelector('.burger-menu__button');
  const menuBody = document.querySelector('.menu__body');
  const overlay = document.querySelector('.overlay');

  burgerMenuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  function toggleMenu() {
    burgerMenuBtn.classList.toggle('burger-menu__button--active')
    overlay.classList.toggle('overlay--active')
    menuBody.classList.toggle('menu__body--active')
  }

  overlay.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
}
burgerMenu();
