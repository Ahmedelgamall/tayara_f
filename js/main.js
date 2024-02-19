const showcaseSlider = new Swiper(".home-showcaseSlider", {
    speed: 1000,
    slidesPerView: 1,
    parallax: true,
    // centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".showcaseSlider-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.showcaseSlider-next',
      prevEl: '.showcaseSlider-prev',
    },
  });

  // COUNTER   --------------

$('.counting').each(function () {
  var $this = $(this),
    countTo = $this.attr('data-count');

  $({ countNum: $this.text() }).animate({
    countNum: countTo
  },

    {

      duration: 5000,
      easing: 'linear',
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
        //alert('finished');
      }

    });


});