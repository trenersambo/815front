'use strict';

function buttonAction(){
  const hiddenText = document.querySelectorAll('.about-section__txt:not(.about-section__txt__show)');
  const button = document.getElementById('btn-more');
  const bgImage = document.getElementById('bg-image');
  const gradDelete = document.getElementById('gradient');

  button.addEventListener('click', () => {
    hiddenText.forEach((element) => {
      element.classList.add('about-section__show');
    });

    bgImage.style.height = '100%';

    button.style.display = 'none';

    gradDelete.classList.remove('about-section__gradient');
  });
};

buttonAction() ;

const hamburgerButton = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.navigation-wrapper');
const headerBorder = document.querySelector('.site-header__content');

hamburgerButton.addEventListener('click', function () {
  hamburgerButton.classList.toggle('is-active');
  hamburgerMenu.classList.toggle('is-active');
  headerBorder.classList.toggle('is-active');

  if (
    [hamburgerButton, hamburgerMenu, headerBorder].every((element) =>
      element.classList.contains('is-active')
    )
  ) {
    scrollLock.disablePageScroll();
  } else {
    scrollLock.enablePageScroll();
  }
});
