"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector(".nav__burger");
  var nav = document.querySelector(".header-burger-menu");
  burger.addEventListener("click", function () {
    nav.classList.toggle("flex");
    burger.classList.toggle("x");
  });
});