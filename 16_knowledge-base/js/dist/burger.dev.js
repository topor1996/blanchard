"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector(".nav__burger");
  var nav = document.querySelector(".header-burger-menu");
  burger.addEventListener("click", function () {
    nav.classList.toggle("flex");
    burger.classList.toggle("x");
  });
});
window.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector(".item__link-realizm");
  burger.addEventListener("click", function () {
    burger.classList.toggle("item__link-active");
  });
});
window.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector(".item__link-impresionizm");
  burger.addEventListener("click", function () {
    burger.classList.toggle("item__link-active");
  });
});
window.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector(".item__link-postimpresionizm");
  burger.addEventListener("click", function () {
    burger.classList.toggle("item__link-active");
  });
});
window.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector(".item__link-avangard");
  burger.addEventListener("click", function () {
    burger.classList.toggle("item__link-active");
  });
});
window.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector(".item__link-futurizm");
  burger.addEventListener("click", function () {
    burger.classList.toggle("item__link-active");
  });
});