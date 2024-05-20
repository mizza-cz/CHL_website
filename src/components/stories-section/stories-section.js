$('.stories-section__slider').slick({
  centerMode: true,
  centerPadding: '240px',
  slidesToShow: 3,
  prevArrow:
    '<button class="slick-arrow slick-prev"><img src="images/ico/prev.svg" loading="lazy" alt="" /></button>',
  nextArrow:
    '<button class="slick-arrow slick-next"><img src="images/ico/next.svg" loading="lazy" alt="" /></button>',
  responsive: [
    {
      breakpoint: 1320,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 740,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
      },
    },
  ],
});
