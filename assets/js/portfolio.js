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
  
   
   
   function pageForm() {
    const btn = document.querySelector('.portfolio__page-btn');
    const form = document.querySelector('.portfolio__popup-wrapper')
    btn.addEventListener('click', ()=> {
      console.log(form);
      form.classList.toggle('active');
    })
   }
   pageForm()
   
  function closePopup() {
    const closeBtn = document.querySelector('.close-popup')
    const form = document.querySelector('.portfolio__popup-wrapper')
    closeBtn.addEventListener('click', ()=> {
      form.classList.toggle('active')
    })
  }
  closePopup()