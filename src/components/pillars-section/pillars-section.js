$(document).ready(function () {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="images/ico/prev.svg" loading="lazy" alt="" /></button>',
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="images/ico/next.svg" loading="lazy" alt="" /></button>',
    fade: true,
    asNavFor: '.slider-nav',
  });

  $('.slider-nav').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true, // Эта строка обеспечивает навигацию при клике на элементы навигации
  });

  // Добавляем обработчики кликов на элементы topPillar
  $('.topPillar').on('click', function () {
    var index = $(this).index();
    $('.slider-for').slick('slickGoTo', index);
  });
});
