// инфо по параметрам - см. swiperjs.com/swiper-api

window.addEventListener('DOMContentLoaded', () => {

  // Параметры (4шт.)
  // breakpoint - точка (max-width) появления сладйера
  // swiperClass - это slider-1, slider-2 (тут 2 слайдера)
  // swiperSettings - настройки
  // callback - для срабатывания события (какое тебе надо, например console.log )
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  // пример ф-ции, котору м.активировать при прокрутке слайдера
  const someFunc = (instance) => {
    if (instance) {
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex);
        console.log('Сработал слайдер ', instance.passedParams.el);
      });
    }
  };

  resizableSwiper(
    '(max-width: 1280px)', // breakpoint
    '.slider-1', // swiperClass
    {      // swiperSettings
      loop: true,
      spaceBetween: 32,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,  // можно кликать по пагинации
      },
    },
    someFunc // пример, что тут м.б. любая ф-ция
  );

  resizableSwiper(
    '(max-width: 1500px)',// breakpoint
    '.slider-2',// swiperClass
    {      // swiperSettings
      loop: true,
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      breakpoints: {
        1200: {
          spaceBetween: 20,
        }
      }
    },
    someFunc // пример, что тут м.б. любая ф-ция
  );
});


/**
В функцию следует добавить проверку наличия слайдера на странице 😉
Иначе люди получат ошибку, когда функция попытается вызвать метод destroy на странице где его нет.

function initSwiper() {
		if (!mySwiper && document.querySelector(".service__slider")) {
		mySwiper = new Swiper(".service__slider", {
			slidesPerView: "auto",
			a11y:false,
			spaceBetween: 15,
			freeMode: true,
		});
	};
	};

 */
