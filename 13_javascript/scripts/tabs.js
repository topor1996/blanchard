document.addEventListener('DOMContentLoader', function () {
  document.querySelectorAll('.how-we-work__step-btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll ('.how-we-work__left').forEach(function(tabContent){
        tabContent.classList.remove('.how-we-work__left-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('.how-we-work__left-active')
    })
  })
})
