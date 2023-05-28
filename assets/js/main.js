
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'



window.addEventListener('DOMContentLoaded', ()=> {
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
  const swiperServiceComplex = new Swiper('.complex__projects', {
    direction: 'horizontal',  
    wrapperClass: 'complex__projects-wrapper',
    slideClass: 'complex__projects-slide',
    spaceBetween: 30,
    breakpoints: {
      320: {
        slidesPerView: 1,
        loop: true,
        centeredSlides: true,  
        spaceBetween: 10,
      },
      625: {
        slidesPerView: 3,
        loop: false,
        // centeredSlides: false,
      }
    }
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
            popup.forEach(e => {
              e.classList.remove('active')
            })
          })})
        wrapperClose.forEach(wrapper => {
          wrapper.addEventListener('click', () => {
            popup.forEach(e => {
              e.classList.remove('active')
              const input = document.querySelectorAll('.input')
              input.forEach(inputs => {
                inputs.classList.remove('error')
              })
              
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
      popup.classList.add('active')
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
  const links = document.querySelectorAll('.header__link, .list__drop-link');
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


function techPopup() {
  const btn = document.querySelector('.tech-btn');
  const popup = document.querySelector('.tech__popup-wrapper');  
  btn.addEventListener('click', ()=> {
    popup.classList.toggle('active')
  })
 
}
techPopup()


function sendMainForm() {

  const form = document.querySelector('.home__form');
  
  function checkEmpty() {

    const input = form.querySelectorAll('.input');
    const btn = form.querySelector('.form__btn');
    const title = form.querySelector('.form__title');
    btn.addEventListener('click', ()=> {

      input.forEach(e => {
        const isValidEmail = e.checkValidity();
        if( isValidEmail) {
          e.classList.remove('error');
        } else {
          e.classList.add('error')
          title.innerHTML = 'Форма заполнена Некорректно';
        }
      })
    })
  }
  checkEmpty()
  
  form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const formData = new FormData(form);    
    fetch('assets/php/send.php', {
      method: 'post',
      body: formData,
    })
    .then(response => {
      
      if(response.ok) {
        const input = document.querySelectorAll('.input')
        input.forEach(inputs => {
          inputs.classList.remove('error')
        })
        const title = form.querySelector('.form__title');
        const inputDelete = () => {
          const inputDelete = document.querySelectorAll('.input-text');
          inputDelete.forEach(e => {
            e.value = ''
          })
        }
        inputDelete()
        title.innerHTML = 'Форма заполнена успешно';
        setTimeout(()=> {
          const popup = document.querySelector('.home__popup-wrapper').classList.remove('active');
        }, 1000);
      }
    } )
    .catch(error => {
      alert('К сожалению, по техническим причинам произошла ошибка отправки формы, свяжытесь с нами любым другим удобным для вас способом')
    })
    
  })
}
sendMainForm();


 function sendStartForm() {

  const form = document.querySelector('.start__popup'); 
  function checkEmpty() {

    const input = form.querySelectorAll('.input');
    const btn = form.querySelector('.form__btn');
    const title = form.querySelector('.form__title');
    btn.addEventListener('click', ()=> {

      input.forEach(e => {
        const isValidEmail = e.checkValidity();
        if( isValidEmail) {
          e.classList.remove('error');
        } else {
          e.classList.add('error')
          title.innerHTML = 'Форма заполнена Некорректно';
        }
      })
    })
  }
  checkEmpty()
   form.addEventListener('submit', (e)=> {

    e.preventDefault();
    const formData = new FormData(form);
    fetch('assets/php/start.php', {
      method: 'post',
      body: formData,
    })
    .then(response => {
      if(response.ok) {
        const input = document.querySelectorAll('.input')
        input.forEach(inputs => {
          inputs.classList.remove('error')
        })
        const title = form.querySelector('.form__title');
        const inputDelete = () => {
          const inputDelete = document.querySelectorAll('.input-text');
          inputDelete.forEach(e => {
            e.value = ''
          })
        }
        inputDelete()
        title.innerHTML = 'Форма заполнена успешно';
        setTimeout(()=> {
          const popup = document.querySelector('.complex__projects-popup-start').classList.remove('active');
        }, 1000);
      }
    } )
    .catch(error => {
      alert('К сожалению, по техническим причинам произошла ошибка отправки формы, свяжытесь с нами любым другим удобным для вас способом')
    })
  })
}
sendStartForm();


function sendBusinessForm() {


  const form = document.querySelector('.business__popup'); 
  function checkEmpty() {

    const input = form.querySelectorAll('.input');
    const btn = form.querySelector('.form__btn');
    const title = form.querySelector('.form__title');
    btn.addEventListener('click', ()=> {

      input.forEach(e => {
        const isValidEmail = e.checkValidity();
        if( isValidEmail) {
          e.classList.remove('error');
        } else {
          e.classList.add('error')
          title.innerHTML = 'Форма заполнена Некорректно';
        }
      })
    })
  }
  checkEmpty()
   form.addEventListener('submit', (e)=> {

    e.preventDefault();
    const formData = new FormData(form);
    fetch('assets/php/business.php', {
      method: 'post',
      body: formData,
    })
    .then(response => {

      if(response.ok) {

        
        const input = document.querySelectorAll('.input')
        input.forEach(inputs => {
          inputs.classList.remove('error')
        })
        const title = form.querySelector('.form__title');
        const inputDelete = () => {
          const inputDelete = document.querySelectorAll('.input-text');
          inputDelete.forEach(e => {
            e.value = ''
          })
        }
        inputDelete()
        title.innerHTML = 'Форма заполнена успешно';
        setTimeout(()=> {
          const popup = document.querySelector('.complex__projects-popup-business').classList.remove('active');
        }, 1000);
      }
    } )
    .catch(error => {
      alert('К сожалению, по техническим причинам произошла ошибка отправки формы, свяжытесь с нами любым другим удобным для вас способом')
    
    })
  })
}
sendBusinessForm();


function sendPremiuimForm() {


  const form = document.querySelector('.premium__popup'); 
  function checkEmpty() {

    const input = form.querySelectorAll('.input');
    const btn = form.querySelector('.form__btn');
    const title = form.querySelector('.form__title');
    btn.addEventListener('click', ()=> {

      input.forEach(e => {
        const isValidEmail = e.checkValidity();
        if( isValidEmail) {
          e.classList.remove('error');
        } else {
          e.classList.add('error')
          title.innerHTML = 'Форма заполнена Некорректно';
        }
      })
    })
  }
  checkEmpty()
   form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const formData = new FormData(form);
    fetch('assets/php/premium.php', {
      method: 'post',
      body: formData,
    })
    .then(response => {

      if(response.ok) {
        const input = document.querySelectorAll('.input')
        input.forEach(inputs => {
          inputs.classList.remove('error')
        })
        const title = form.querySelector('.form__title');
        const inputDelete = () => {
          const inputDelete = document.querySelectorAll('.input-text');
          inputDelete.forEach(e => {
            e.value = ''
          })
        }
        inputDelete()
        title.innerHTML = 'Форма заполнена успешно';
        setTimeout(()=> {
          const popup = document.querySelector('.complex__projects-popup-premium').classList.remove('active');
        }, 1000
        );
      }
    } )
    .catch(error => {
      alert('К сожалению, по техническим причинам произошла ошибка отправки формы, свяжытесь с нами любым другим удобным для вас способом')
    
    })
  })
}
sendPremiuimForm();

function sendSiteForm() {
  const form = document.querySelector('.site__popup'); 
  function checkEmpty() {

    const input = form.querySelectorAll('.input');
    const btn = form.querySelector('.form__btn');
    const title = form.querySelector('.form__title');
    btn.addEventListener('click', ()=> {

      input.forEach(e => {
        const isValidEmail = e.checkValidity();
        if( isValidEmail) {
          e.classList.remove('error');
        } else {
          e.classList.add('error')
          title.innerHTML = 'Форма заполнена Некорректно';
        }
      })
    })
  }
  checkEmpty()
   form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const formData = new FormData(form);
    fetch('assets/php/site.php', {
      method: 'post',
      body: formData,
    })
    .then(response => {
      if(response.ok) {
        const input = document.querySelectorAll('.input')
        input.forEach(inputs => {
          inputs.classList.remove('error')
        })
        const title = form.querySelector('.form__title');
        const inputDelete = () => {
          const inputDelete = document.querySelectorAll('.input-text');
          inputDelete.forEach(e => {
            e.value = ''
          })
        }
        inputDelete()
        title.innerHTML = 'Форма заполнена успешно';
        setTimeout(()=> {
          const popup = document.querySelector('.site__popup-wrapper').classList.remove('active');
        }, 1000);
      }
    } )
    .catch(error => {
      alert('К сожалению, по техническим причинам произошла ошибка отправки формы, свяжытесь с нами любым другим удобным для вас способом')
    })
  })
}
sendSiteForm();




function sendLandingForm() {
  const form = document.querySelector('.landing__popup'); 
  function checkEmpty() {

    const input = form.querySelectorAll('.input');
    const btn = form.querySelector('.form__btn');
    const title = form.querySelector('.form__title');
    btn.addEventListener('click', ()=> {

      input.forEach(e => {
        const isValidEmail = e.checkValidity();
        if( isValidEmail) {
          e.classList.remove('error');
        } else {
          e.classList.add('error')
          title.innerHTML = 'Форма заполнена Некорректно';
        }
      })
    })
  }
  checkEmpty()
   form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const formData = new FormData(form);
    fetch('assets/php/landing.php', {
      method: 'post',
      body: formData,
    })
    .then(response => {
      if(response.ok) {
        const input = document.querySelectorAll('.input')
        input.forEach(inputs => {
          inputs.classList.remove('error')
        })
        const title = form.querySelector('.form__title');
        const inputDelete = () => {
          const inputDelete = document.querySelectorAll('.input-text');
          inputDelete.forEach(e => {
            e.value = ''
          })
        }
        inputDelete()
        title.innerHTML = 'Форма заполнена успешно';
        setTimeout(()=> {
          const popup = document.querySelector('.landing__popup-wrapper').classList.remove('active');
        }, 1000);
      }
    } )
    .catch(error => {
      alert('К сожалению, по техническим причинам произошла ошибка отправки формы, свяжытесь с нами любым другим удобным для вас способом')
    })
  })
}
sendLandingForm();


function sendMarketForm() {
  const form = document.querySelector('.market__popup'); 
  function checkEmpty() {

    const input = form.querySelectorAll('.input');
    const btn = form.querySelector('.form__btn');
    const title = form.querySelector('.form__title');
    btn.addEventListener('click', ()=> {

      input.forEach(e => {
        const isValidEmail = e.checkValidity();
        if( isValidEmail) {
          e.classList.remove('error');
        } else {
          e.classList.add('error')
          title.innerHTML = 'Форма заполнена Некорректно';
        }
      })
    })
  }
  checkEmpty()
   form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const formData = new FormData(form);
    fetch('assets/php/market.php', {
      method: 'post',
      body: formData,
    })
    .then(response => {
      if(response.ok) {
        const input = document.querySelectorAll('.input')
        input.forEach(inputs => {
          inputs.classList.remove('error')
        })
        const title = form.querySelector('.form__title');
        const inputDelete = () => {
          const inputDelete = document.querySelectorAll('.input-text');
          inputDelete.forEach(e => {
            e.value = ''
          })
        }
        inputDelete()
        title.innerHTML = 'Форма заполнена успешно';
        setTimeout(()=> {
          const popup = document.querySelector('.market__popup-wrapper').classList.remove('active');
        }, 1000);
      }
    } )
    .catch(error => {
      alert('К сожалению, по техническим причинам произошла ошибка отправки формы, свяжытесь с нами любым другим удобным для вас способом')
    })
  })
}
sendMarketForm();



function sendLogoForm() {
  const form = document.querySelector('.logo__popup'); 
  function checkEmpty() {

    const input = form.querySelectorAll('.input');
    const btn = form.querySelector('.form__btn');
    const title = form.querySelector('.form__title');
    btn.addEventListener('click', ()=> {

      input.forEach(e => {
        const isValidEmail = e.checkValidity();
        if( isValidEmail) {
          e.classList.remove('error');
        } else {
          e.classList.add('error')
          title.innerHTML = 'Форма заполнена Некорректно';
        }
      })
    })
  }
  checkEmpty()
   form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const formData = new FormData(form);
    fetch('assets/php/logo.php', {
      method: 'post',
      body: formData,
    })
    .then(response => {
      if(response.ok) {
        const input = document.querySelectorAll('.input')
        input.forEach(inputs => {
          inputs.classList.remove('error')
        })
        const title = form.querySelector('.form__title');
        const inputDelete = () => {
          const inputDelete = document.querySelectorAll('.input-text');
          inputDelete.forEach(e => {
            e.value = ''
          })
        }
        inputDelete()
        title.innerHTML = 'Форма заполнена успешно';
        setTimeout(()=> {
          const popup = document.querySelector('.logo__popup-wrapper').classList.remove('active');
        }, 1000);
      }
    } )
    .catch(error => {
      alert('К сожалению, по техническим причинам произошла ошибка отправки формы, свяжытесь с нами любым другим удобным для вас способом')
    })
  })
}
sendLogoForm();



// function sendBannerForm() {
//   const form = document.querySelector('.banner__popup'); 
//   function checkEmpty() {

//     const input = form.querySelectorAll('.input');
//     const btn = form.querySelector('.form__btn');
//     const title = form.querySelector('.form__title');
//     btn.addEventListener('click', ()=> {

//       input.forEach(e => {
//         const isValidEmail = e.checkValidity();
//         if( isValidEmail) {
//           e.classList.remove('error');
//         } else {
//           e.classList.add('error')
//           title.innerHTML = 'Форма заполнена Некорректно';
//         }
//       })
//     })
//   }
//   checkEmpty()
//    form.addEventListener('submit', (e)=> {
//     e.preventDefault();
//     const formData = new FormData(form);
//     fetch('assets/php/banner.php', {
//       method: 'post',
//       body: formData,
//     })
//     .then(response => {
//       if(response.ok) {
//         const input = document.querySelectorAll('.input')
//         input.forEach(inputs => {
//           inputs.classList.remove('error')
//         })
//         const title = form.querySelector('.form__title');
//         const inputDelete = () => {
//           const inputDelete = document.querySelectorAll('.input-text');
//           inputDelete.forEach(e => {
//             e.value = ''
//           })
//         }
//         inputDelete()
//         title.innerHTML = 'Форма заполнена успешно';
//         setTimeout(()=> {
//           const popup = document.querySelector('.banner__popup-wrapper').classList.remove('active');
//         }, 1000);
//       }
//     } )
//     .catch(error => {
//       console.log(error);
//       alert('К сожалению, по техническим причинам произошла ошибка отправки формы, свяжытесь с нами любым другим удобным для вас способом')
//     })
//   })
// }
// sendBannerForm();

function sendBannerForm() {

  const form = document.querySelector('.banner__popup'); 
  function checkEmpty() {

    const input = form.querySelectorAll('.input');
    const btn = form.querySelector('.form__btn');
    const title = form.querySelector('.form__title');
    btn.addEventListener('click', ()=> {

      input.forEach(e => {
        const isValidEmail = e.checkValidity();
        if( isValidEmail) {
          e.classList.remove('error');
        } else {
          e.classList.add('error')
          title.innerHTML = 'Форма заполнена Некорректно';
        }
      })
    })
  }
  checkEmpty()
   form.addEventListener('submit', (e)=> {

    e.preventDefault();
    const formData = new FormData(form);
    fetch('assets/php/sendbanner.php', {
      method: 'post',
      body: formData,
    })
    .then(response => {

      if(response.ok) {
        const input = document.querySelectorAll('.input')
        input.forEach(inputs => {
          inputs.classList.remove('error')
        })
        const title = form.querySelector('.form__title');
        const inputDelete = () => {
          const inputDelete = document.querySelectorAll('.input-text');
          inputDelete.forEach(e => {
            e.value = ''
          })
        }
        inputDelete()
        title.innerHTML = 'Форма заполнена успешно';
        setTimeout(()=> {
          const popup = document.querySelector('.banner__popup-wrapper').classList.remove('active');
        }, 1000);
      }
    } )
    .catch(error => {
      console.log(error);
      alert('К сожалению, по техническим причинам произошла ошибка отправки формы, свяжытесь с нами любым другим удобным для вас способом')
    })
  })
}
sendBannerForm();

function sendPrezentationForm() {

  const form = document.querySelector('.prezentation__popup'); 
  function checkEmpty() {

    const input = form.querySelectorAll('.input');
    const btn = form.querySelector('.form__btn');
    const title = form.querySelector('.form__title');
    btn.addEventListener('click', ()=> {

      input.forEach(e => {
        const isValidEmail = e.checkValidity();
        if( isValidEmail) {
          e.classList.remove('error');
        } else {
          e.classList.add('error')
          title.innerHTML = 'Форма заполнена Некорректно';
        }
      })
    })
  }
  checkEmpty()
   form.addEventListener('submit', (e)=> {

    e.preventDefault();
    const formData = new FormData(form);
    fetch('assets/php/prezentation.php', {
      method: 'post',
      body: formData,
    })
    .then(response => {

      if(response.ok) {
        const input = document.querySelectorAll('.input')
        input.forEach(inputs => {
          inputs.classList.remove('error')
        })
        const title = form.querySelector('.form__title');
        const inputDelete = () => {
          const inputDelete = document.querySelectorAll('.input-text');
          inputDelete.forEach(e => {
            e.value = ''
          })
        }
        inputDelete()
        title.innerHTML = 'Форма заполнена успешно';
        setTimeout(()=> {
          const popup = document.querySelector('.prezentaion__popup-wrapper').classList.remove('active');
        }, 1000);
      }
    } )
    .catch(error => {
      console.log(error);
      alert('К сожалению, по техническим причинам произошла ошибка отправки формы, свяжытесь с нами любым другим удобным для вас способом')
    })
  })
}
sendPrezentationForm();


function sendPaketForm() {
  const form = document.querySelector('.paket__popup'); 
  function checkEmpty() {

    const input = form.querySelectorAll('.input');
    const btn = form.querySelector('.form__btn');
    const title = form.querySelector('.form__title');
    btn.addEventListener('click', ()=> {

      input.forEach(e => {
        const isValidEmail = e.checkValidity();
        if( isValidEmail) {
          e.classList.remove('error');
        } else {
          e.classList.add('error')
          title.innerHTML = 'Форма заполнена Некорректно';
        }
      })
    })
  }
  checkEmpty()
   form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const formData = new FormData(form);
    fetch('assets/php/paket.php', {
      method: 'post',
      body: formData,
    })
    .then(response => {
      if(response.ok) {
        const input = document.querySelectorAll('.input')
        input.forEach(inputs => {
          inputs.classList.remove('error')
        })
        const title = form.querySelector('.form__title');
        const inputDelete = () => {
          const inputDelete = document.querySelectorAll('.input-text');
          inputDelete.forEach(e => {
            e.value = ''
          })
        }
        inputDelete()
        title.innerHTML = 'Форма заполнена успешно';
        setTimeout(()=> {
          const popup = document.querySelector('.paket__popup-wrapper').classList.remove('active');
        }, 1000);
      }
    } )
    .catch(error => {
      console.log(error);
      alert('К сожалению, по техническим причинам произошла ошибка отправки формы, свяжытесь с нами любым другим удобным для вас способом')
    })
  })
}
sendPaketForm();



function sendSeoForm() {
  const form = document.querySelector('.seo__popup'); 
  function checkEmpty() {

    const input = form.querySelectorAll('.input');
    const btn = form.querySelector('.form__btn');
    const title = form.querySelector('.form__title');
    btn.addEventListener('click', ()=> {

      input.forEach(e => {
        const isValidEmail = e.checkValidity();
        if( isValidEmail) {
          e.classList.remove('error');
        } else {
          e.classList.add('error')
          title.innerHTML = 'Форма заполнена Некорректно';
        }
      })
    })
  }
  checkEmpty()
   form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const formData = new FormData(form);
    fetch('assets/php/seo.php', {
      method: 'post',
      body: formData,
    })
    .then(response => {
      if(response.ok) {
        const input = document.querySelectorAll('.input')
        input.forEach(inputs => {
          inputs.classList.remove('error')
        })
        const title = form.querySelector('.form__title');
        const inputDelete = () => {
          const inputDelete = document.querySelectorAll('.input-text');
          inputDelete.forEach(e => {
            e.value = ''
          })
        }
        inputDelete()
        title.innerHTML = 'Форма заполнена успешно';
        setTimeout(()=> {
          const popup = document.querySelector('.seo__popup-wrapper').classList.remove('active');
        }, 1000);
      }
    } )
    .catch(error => {
      alert('К сожалению, по техническим причинам произошла ошибка отправки формы, свяжытесь с нами любым другим удобным для вас способом')
    })
  })
}
sendSeoForm();


// function sendCommentForm() {
//   const form = document.querySelector('.comment__popup'); 
//    form.addEventListener('submit', (e)=> {
//     e.preventDefault();
//     const formData = new FormData(form);
//     fetch('assets/php/comment.php', {
//       method: 'post',
//       body: formData,
//     })
//     .then(response => {
//       if(response.ok) {
//         const file = document.querySelector('.file-input');
//         const popup = document.querySelector('.comment__popup-wrapper').classList.remove('active');
//         const thanks = () => {
//           let thanksPopup = document.querySelector('.form-sent').classList.add('active')
//         }
//         thanks();
//         const inputDelete = () => {
//           const inputDelete = document.querySelectorAll('.input-text');
//           inputDelete.forEach(e => {
//             e.value = ''
//           })
//         }
//         inputDelete()
//         setTimeout(()=> {
//           let thanksPopup = document.querySelector('.form-sent').classList.remove('active')
//         }, 4000);

//       }
//     } )
//     .catch(error => {
//       console.log(error);
//       alert('К сожалению, по техническим причинам произошла ошибка отправки формы, свяжытесь с нами любым другим удобным для вас способом')
//     })
//   })
// }
// sendCommentForm();




function sendConsultForm() {
  const form = document.querySelector('.main__form'); 
  function checkEmpty() {

    const input = form.querySelectorAll('.input');
    const btn = form.querySelector('.form__btn');
    const title = form.querySelector('.form__title');
    btn.addEventListener('click', ()=> {

      input.forEach(e => {
        const isValidEmail = e.checkValidity();
        if( isValidEmail) {
          e.classList.remove('error');
        } else {
          e.classList.add('error')
          title.innerHTML = 'Форма заполнена Некорректно';
        }
      })
    })
  }
  checkEmpty()
  form.addEventListener('submit', (e)=> {

    e.preventDefault();
    const formData = new FormData(form);
    fetch('assets/php/main.php', {
      method: 'post',
      body: formData,
    })
    .then(response => {
      if(response.ok) {
        const input = document.querySelectorAll('.input')
        input.forEach(inputs => {
          inputs.classList.remove('error')
        })
        const title = form.querySelector('.form__title');
        const inputDelete = () => {
          const inputDelete = document.querySelectorAll('.input-text');
          inputDelete.forEach(e => {
            e.value = ''
          })
        }
        inputDelete()
        title.innerHTML = 'Форма заполнена успешно';
        const checkFirst = form.querySelector('#contactChoice1').checked = false;
        const checkSecond = form.querySelector('#contactChoice2').checked = false;
        setTimeout(()=> {
          // const popup = document.querySelector('.project__popup-wrapper').classList.remove('active');
        }, 1000);
      }
    } )
    .catch(error => {
      console.log(error);
      alert('К сожалению, по техническим причинам произошла ошибка отправки формы, свяжытесь с нами любым другим удобным для вас способом')
    })
  })
}
sendConsultForm();


function sendTechForm() {
  const form = document.querySelector('.tech__popup'); 
  function checkEmpty() {

    const input = form.querySelectorAll('.input');
    const btn = form.querySelector('.form__btn');
    const title = form.querySelector('.form__title');
    btn.addEventListener('click', ()=> {

      input.forEach(e => {
        const isValidEmail = e.checkValidity();
        if( isValidEmail) {
          e.classList.remove('error');
        } else {
          e.classList.add('error')
          title.innerHTML = 'Форма заполнена Некорректно';
        }
      })
    })
  }
  checkEmpty()
   form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const formData = new FormData(form);
    fetch('assets/php/tech.php', {
      method: 'post',
      body: formData,
    })
    .then(response => {
      if(response.ok) {
        const input = document.querySelectorAll('.input')
        input.forEach(inputs => {
          inputs.classList.remove('error')
        })
        const title = form.querySelector('.form__title');
        const inputDelete = () => {
          const inputDelete = document.querySelectorAll('.input-text');
          inputDelete.forEach(e => {
            e.value = ''
          })
        }
        inputDelete()
        title.innerHTML = 'Форма заполнена успешно';
        setTimeout(()=> {
          const popup = document.querySelector('.tech__popup-wrapper').classList.remove('active');
        }, 1000);
      }
    } )
    .catch(error => {
      console.log(error);
      alert('К сожалению, по техническим причинам произошла ошибка отправки формы, свяжытесь с нами любым другим удобным для вас способом')
    })
  })
}
sendTechForm();


})





function startPopup() {
  const item = document.querySelector('.complex__projects-slide__start');
  const popup = document.querySelector('.complex__projects-popup-start');
  item.addEventListener('click', ()=> {
    popup.classList.add('active')
  })
}

startPopup()

function businessPopup() {
  const item = document.querySelector('.complex__projects-slide__business');
  const popup = document.querySelector('.complex__projects-popup-business');
  item.addEventListener('click', ()=> {
    popup.classList.add('active')
  })
}

businessPopup()

function premiumPopup() {
  const item = document.querySelector('.complex__projects-slide__premuim');
  const popup = document.querySelector('.complex__projects-popup-premium');
  item.addEventListener('click', ()=> {
    popup.classList.add('active')
  })
}

premiumPopup()