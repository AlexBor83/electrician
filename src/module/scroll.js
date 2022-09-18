const scroll = () => {
  const body = document.querySelector('body');
  const upBtn = document.querySelector('.up');
  const table = document.querySelector('.table');
  const servicesSection = document.querySelector('.services-section');
  const mobileMenu = document.querySelector('.mobile-menu');
  const topMenu = document.querySelector('.top-menu');

  // стрелка вверх
  window.addEventListener('scroll', (e) => {
    let scrolY = window.pageYOffset;
    let СoordinateYShowUpBtn = table.clientHeight;
    let СoordinateYDisableUpBtn = servicesSection.clientHeight;

    if (scrolY >= СoordinateYShowUpBtn) {
      upBtn.style.display = 'block';
    } else {
      upBtn.style.display = 'none';
    }
  });

  //   плавный скрол ссылок и кнопки
  body.addEventListener('click', (e) => {
    if (
      e.target.matches('.top-menu ul li a') ||
      e.target.matches('.mobile-menu ul li a')
    ) {
      e.preventDefault();
      
      const item = e.target.closest('a');
      const itemId = item.getAttribute('href').substring(1);

      document.getElementById(itemId).scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    } else if (e.target.closest('.up')) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  });
};

export default scroll;
