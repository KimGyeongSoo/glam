$(document).ready(function(){

  var fac = new Swiper(".fac", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop : true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

});