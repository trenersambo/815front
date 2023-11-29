// Burger button-menu
const hamburgerButton = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".navigation-wrapper");
const headerBorder = document.querySelector(".site-header__content");

hamburgerButton.addEventListener("click", function () {
  hamburgerButton.classList.toggle("is-active");
  hamburgerMenu.classList.toggle("is-active");
  headerBorder.classList.toggle("is-active");
  if (
    [hamburgerButton, hamburgerMenu, headerBorder].every((element) =>
      element.classList.contains("is-active")
    )
  ) {
    scrollLock.disablePageScroll();
  } else {
    scrollLock.enablePageScroll();
  }
});

const swiperCount = document.querySelector(".swiper-count");
// Swiper section-hero
const swiperHero = new Swiper(".hero-section__swiper", {
  loop: true,
  autoplayDisableOnInteraction: false,
  slidesPerView: 1,
  autoHeight: true,
  // autoplay: {
  // delay: 3000,
  // },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    formatFractionCurrent: function (number) {
      return ("0" + number).slice(-2);
    },
    formatFractionTotal: function (number) {
      return ("0" + number).slice(-2);
    },
    renderFraction: function (currentClass, totalClass) {
      return (
        '<span class="' +
        currentClass +
        '"></span>' +
        "  " +
        '<span class="' +
        totalClass +
        '"></span>'
      );
    },
  },
});
