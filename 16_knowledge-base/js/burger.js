window.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector(".nav__burger");
  const nav = document.querySelector(".header-burger-menu");
  burger.addEventListener("click", () => {
    nav.classList.toggle("flex");
    burger.classList.toggle("x")
  })
});

// window.addEventListener('DOMContentLoaded', function () {
//   const burger = document.querySelector(".item__link-realizm");
//   burger.addEventListener("click", () => {
//     burger.classList.toggle("item__link-active")
//   })
// });

// window.addEventListener('DOMContentLoaded', function () {
//   const burger = document.querySelector(".item__link-impresionizm");

//   burger.addEventListener("click", () => {

//     burger.classList.toggle("item__link-active")
//   })
// });

// window.addEventListener('DOMContentLoaded', function () {
//   const burger = document.querySelector(".item__link-postimpresionizm");

//   burger.addEventListener("click", () => {

//     burger.classList.toggle("item__link-active")
//   })
// });

// window.addEventListener('DOMContentLoaded', function () {
//   const burger = document.querySelector(".item__link-avangard");

//   burger.addEventListener("click", () => {

//     burger.classList.toggle("item__link-active")
//   })
// });

// window.addEventListener('DOMContentLoaded', function () {
//   const burger = document.querySelector(".item__link-futurizm");

//   burger.addEventListener("click", () => {

//     burger.classList.toggle("item__link-active")
//   })
// });
