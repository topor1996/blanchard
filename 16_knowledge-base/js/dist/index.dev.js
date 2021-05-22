"use strict";

window.addEventListener('DOMContentLoaded', function () {
  $(function () {
    $("#accordion").accordion();
  });
  $("#accordion").accordion({
    collapsible: true
  });
  $("#accordion").accordion("option", "active", null);
  $("#accordion").accordion({
    heightStyle: "content"
  }); // nav.addEventListener("click", () => {
  //   nav.classList.toggle("flex");
  //   burger.classList.toggle("x")
  // });

  function viewdiv(id) {
    var el = document.getElementById(id);
    var link = document.getElementById('toggleLink');

    if (el.style.display == "block") {
      el.style.display = "none";
    } else {
      el.style.display = "block";
    }
  }
});