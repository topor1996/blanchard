window.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector(".nav__burger");
  const nav = document.querySelector(".header-nav__list");
  burger.addEventListener("click", () => {
    nav.classList.toggle("flex");
    burger.classList.toggle("x")
  })

  document.querySelectorAll('.how-we-work__step-btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll ('.how-we-work__left').forEach(function(tabContent){
        tabContent.classList.remove('how-we-work__left-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('how-we-work__left-active')
    })
  })

  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  $(function () {
    $("#accordion").accordion();
  });


  $("#accordion").accordion({ collapsible: true });
  $("#accordion").accordion("option", "active", null);
  $("#accordion").accordion({ heightStyle: "content" });

  nav.addEventListener("click", () => {
    nav.classList.toggle("flex");
    burger.classList.toggle("x")
  });


})

document.addEventListener('DOMContentLoader', function () {

})
