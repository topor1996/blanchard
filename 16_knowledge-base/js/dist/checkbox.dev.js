"use strict";

// if (window.innerWidth < 500) {
//        const btn = document.querySelector('.publishing__check-title');
//        const blocks = document.querySelectorAll('.publish__check');
//        btn.addEventListener('click', () => {
//          if (!btn.classList.contains('publishing__check-title-active')) {
//            blocks.forEach(el => {
//              el.classList.add('publish__check-active');
//            });
//            btn.classList.add('publishing__check-title-active');
//          } else {
//            blocks.forEach(el => {
//              el.classList.remove('publish__check-active');
//              if (el.querySelector('input').checked) {
//                el.classList.add('publish__check-active');
//              }
//            });
//            btn.classList.remove('publishing__check-title-active');
//          }
//         });
//       }
if (window.innerWidth < 500) {
  document.querySelector('.publishing__check-title').addEventListener('click', function () {
    document.querySelector('.label-publish__check').classList.toggle('label-publish__check-active');
  });
  document.querySelectorAll(".publish__check-input").forEach(function (e) {
    e.addEventListener("click", function () {
      e.closest(".publish__check").classList.toggle("publish__check-active");
    });
  });
  document.querySelectorAll(".publishing__check-title").forEach(function (e) {
    e.addEventListener("click", function () {
      e.closest(".publishing__check-title").classList.toggle("publishing__check-title-active");
    });
  });
}