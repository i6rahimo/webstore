function showMenu() {
    const burgerBtn = document.querySelector('.header__burger');
    const menu = document.querySelector(".header__wrapper");
    
    burgerBtn.addEventListener('click', ()=> {
      menu.classList.toggle('show')
      burgerBtn.classList.toggle('click')
    })
  }
  showMenu()
  
  
  

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
  
  function techPopup() {
    const btn = document.querySelector('.tech-btn');
    const popup = document.querySelector('.tech__popup-wrapper');  
    btn.addEventListener('click', ()=> {
      popup.classList.toggle('active')
    })
   
  }
  techPopup()
  