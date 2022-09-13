import { animate } from './helpers';

const modal = () => {
  const body = document.querySelector('body');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalCallback = document.querySelector('.modal-callback');
  const mobileMenu = document.querySelector('.mobile-menu');

  body.addEventListener('click', (e) => {
    if (e.target.closest('.callback-btn')) {
      e.preventDefault();
      modalOverlay.style.display = 'block';

      if(mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
      }    

      if (window.innerWidth > 768) {
        animate({
          duration: 500,
          timing(timeFraction) {
            return Math.pow(timeFraction, 2);
          },
          draw(progress) {
            modalCallback.style.opacity = progress;
          },
        });
      } else {
        modalCallback.style.opacity = 1;
      }
    } else if (
      !e.target.closest('.modal-callback') ||
      e.target.closest('.modal-close')
    ) {
      if (window.innerWidth > 768) {
        animate({
          duration: 500,
          timing(timeFraction) {
            return Math.pow(timeFraction, 2);
          },
          draw(progress) {
            modalCallback.style.opacity = 1 - progress;
          },
        });
        setTimeout(() => (modalOverlay.style.display = 'none'), 1000);
      } else {
        modalCallback.style.opacity = 0;
        modalOverlay.style.display = 'none';
      }
    }
  });
};

export default modal;
