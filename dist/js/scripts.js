"use strict";

function burgerMenu() {
  var burgerMenuBtn = document.querySelector('.burger-menu__button');
  var menuBody = document.querySelector('.menu__body');
  var overlay = document.querySelector('.overlay');
  burgerMenuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    toggleMenu();
  });

  function toggleMenu() {
    burgerMenuBtn.classList.toggle('burger-menu__button--active');
    overlay.classList.toggle('overlay--active');
    menuBody.classList.toggle('menu__body--active');
  }

  overlay.addEventListener('click', function (e) {
    e.preventDefault();
    toggleMenu();
  });
}

burgerMenu();
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
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _core = _interopRequireWildcard(require("../../node_modules/swiper/core"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// core version + navigation, pagination modules:
// configure Swiper to use modules
_core.default.use([_core.Navigation, _core.Pagination, _core.Autoplay]); // init Swiper:
//const mySlider = new Swiper(...);