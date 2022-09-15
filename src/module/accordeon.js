const accordeon = () => {
  const body = document.querySelector('body');
  const accordeon = document.querySelector('.accordeon');
  const elements = accordeon.querySelectorAll('.element');

  accordeon.addEventListener('click', (e) => {
   
    elements.forEach((element, i) => {
      if (e.target.closest('.element')) {
        
        if (elements[i].classList.contains('active')) {
          elements[i].classList.remove('active');
        } else if (e.target.closest('.element') === elements[i]) {
          elements[i].classList.toggle('active');
        }
      }
    });
  });
};

export default accordeon;
