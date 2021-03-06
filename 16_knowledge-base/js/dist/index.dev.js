"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

window.addEventListener('DOMContentLoaded', function () {
  $(function () {
    $('.accordion').accordion({
      collapsible: true,
      active: 0
    });
    $('.accordions').accordion({
      heightStyle: 'content',
      collapsible: true
    });
    var searchButton = document.querySelector('.search-button');
    var searchCloseButton = document.querySelector('.search-close-button');
    var search = document.querySelector('.search');
    var searchInput = document.querySelector('.search-input');
    searchButton.addEventListener('click', function (event) {
      event.preventDefault();
      search.classList.toggle('search-is_active');
      searchInput.classList.toggle('search-input-is_active');
      searchButton.classList.toggle('search-button-is_active');
      searchCloseButton.classList.toggle('search-close-button--appear');
    });
    searchCloseButton.addEventListener('click', function (event) {
      event.preventDefault();
      search.classList.remove('search-is_active');
      searchInput.classList.remove('search-input-is_active');
      searchButton.classList.remove('search-button-is_active');
      searchCloseButton.classList.remove('search-close-button--appear');
    });
    /* ACCODRION */

    $(function () {
      $("#catalog-accordion").accordion({
        collapsible: true,
        heightStyle: "content"
      }); // $("#editions-accordion").accordion({
      //   collapsible: true,
      //   heightStyle: "content",
      //   active: 1,
      // });
    });
    /* END ACCORDION */

    $('.bottom-list-link').click(function () {
      $('.bottom-list-link').not($(this)).removeClass("bottom-list-link-active");
      $(this).toggleClass("bottom-list-link-active");
      $('.bottom-list-link').not($(this)).siblings(".dropdown-content").removeClass("show");
      $(this).siblings(".dropdown-content").toggleClass("show");
    });
    /* ACCORDION TABS */

    document.querySelectorAll('.flag__item-btn').forEach(function (tabsBtn) {
      tabsBtn.addEventListener('click', function (event) {
        var tab = event.currentTarget.dataset.tab;
        document.querySelectorAll('.flag__item-btn').forEach(function (link) {
          link.classList.remove('flag__item-btn_active');
        });
        tabsBtn.classList.add('flag__item-btn_active');
        document.querySelectorAll('.language').forEach(function (tabContent) {
          tabContent.classList.remove('language_active');
        });
        document.querySelector("[data-content=\"".concat(tab, "\"]")).classList.add('language_active');
      });
    });
    /* ACCODRION */

    $(function () {
      $("#catalog-accordion").accordion({
        collapsible: true,
        heightStyle: "content"
      }); // $("#editions-accordion").accordion({
      //   collapsible: true,
      //   heightStyle: "content",
      //   active: 1,
      // });
    });
    /* END ACCORDION */

    /* ACCORDION TABS */

    document.querySelectorAll('.artist__item').forEach(function (tabsBtn) {
      tabsBtn.addEventListener('click', function (event) {
        var tab = event.currentTarget.dataset.tab;
        document.querySelectorAll('.artist__item').forEach(function (link) {
          link.classList.remove('artist_active');
        });
        tabsBtn.classList.add('artist_active');
        document.querySelectorAll('.catalog-block-left').forEach(function (tabContent) {
          tabContent.classList.remove('catalog-block-left_active');
        });
        document.querySelector("[data-content=\"".concat(tab, "\"]")).classList.add('catalog-block-left_active');
      });
    });
    document.querySelectorAll('.editions-accordion__checkbox').forEach(function (item) {
      item.addEventListener('change', function () {
        var dataCheckbox = item.dataset.editionitem;

        if (item.checked) {
          document.querySelectorAll('.editions-categories__box-item').forEach(function (boxItem) {
            if (boxItem.dataset.editionitem === dataCheckbox) {
              boxItem.style.display = 'block';
              boxItem.querySelector('input').checked = true;
              boxItem.querySelector('.box-item__remover').addEventListener('click', function () {
                boxItem.style.display = 'none';

                if (item.dataset.editionitem === dataCheckbox) {
                  item.checked = false;
                }
              });
              boxItem.querySelector('input').addEventListener('click', function () {
                if (!this.checked) {
                  boxItem.style.display = 'none';
                  item.checked = false;
                }
              });
            }
          });
        } else {
          document.querySelectorAll('.editions-categories__box-item').forEach(function (boxItem) {
            if (boxItem.dataset.editionitem === dataCheckbox) {
              boxItem.style.display = 'none';
              boxItem.querySelector('input').checked = true;
            }
          });
        }
      });
    }); // document.querySelector('#acc-design-checkbox').checked = true;
    // document.querySelector('#box-design-checkbox').addEventListener('change', function () {
    //   if (this.checked === false) {
    //     document.querySelector('.design-item').style.display = 'none';
    //     document.querySelector('#acc-design-checkbox').checked = false;
    //   }
    // })
    // (function () {
    //   [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function (el) {
    //     new SelectFx(el);
    //   });
    // });

    var slider = document.querySelector('.event__list-swapper'); // let mySwiper = new Swiper(slider, {
    // 	slidesPerView: 3,
    // 	spaceBetween: 10,
    // 	loop: true,
    // 	pagination: {
    // 		el: '.swiper-pagination',
    // 		clickable: true,
    // 	},
    // 	navigation: {
    // 		nextEl: '.swiper-button-next',
    // 		prevEl: '.swiper-button-prev',
    // 	},
    // })

    var mySwiper;

    function mobileSlider() {
      if (window.innerWidth <= 500 && slider.dataset.mobile == 'false') {
        mySwiper = new Swiper(slider, {
          slidesPerView: 1,
          spaceBetween: 10,
          pagination: {
            el: ".swiper-pagination"
          },
          slideClass: 'event__item' // pagination: {
          // 	el: '.swiper-pagination',
          // 	clickable: true,
          // },

        });
        slider.dataset.mobile = 'true';
      }

      if (window.innerWidth > 500) {
        slider.dataset.mobile = 'false';

        if (slider.classList.contains('swiper-container-initialized')) {
          mySwiper.destroy();
        }
      }
    }

    mobileSlider();
    window.addEventListener('resize', function () {
      mobileSlider();
    });
    var swiper = new Swiper(".gallery-slider", {
      slidesPerView: 3,
      slidesPerColumn: 2,
      slidesPerGroup: 3,
      spaceBetween: 45,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction"
      },
      navigation: {
        nextEl: ".gallery-button-next",
        prevEl: ".gallery-button-prev"
      },
      breakpoints: {
        // when window width is >= 320px
        // 320: {
        //   slidesPerView: 3,
        //   spaceBetween: 20
        // },
        300: {
          slidesPerView: 1,
          slidesPerColumn: 1,
          spaceBetween: 25
        },
        500: {
          slidesPerView: 2,
          slidesPerColumn: 1,
          spaceBetween: 25
        },
        768: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          spaceBetween: 25
        },
        850: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 25
        },
        1000: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          spaceBetween: 30
        },
        1100: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 45
        },
        1860: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 50
        },
        2000: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 70
        },
        2090: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 100
        }
      }
    });
    var swiper = new Swiper(".publish-swiper", {
      slidesPerView: 3,
      spaceBetween: 50,
      pagination: {
        el: ".swiper-publish-pagination",
        type: "fraction"
      },
      navigation: {
        nextEl: ".button-next-publish",
        prevEl: ".button-prev-publish"
      },
      // Responsive breakpoints
      breakpoints: _defineProperty({
        // when window width is >= 320px
        768: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        1218: {
          slidesPerView: 2,
          spaceBetween: 73
        },
        // when window width is >= 480px
        1241: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        1490: {
          slidesPerView: 3,
          spaceBetween: 73
        },
        1860: {
          slidesPerView: 3,
          spaceBetween: 50
        },
        1921: {
          slidesPerView: 3,
          spaceBetween: 80
        },
        2005: {
          slidesPerView: 3,
          spaceBetween: 100
        },
        2060: {
          slidesPerView: 3,
          spaceBetween: 140
        }
      }, "2060", {
        slidesPerView: 4,
        spaceBetween: 80
      })
    });
    var swiper = new Swiper(".project-slide", {
      slidesPerView: 3,
      spaceBetween: 50,
      // slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: ".button-project-next",
        prevEl: ".button-project-prev"
      },
      breakpoints: {
        // when window width is >= 320px
        300: {
          slidesPerView: 1,
          spaceBetween: 60
        },
        550: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 50
        },
        1050: {
          slidesPerView: 3,
          spaceBetween: 50
        }
      }
    });
    document.addEventListener('DOMContentLoaded', function () {
      var catalogLangBtn = document.querySelectorAll('.flag__item-btn');
      catalogLangBtn.forEach(function (btn) {
        return btn.addEventListener('click', function () {
          var selectedLang = btn.dataset.lang;
          var selectedBtn = document.querySelector('.flag__item-btn.selected');
          btn.classList.add('selected');
          selectedBtn.classList.remove('selected');
          console.log("Selected catalog lang is '".concat(selectedLang, "'"));
        });
      });
    }); // const element = document.querySelector('.select');
    // const choices = new Choices(element, {
    //   searchEnabled: false,
    //   searchChoices: false,
    // });

    function showMore() {
      $(".event-more-btn").click(function () {
        $(".event__item:hidden").slice(0, 3).slideDown({
          start: function start() {
            $(this).css({
              display: "flex"
            });
          }
        });

        if ($(".event__item:hidden").length == 0) {
          $(".event-more-btn").hide();
        }
      });
    }

    ;
    showMore(); // ?????????????? ymaps.ready() ?????????? ??????????????, ??????????
    // ???????????????????? ?????? ???????????????????? API, ?? ?????????? ?????????? ?????????? ???????????? DOM-????????????.

    ymaps.ready(init);

    function init() {
      // ???????????????? ??????????.
      var myMap = new ymaps.Map("map", {
        // ???????????????????? ???????????? ??????????.
        // ?????????????? ???? ??????????????????: ??????????????, ????????????????.
        // ?????????? ???? ???????????????????? ???????????????????? ???????????? ?????????? ??????????????,
        // ???????????????????????????? ???????????????????????? ?????????????????????? ??????????????????.
        center: [55.758468, 37.601088],
        // ?????????????? ??????????????????????????????. ???????????????????? ????????????????:
        // ???? 0 (???????? ??????) ???? 19.
        zoom: 14.3
      }); // ???????????????? ???????????????????? ?? ?????????? ?????????? (??????????).

      var myGeoObject = new ymaps.GeoObject({
        geometry: {
          type: "Point",
          // ?????? ?????????????????? - ??????????
          coordinates: [55.758468, 37.601088] // ???????????????????? ??????????

        }
      });
      var myPlacemark = new ymaps.Placemark([55.75726634699231, 37.600369391872924], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/mark.svg',
        iconImageSize: [20, 42],
        iconImageOffset: [-3, -42]
      }); // ???????????????????? ???????????????????? ???? ??????????.

      myMap.geoObjects.add(myPlacemark);
    }

    var selector = document.querySelector("input[type='tel']");
    var im = new Inputmask("+7 (999)-999-99-99");
    im.mask(selector);
    new JustValidate('.footer-form', {
      rules: {
        name: {
          required: true,
          minLength: 2,
          maxLength: 30
        },
        tel: {
          required: true,
          "function": function _function(name, value) {
            var phone = selector.inputmask.unmaskedvalue();
            return Number(phone) && phone.length === 10;
          }
        }
      },
      messages: {
        name: {
          required: '?????????????? ???????? ??????',
          minLength: '?????? ???????????? ?????????????????? ?????????????? 2 ??????????????',
          maxLength: '?????? ???????????? ?????????????????? ???? ?????????? 30 ????????????????'
        },
        tel: {
          required: '?????????????? ?????? ??????????????',
          "function": '????????????????????, ?????????????? ???????????????????? ??????????'
        }
      }
    }); // $('select').each(function () {
    //   var $this = $(this), numberOfOptions = $(this).children('option').length;
    //   $this.addClass('select-hidden');
    //   $this.wrap('<div class="select"></div>');
    //   $this.after('<div class="select-styled"></div>');
    //   var $styledSelect = $this.next('div.select-styled');
    //   $styledSelect.text($this.children('option').eq(0).text());
    //   var $list = $('<ul />', {
    //     'class': 'select-options'
    //   }).insertAfter($styledSelect);
    //   for (var i = 0; i < numberOfOptions; i++) {
    //     $('<li />', {
    //       text: $this.children('option').eq(i).text(),
    //       rel: $this.children('option').eq(i).val()
    //     }).appendTo($list);
    //   }
    //   var $listItems = $list.children('li');
    //   $styledSelect.click(function (e) {
    //     e.stopPropagation();
    //     $('div.select-styled.active').not(this).each(function () {
    //       $(this).removeClass('active').next('ul.select-options').hide();
    //     });
    //     $(this).toggleClass('active').next('ul.select-options').toggle();
    //   });
    //   $listItems.click(function (e) {
    //     e.stopPropagation();
    //     $styledSelect.text($(this).text()).removeClass('active');
    //     $this.val($(this).attr('rel'));
    //     $list.hide();
    //     //console.log($this.val());
    //   });
    //   $(document).click(function () {
    //     $styledSelect.removeClass('active');
    //     $list.hide();
    //   });
    // });
    //  Tippy
    //  ==================================================================================================

    tippy('#tooltip-1', _defineProperty({
      content: '???????????? ?????????????????????? ?????????????????? - ?????????????????????? ?????????????????????? ????????????????????',
      theme: 'blanchard',
      trigger: 'click'
    }, "trigger", 'mouseenter click'));
    tippy('#tooltip-2', _defineProperty({
      content: '??????????????, ????????????????, ??????????????????, ?????? ?????????????????? ???? ???????? ?????????????????? ???????????? ???????????????? ?? ?????? ????????????',
      theme: 'blanchard',
      trigger: 'click'
    }, "trigger", 'mouseenter click'));
    tippy('#tooltip-3', _defineProperty({
      content: '?? ???????????????????? ???????????????? ????????????????',
      theme: 'blanchard',
      trigger: 'click'
    }, "trigger", 'mouseenter click'));
    var element = document.querySelector('#gallery__filter');
    var choices = new Choices(element, {
      itemSelectText: '',
      renderSelectedChoices: '',
      searchEnabled: false
    });
    $('.filter__option').prop('tabIndex', 0);
    $('.choices__inner').prop('tabIndex', 0);
    $('.choices').prop('tabIndex', -1);
    $('.catalog-right-heading').prop('tabIndex', 0);
    $('.projects-tooltip-icon').hover(function () {
      $(this).addClass("hover");
    }, function () {
      $(this).removeClass("active");
    });
    $(document).ready(function () {
      $('.gallery__filter').keypress(function (e) {
        if (e.keyCode == 13) $('.filter__selected').click();
      });
    });
  });
});