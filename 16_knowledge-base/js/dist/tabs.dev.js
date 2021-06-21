"use strict";

document.addEventListener('DOMContentLoader', function () {
  document.querySelectorAll('.artist').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      var path = event.currentTarget.dataset.path;
      document.querySelectorAll('.catalog-left-block').forEach(function (tabContent) {
        tabContent.classList.remove('.catalog-left-block-active');
      });
      document.querySelector("[data-target=\"".concat(path, "\"]")).classList.add('.catalog-left-block-active');
    });
  });
});