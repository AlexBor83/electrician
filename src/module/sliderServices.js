import Swiper from 'swiper/bundle';

const sliderServices = () => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    // spaceBetween: 30,
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
      },

      1023: {
        slidesPerView: 3,
      },
    },

    //упрравление слйдером с клавиатуры
    keyboard: {
      //включить управление
      enabled: true,

      //управление когда слайдер видим
      onlyInViewport: true,

      //добавить в управление PageUp b PageDown
      pageUpDown: true,
    },
  });
};

export default sliderServices;
