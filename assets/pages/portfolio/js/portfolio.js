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
  
  const form = document.querySelector('.form');
  const telSelector = form.querySelector('input[type="tel"]');
  const inputMask = new Inputmask('+7 (999) 999-99-99');
  inputMask.mask(telSelector);
  
  
  $(function startOrder() {

    $('#portfolio__page-form').on('submit', function (e) {
  
      e.preventDefault();
  
      $.ajax({
        type: 'POST',
        url: 'send.php',
        data: $('#portfolio__page-form').serialize(),
        success: function () {
          const homePopup = document.querySelector('.portfolio__popup-wrapper');
          homePopup.classList.remove('active')
          // homePopup.style.display = 'none';
  
          // console.log('ok');
        // popup.classList.add('show')
        }
      });
  
    });
  });