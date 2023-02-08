$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<img class="slick-prev slick-arrow" src="./img/svg/arrow-prev.svg" />',
    nextArrow: '<img class="slick-next slick-arrow" src="./img/svg/arrow-next.svg" />',
    responsive: [
        {
            breakpoint: 768,
            settings: "unslick"
          },
    ]
  });