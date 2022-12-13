const portfolioPageSwiper = new Swiper('.portfolio__page-swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    direction: 'horizontal',
    perSlideRotate: 90,
    wrapperClass: 'portfolio__page-swiper-wrapper',
    
    navigation: {
      nextEl: '.portfolio-page-button-next',
      prevEl: '.portfolio-page-button-prev',
    },
  
  });
  
  
  
   new SimpleBar(document.getElementById('portfolio__page-slide'),{
     autoHide: false,
     // scrollbarMaxSize: 40,
     clickOnTrack: true,
   });
  