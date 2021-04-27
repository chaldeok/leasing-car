function burgerMenu() {
  const burgerMenuBtn = document.querySelector('.menu__burgerBtn');
  const mainMenuWrapper = document.querySelector('.main-header__menu-wrapper');
  const overlay = document.querySelector('.overlay');

  burgerMenuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
  function toggleMenu() {
    burgerMenuBtn.classList.toggle('menu__burgerBtn--active')
    overlay.classList.toggle('overlay-active')
    mainMenuWrapper.classList.toggle('main-header__menu-wrapper--mob')
  }

  overlay.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
}
burgerMenu()

/*function burgerMenu() {
  const menu = document.querySelector('.burger-menu'),
    button = document.querySelector('.burger-menu__button'),
    links = document.querySelector('.burger-menu__link'),
    overlay = document.querySelector('.burger-menu__overlay');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  /!*links.addEventListener('click', (e) => {
    toggleMenu();
  });*!/

  overlay.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  function toggleMenu() {
    menu.classList.toggle('burger-menu_active');
    /!*if (menu.classList.contains('burger-menu_active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }*!/
  }
}

burgerMenu();*/
