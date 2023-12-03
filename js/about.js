// скрипт для блока about

function buttonAction(){

  const button = document.getElementById('btn-more');
  const hiddenText = document.querySelectorAll('.about-section__txt:not(.about-section__txt__show)');
  const bgImage = document.getElementById('bg-image');// тут сидит фон.картинка

  button.addEventListener('click', function() {

  // добавить всем этот класс - увидеть другие тексты
  hiddenText.forEach((element) => {
    element.classList.add('about-section__show');
  });

  bgImage.style.height = '100%'; // развернул фон

  button.style.display = 'none'; // кнопку убрать

  const gradDelete= document.getElementById('gradient');
  gradDelete.classList.remove('about-section__gradient'); // градиент убрать

  });


};

buttonAction() ;
