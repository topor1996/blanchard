window.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector(".nav__burger");
  const nav = document.querySelector(".header-burger-menu");
  burger.addEventListener("click", () => {
    nav.classList.toggle("flex");
    burger.classList.toggle("x")
  })
})

