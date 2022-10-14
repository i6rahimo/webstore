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



  const swiper = new Swiper('.swiper-home', {
    // Optional parameters
    direction: 'horizontal',
    wrapperClass: 'swiper-wrapper-home',
    loop: true,

    slidesPerView:1,

    autoplay: {
      delay: 2000,
    },
    speed: 2500,

  });
  



  const dropBtn = document.querySelectorAll('.header__link-drop')
  dropBtn.forEach(e => {
    e.addEventListener('click', el => {
      e.classList.toggle('drop')    
      const img = e.querySelectorAll('img')
      img.forEach(e => {

        e.classList.toggle('rotate')
      }) 
    })
  })


function homePopup() {
    const homeBtn = document.querySelector('.home__btn'),
          homePopup = document.querySelector('.home__popup-wrapper'),
          closeImg = document.querySelectorAll('.close-popup'),
          popup = document.querySelector('.popup__wrapper');


    closeImg.forEach(e => {

      e.addEventListener('click', () => {
        if(!popup.classList.contains('active')) {
          popup.classList.add('active')
        }else {
          popup.classList.remove('active')
        }
      })

    })
    
    homeBtn.addEventListener('click', () => {
      homePopup.classList.toggle('active')
    })
}
homePopup()
function servicePopup() {
  const serviceBtn = document.querySelector('.service__item-btn'),
        homePopup = document.querySelector('.service__popup-wrapper'),
        closeImg = document.querySelector('.close-popup'),
        popup = document.querySelector('.popup__wrapper');
  // closeImg.addEventListener('click', () => {
  //   if(!popup.classList.contains('active')) {
  //     popup.classList.add('active')
  //   }else {
  //     popup.classList.remove('active')
  //   }
  // })
  serviceBtn.addEventListener('click', () => {
    homePopup.classList.toggle('active')
  })
}
servicePopup();



(function switchNight() {
  const switchBtn = document.querySelectorAll('.header__switch');
  const body = document.querySelector('body');
  switchBtn.forEach(el => {
    el.addEventListener('click', e => {
      const el = e.currentTarget;
      el.classList.toggle('switch')
      el.classList.toggle('night')
      body.classList.toggle('night')
    })
  })
})()