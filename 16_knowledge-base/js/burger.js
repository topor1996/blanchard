window.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector(".nav__burger");
  const nav = document.querySelector(".header-burger-menu");
  burger.addEventListener("click", () => {
    nav.classList.toggle("flex");
    burger.classList.toggle("x")
  })
});

window.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector(".item__link-realizm");
  const nav = document.querySelector(".simplebar-block-realizm");
  burger.addEventListener("click", () => {
    nav.classList.toggle("simplebar-block-active");
    burger.classList.toggle("item__link-active")
  })
});

window.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector(".item__link-impressionizm");
  const nav = document.querySelector(".simplebar-block-impressionizm");
  burger.addEventListener("click", () => {
    nav.classList.toggle("simplebar-block-active");
    burger.classList.toggle("item__link-active")
  })
});

window.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector(".item__link-postimpressionizm");
  const nav = document.querySelector(".simplebar-block-postimpressionizm");
  burger.addEventListener("click", () => {
    nav.classList.toggle("simplebar-block-active");
    burger.classList.toggle("item__link-active")
  })
});

window.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector(".item__link-avangard");
  const nav = document.querySelector(".simplebar-block-avangard");
  burger.addEventListener("click", () => {
    nav.classList.toggle("simplebar-block-active");
    burger.classList.toggle("item__link-active")
  })
});

window.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector(".item__link-futurizm");
  const nav = document.querySelector(".simplebar-block-futurizm");
  burger.addEventListener("click", () => {
    nav.classList.toggle("simplebar-block-active");
    burger.classList.toggle("item__link-active")
  })
});