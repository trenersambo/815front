const hamburgerButton = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".navigation-wrapper");
const headerBorder = document.querySelector(".site-header__content");

hamburgerButton.addEventListener("click", function () {
  hamburgerButton.classList.toggle("is-active");
  hamburgerMenu.classList.toggle("is-active");
  headerBorder.classList.toggle("is-active");
});
