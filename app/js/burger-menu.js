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
