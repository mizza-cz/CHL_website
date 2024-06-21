$(document).ready(function () {
  var $slider = $(".stories-section__slider");
  var initialized = false;

  var sliderSettings = {
    centerMode: true,
    centerPadding: "240px",
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
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 740,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  function checkAndInitializeSlider() {
    var elementCount = $slider.children(".stories-section__item").length;

    if (
      !initialized &&
      (elementCount > 4 || (elementCount <= 4 && $(window).width() < 1001))
    ) {
      $slider.slick(sliderSettings);
      initialized = true;
    } else if (initialized && elementCount <= 4 && $(window).width() >= 1001) {
      $slider.slick("unslick");
      initialized = false;
    }
  }

  checkAndInitializeSlider();

  $(window).on("resize", function () {
    checkAndInitializeSlider();
  });
});
