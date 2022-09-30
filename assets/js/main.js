import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

  const swiper = new Swiper('.swiper-web', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    wrapperClass: 'swiper-wrapper-web',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
 
  })