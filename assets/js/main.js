import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

  const swiperWeb = new Swiper('.swiper-web', {
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

  const swiperGraph = new Swiper('.swiper-graph', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    wrapperClass: 'swiper-wrapper-graph',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-graph',
      prevEl: '.swiper-button-prev-graph',
    },
  
 
  })

  const swiperServiceDev = new Swiper('.swiper-service-dev', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    wrapperClass: 'swiper-wrapper-service-dev',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.dev-btn-next',
      prevEl: '.dev-btn-prev',
    },
 
  })

  const swiperServiceGraph = new Swiper('.swiper-service_graph', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    wrapperClass: 'swiper-wrapper-service_graph',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.graph-btn-next',
      prevEl: '.graph-btn-prev',
    },
 
  })

  const swiperComment = new Swiper('.swiper-service_comment', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    speed: 400,
    wrapperClass: 'swiper-wrapper-service_comment',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.comment-button-next',
      prevEl: '.comment-button-prev ',
    },
 
  })




  // const openServiceBtn = document.querySelectorAll('.header__link-drop');
  // openServiceBtn.forEach(e => {
  //   e.addEventListener('click', el => {
  //     const self = el.currentTarget;
  //     self.classList.toggle('drop')
  //     const dropList = self.querySelectorAll('.header__list-drop')
  //     if(self.classList.contains('drop')) {
  //       dropList.forEach(li => {
  //         li.classList.add('drop')
  //       })
  //     }else (!self.classList.contains('drop')) {
  //       dropList.forEach(li => {
  //         li.classList.remove('drop')
  //       })
  //     }
  //     console.log(self);
  //   })
  // })
