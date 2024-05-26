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
    responsive: [
      {
        breakpoint: 720,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $('.slider-nav').slick({
    slidesToShow: 7,
    slidesToScroll: 1,

    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1001,
        settings: {
          slidesToShow: 6,
          arrows: false,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 5,
          arrows: false,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 4,
          arrows: false,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  });

  $('.topPillar').on('click', function () {
    var index = $(this).index();
    $('.slider-for').slick('slickGoTo', index);
  });
});
