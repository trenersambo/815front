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
