$(document).ready(function () {
    $('.admissions_slider').slick({
          infinite: true,
           lazyLoad: 'ondemand',
          slidesToShow: 4,
          slidesToScroll: 4,
           autoplay: true,
          autoplaySpeed: 3000,
          easing: 'easeOutElastic',
          prevArrow:'<button class="slick-prev slick-arrow admissions_arrow" aria-label="Previous" type="button" ><img src="./images/pre.png" ></button>',
          nextArrow:'<button class="slick-next slick-arrow admissions_arrow" aria-label="Next" type="button" ><img src="./images/next.png" ></button>'
          ,
  
        responsive: [
  {
      breakpoint: 1024,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
      }
  },
  {
      breakpoint: 600,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 2
      }
  },
  {
      breakpoint: 480,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1
      }
  }
  
  ]
      });
      $('.video_slider').slick({
          infinite: true,
           lazyLoad: 'ondemand',
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 4000,
          easing: 'easeOutElastic',
          prevArrow:'<button class="slick-prev slick-arrow video_arrow" aria-label="Previous" type="button" ><img src="./images/pre.png" ></button>',
          nextArrow:'<button class="slick-next slick-arrow video_arrow" aria-label="Next" type="button" ><img src="./images/next.png" ></button>'
          ,
  
        responsive: [
  {
      breakpoint: 1024,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
      }
  },
  {
      breakpoint: 768,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1
      }
  }
  
  ]
      });
  })
  