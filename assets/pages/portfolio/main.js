

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
        popup = document.querySelectorAll('.popup__wrapper');
        
        closeImg.forEach(e => {
          e.addEventListener('click', (el) => {
            const selfImg = el.currentTarget;
            console.log(selfImg);
            popup.forEach(e => {
              //   if(!e.classList.contains('active')) {
                //     e.classList.add('active')
                //   }else {
                  //     e.classList.remove('active')
                  //   }
                  console.log(e);
              e.classList.remove('active')
            })
          })})}
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


function servicePopupSite() {
  const popup = document.querySelector('.site__popup-wrapper');
  const btn = document.querySelector('.swiper-service-site-btn');
  btn.addEventListener('click', ()=> {
    popup.classList.add('active')
  })
}
servicePopupSite()



// const ajaxSend = async (formData) => {
//   const url = 'http://localhost/webstore/assets/php/send.php';
//   const response = await fetch('../php/send.php', {
//     method: "POST",
//     body: formData
//   });
//   if(!response.ok) {
//     throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
//   }
//   return await response.text();
// }

// if(document.querySelector('#header-popup')) {
//   const form = document.querySelector('#header-popup');

//   form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const formData = new FormData(this);
//     ajaxSend(formData)
//       .then((response) => {
//         console.log(response);
//         form.reset();
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//   })
// }
$(function headerPopup() {

  $('#header-popup').on('submit', function (e) {

    e.preventDefault();

    $.ajax({
      type: 'POST',
      url: 'assets/php/send.php',
      data: $('#header-popup').serialize(),
      success: function () {
        const homePopup = document.querySelector('.popup__wrapper');
        // homePopup.style.display = 'none';
        // console.log('ok');
        homePopup.classList.remove('active')

      // popup.classList.add('show')
      }
    });

  });
});
$(function startOrder() {

  $('#service__popup-start').on('submit', function (e) {

    e.preventDefault();

    $.ajax({
      type: 'POST',
      url: 'assets/php/start-order.php',
      data: $('#service__popup-start').serialize(),
      success: function () {
        const homePopup = document.querySelector('.service__popup-wrapper');
        homePopup.classList.remove('active')
        // homePopup.style.display = 'none';

        // console.log('ok');
      // popup.classList.add('show')
      }
    });

  });
});
$(function businessOrder() {

  $('#service__popup-business').on('submit', function (e) {

    e.preventDefault();

    $.ajax({
      type: 'POST',
      url: 'assets/php/business-order.php',
      data: $('#service__popup-business').serialize(),
      success: function () {
        const homePopup = document.querySelector('.service__popup-wrapper_business');
        homePopup.classList.remove('active')
        // homePopup.style.display = 'none';

        console.log('ok');
      // popup.classList.add('show')
      }
    });

  });

});

$(function premiumOrder() {

  $('#service__popup-premium').on('submit', function (e) {

    e.preventDefault();

    $.ajax({
      type: 'POST',
      url: 'assets/php/premium-order.php',
      data: $('#service__popup-premium').serialize(),
      success: function () {
        const homePopup = document.querySelector('.service__popup-wrapper_premium');
        homePopup.classList.remove('active')
        // homePopup.style.display = 'none';

        console.log('ok');
      // popup.classList.add('show')
      }
    });

  });

});

$(function review() {

  $('#comment__popup').on('submit', function (e) {

    e.preventDefault();

    $.ajax({
      type: 'POST',
      url: 'assets/php/review.php',
      data: $('#comment__popup').serialize(),
      success: function () {
        console.log('ok');
      }
    });

  });

});
// function sendMessage() {
//   const form = document.querySelector('#header-popup');
//   form.addEventListener('submit', (e)=> {
//     const formData = new FormData();
//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', '../../send.php');
//     xhr.send();
//     xhr.onload = function() {
//       console.log('o');
//     }
//     xhr.onerror = function() {
//       console.log('qwe');
//     }

//   })
// }
// sendMessage()