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
  var nav = document.querySelector(".simplebar-block-realizm");
  burger.addEventListener("click", function () {
    nav.classList.toggle("simplebar-block-active");
    burger.classList.toggle("item__link-active");
  });
});
window.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector(".item__link-impressionizm");
  var nav = document.querySelector(".simplebar-block-impressionizm");
  burger.addEventListener("click", function () {
    nav.classList.toggle("simplebar-block-active");
    burger.classList.toggle("item__link-active");
  });
});
window.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector(".item__link-postimpressionizm");
  var nav = document.querySelector(".simplebar-block-postimpressionizm");
  burger.addEventListener("click", function () {
    nav.classList.toggle("simplebar-block-active");
    burger.classList.toggle("item__link-active");
  });
});
window.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector(".item__link-avangard");
  var nav = document.querySelector(".simplebar-block-avangard");
  burger.addEventListener("click", function () {
    nav.classList.toggle("simplebar-block-active");
    burger.classList.toggle("item__link-active");
  });
});
window.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector(".item__link-futurizm");
  var nav = document.querySelector(".simplebar-block-futurizm");
  burger.addEventListener("click", function () {
    nav.classList.toggle("simplebar-block-active");
    burger.classList.toggle("item__link-active");
  });
});