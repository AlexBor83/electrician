import { animate } from './helpers';

const mobileMenu = () => {
  if (window.innerWidth > 991) {
    return;
  } else {
    const body = document.querySelector('body');
    const mobmenuBtnOpen = document.querySelector('.mob-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobmenuBtnClose = document.querySelector('.mobile-menu-close');
    const mobileMenuLinks = mobileMenu.querySelectorAll('ul>li>a');
    
    const handelMobileMenu = () =>{
        mobileMenu.classList.toggle('open');
    };

    body.addEventListener('click', (e) => {
      if(e.target.closest('.mob-menu-btn')) {
        handelMobileMenu();

      } else if(e.target.classList.contains('overlay') ||e.target.closest('.mobile-menu-close')) {
        handelMobileMenu();
      }

      mobileMenuLinks.forEach(link => {
        if(e.target === link) {
            // e.preventDefault();
            handelMobileMenu();            
        }
      });      
    });
  }
};

export default mobileMenu;
