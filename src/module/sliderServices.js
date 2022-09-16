import Swiper from 'swiper';


const sliderServices = ()  => {
    const swiper = new Swiper('.swiper', {
        
        slidesPerView: 3,
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
      });

      

      const swiperBlock = document.querySelector('.swiper')
      

      swiperBlock.addEventListener('click', (e) => {
        console.log(e.target);
      })
}

export default sliderServices