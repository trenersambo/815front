
document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.test__btn-more');
  const hiddenText = document.querySelectorAll('.test__txt:not(.test__show)');


  //размер окна: кнопка должна быть (<=320px) или нет (окно >320px)
  function checkScreenWidth() {
    if (window.innerWidth <= 320) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  }

// проверяем нужный размер в 320рх при загрузке страницы
  checkScreenWidth(); 

// проверяем при изменении размера окна
  window.addEventListener('resize', checkScreenWidth); 

 
  button.addEventListener('click', function() {
    hiddenText.forEach((element) => {
      element.classList.add('test__show');
    });

    const papka = document.querySelector('.test__papka');
    papka.style.height = '100%'; // развернул фон

    const btnMore = document.querySelector('.test__btn-more');
    btnMore.style.display = 'none'; // кнопку убрать

    const gradDelete= document.querySelector('.test__papka--grad');
    gradDelete.classList.remove('test__papka--grad'); // градиент убрать

  });
 

});

