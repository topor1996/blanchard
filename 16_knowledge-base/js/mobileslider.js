

const slider = document.querySelector('.event__list-swapper');

// let mySwiper = new Swiper(slider, {
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

let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 500 && slider.dataset.mobile == 'false') {
		mySwiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
      },
			slideClass: 'event__item',
			// pagination: {
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

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});
