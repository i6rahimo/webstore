
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'




  const swiperWeb = new Swiper('.swiper-web', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    wrapperClass: 'swiper-wrapper-web',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination-web',
      type: 'bullets',
    },
  
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      461: {
        slidesPerView: 3,
        spaceBetween: 30
      },
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
      el: '.swiper-pagination-graph',
      type: 'bullets',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      461: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-graph',
      prevEl: '.swiper-button-prev-graph',
    },
  
 
  })
  const swiperServiceComplex = new Swiper('.service__complex-items', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 30,
    wrapperClass: 'service__items-wrapper',
    slideClass: 'service__item',
    
  
    breakpoints: {
      320: {
        slidesPerView: 1,
        loop: true,
        centeredSlides: true,
        spaceBetween: 30
        
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 30
        
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.complex-btn-next',
      prevEl: '.complex-btn-prev',
    },
 
  })
  const swiperServiceDev = new Swiper('.swiper-service-dev', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    wrapperClass: 'swiper-wrapper-service-dev',
    spaceBetween: 30,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination-service-dev',
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
    slideClass: 'swiper-slide-service-graph',
    spaceBetween: 30,
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination-service-graph',
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
    speed: 900,
    wrapperClass: 'swiper-wrapper-service_comment',
    // If we need pagination
    
    pagination: {
      el: '.swiper-pagination',
    },
    
    autoplay: true,
    disableOnInteraction: true,
    breakpoints: {
      320: {
        delay: 7000,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
      },
      625: {
        slidesPerView: 3,
      }
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
  function switchNight() {
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
  };
  switchNight()


function popupClose() {
  const closeImg = document.querySelectorAll('.close-popup'),
        popup = document.querySelectorAll('.popup__wrapper'),
        wrapperClose = document.querySelectorAll('.wrapper-popup');
        
        closeImg.forEach(e => {
          e.addEventListener('click', (el) => {
            const selfImg = el.currentTarget;
            console.log(selfImg);
            popup.forEach(e => {
              e.classList.remove('active')
            })
          })})
        wrapperClose.forEach(wrapper => {
          wrapper.addEventListener('click', () => {
            popup.forEach(e => {
              e.classList.remove('active')
            })
          })
        })
}
popupClose()

function homePopup() {
    const homeBtn = document.querySelector('.home__btn'),
          homePopup = document.querySelector('.home__popup-wrapper');

    homeBtn.addEventListener('click', () => {
      homePopup.classList.add('active')
    })
}
homePopup()



// function servicePopup() {
//   const serviceBtn = document.querySelector('.service__item-btn'),
//         homePopup = document.querySelector('.service__popup-wrapper'),
//         closeImg = document.querySelector('.close-popup'),
//         popup = document.querySelector('.popup__wrapper');
//   closeImg.addEventListener('click', () => {
//     if(!popup.classList.contains('active')) {
//       popup.classList.add('active')
//     }else {
//       popup.classList.remove('active')
//     }
//   })
//   serviceBtn.addEventListener('click', () => {
//     homePopup.classList.toggle('active')
//   })
// }
// servicePopup();


function commentPopup() {
  const commentBtn = document.querySelector('.comment__btn');
  const commentPopup = document.querySelector('.comment__popup-wrapper')

  commentBtn.addEventListener('click', () => {
    commentPopup.classList.add('active')
  })
}

commentPopup()



function popupStart() {
  const popupStartBtn = document.querySelector('.service__item-btn_start'),
        popupStartWrapper = document.querySelector('.service__popup-wrapper_start');

  popupStartBtn.addEventListener('click', ()=> {
    popupStartWrapper.classList.toggle('active')
  })
}
popupStart()
function popupBusines() {
  const popupBusinessBtn = document.querySelector('.service__item-btn_business'),
        popupBusinesstWrapper = document.querySelector('.service__popup-wrapper_business');

        popupBusinessBtn.addEventListener('click', ()=> {
          popupBusinesstWrapper.classList.toggle('active')
  })
}
popupBusines()
function popupPremium() {
  const popupPremiumBtn = document.querySelector('.service__item-btn_premium'),
        popupPremiumWrapper = document.querySelector('.service__popup-wrapper_premium');

        popupPremiumBtn.addEventListener('click', ()=> {
          popupPremiumWrapper.classList.toggle('active')
  })
}
popupPremium()


// function servicePopupSite() {
//   const popup = document.querySelector('.site__popup-wrapper');
//   const btn = document.querySelector('.swiper-service-site-btn');
//   btn.addEventListener('click', ()=> {
//     popup.classList.add('active')
//   })
// }
// servicePopupSite()

function projectPopup() {
  const popup = document.querySelector('.site__popup-wrapper');
  const btn = document.querySelectorAll('.swiper-project-site-btn');
  btn.forEach(e => {
    e.addEventListener('click', ()=> {
      popup.classList.toggle('active')
    })
  })
}
projectPopup()
function landingPopup() {
  const popup = document.querySelector('.landing__popup-wrapper');
  const btn = document.querySelectorAll('.swiper-project-landing-btn');
  console.log(popup);
  btn.forEach(e => {
    e.addEventListener('click', ()=> {
      popup.classList.toggle('active')
    })
  })
}
landingPopup();


function marketPopup() {
  const popup = document.querySelector('.market__popup-wrapper');
  const btn = document.querySelectorAll('.swiper-project-market-btn');
  console.log(popup);
  btn.forEach(e => {
    e.addEventListener('click', ()=> {
      popup.classList.toggle('active')
    })
  })
}
marketPopup();


function logoPopup() {
  const popup = document.querySelector('.logo__popup-wrapper');
  const btn = document.querySelectorAll('.swiper-project-logo-btn')
  btn.forEach(e => {
    e.addEventListener('click', ()=> {
      popup.classList.toggle('active')
    })
  })
}
logoPopup()

function bannerPopup() {
  const popup = document.querySelector('.banner__popup-wrapper');
  const btn = document.querySelectorAll('.swiper-project-banner-btn')
  btn.forEach(e => {
    e.addEventListener('click', ()=> {
      popup.classList.toggle('active')
    })
  })
}
bannerPopup()


function prezentationPopup() {
  const popup = document.querySelector('.prezentaion__popup-wrapper');
  const btn = document.querySelectorAll('.swiper-project-prezentation-btn')
  btn.forEach(e => {
    e.addEventListener('click', ()=> {
      popup.classList.toggle('active')
    })
  })
}
prezentationPopup()

function paketPopup() {
  const popup = document.querySelector('.paket__popup-wrapper');
  const btn = document.querySelectorAll('.swiper-project-paket-btn')
  btn.forEach(e => {
    e.addEventListener('click', ()=> {
      popup.classList.toggle('active')
    })
  })
}
paketPopup()

function ceoPopup() {
  const popup = document.querySelector('.ceo__popup-wrapper');
  const btn = document.querySelectorAll('.ceo-swiper-btn')
  btn.forEach(e => {
    e.addEventListener('click', ()=> {
      popup.classList.toggle('active')
    })
  })
} 

ceoPopup()








const form = document.querySelectorAll('.form');
form.forEach(e => {
  const telSelector = e.querySelectorAll('input[type="tel"]');
  const inputMask = new Inputmask('+7 (999) 999-99-99');
  inputMask.mask(telSelector);
})




function showMenu() {
  const burgerBtn = document.querySelector('.header__burger');
  const menu = document.querySelector(".header__wrapper");
  
  burgerBtn.addEventListener('click', ()=> {
    menu.classList.toggle('show')
    burgerBtn.classList.toggle('click')
  })
}
showMenu()


function readMore() {
  const readBtn = document.querySelector('.read-more');
  const readText = document.querySelector('.col__three-text');
  
  readBtn.addEventListener('click', ()=> {
    readText.classList.toggle('read')
  })
}
readMore()

function cardContent() {
  const cardBtns = document.querySelectorAll('.swiper-slide-img')
  cardBtns.forEach(e => {
    e.addEventListener('click', (el)=> {
      if(!e.classList.contains('rotate')) {
        e.classList.add('rotate');
      } else {
        e.classList.remove('rotate');
      }
    });
  })
}
cardContent();



function closeNavLink() {
  const links = document.querySelectorAll('.header__link');
  const nav = document.querySelector('.header__wrapper')
  const burger = document.querySelector('.header__burger')
  links.forEach(e => {
    e.addEventListener('click', ()=> {
      nav.classList.remove('show');
      burger.classList.remove('click')
    })
  })
}
closeNavLink()