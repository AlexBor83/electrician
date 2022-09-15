const sliderTop = () => {
  // слайдер - top-slider
  // слайды - item
  // Активный слайд - item-active
  //   dot dot-active

  document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.top-slider');
    const slides = slider.querySelectorAll('.item');
   

    if (!slider || !slides) {
      return;
    }

    const blockDots = slider.querySelector('.dots');

    let dots;
    const timerInterval = 3000;
    let curentSlide = 0;
    let interval;

    const pushDots = () => {
        for (let i = 0; i < slides.length; i++) {
          blockDots.insertAdjacentHTML('beforeend', `<li class="dot"></li>`);
        }
        dots = document.querySelectorAll('.dot');
        dots[0].classList.add('dot-active');
      };

    const prevSlide = (elems, index, strClass) => {
      elems[index].classList.remove(strClass);
    };

    const nextSlide = (elems, index, strClass) => {
      elems[index].classList.add(strClass);
    };

    const autoSlide = () => {
      prevSlide(slides, curentSlide, 'item-active');
      prevSlide(dots, curentSlide, 'dot-active');

      curentSlide++;

      if (curentSlide > slides.length - 1) {
        curentSlide = 0;
      }

      nextSlide(slides, curentSlide, 'item-active');
      nextSlide(dots, curentSlide, 'dot-active');
    };

    const playSlide = () => {
      interval = setInterval(autoSlide, timerInterval);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    slider.addEventListener('click', (e) => {
      if (!e.target.matches('.dot')) {
        return;
      }

      prevSlide(slides, curentSlide, 'item-active');
      prevSlide(dots, curentSlide, 'dot-active');

      if (e.target.classList.contains('dot')) {
        dots.forEach((dot, index) => {
          if (e.target === dot) {
            curentSlide = index;
          }
        });
      }
      nextSlide(slides, curentSlide, 'item-active');
      nextSlide(dots, curentSlide, 'dot-active');
    });

    slider.addEventListener(
      'mouseenter',
      (e) => {
        if (e.target.matches('.dots')) {
          stopSlide();
        }
      },
      true
    );

    slider.addEventListener(
      'mouseleave',
      (e) => {
        if (e.target.matches('.dots')) {
          playSlide();
        }
      },
      true
    );

    pushDots();
    playSlide();
  });
};

export default sliderTop;
