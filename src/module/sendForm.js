const sendForm = () => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const formBlock = document.getElementById('callback');
  const form = formBlock.querySelector('form');
  const inputName = formBlock.querySelector('.name');
  const inputTel = formBlock.querySelector('.tel');

  const dataForm = {};
  const formElements = form.querySelectorAll('input');

  const statusBlock = document.createElement('div');
  const loadText = 'Загрузка..';
  const errorText = 'Ошибка..';
  const succsessText = 'Данные отправлены';

  // <input type="submit" class="button btn feedback" value="Отправить" />

  inputName.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^А-Яа-я]/g, '');
  });

  inputTel.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^\d/+]/, '');
  });

  const validete = (list) => {
    let isError = false;

    if (inputName.value.trim().length >= 2) {
      inputName.style.border = 'none';
    } else {
      isError = true;
      alert('Введите Ваше Имя на русском не короче двух букв');
      inputName.style.border = '2px solid red';
    }

    if (inputTel.value.trim().length >= 6 && inputTel.value.length <= 16) {
      inputTel.style.border = 'none';
    } else {
      isError = true;
      alert('В ведите номер телефона не короче 6 символов и не длиннее 16');
      inputTel.style.border = '2px solid red';
    }
    return isError;
  };

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json());
  };

  const submitForm = () => {
    statusBlock.textContent = loadText;
    form.append(statusBlock);

    if (!validete(formElements)) {
      dataForm.name = inputName.value;
      dataForm.tel = inputTel.value;

      sendData(dataForm).then((data) => {
        statusBlock.textContent = succsessText;

        const cleanStatusBlock = () => {
          statusBlock.textContent = '';
        };

        const closeForm = () => {
            modalOverlay.style.display = 'none';
        };

        setTimeout(cleanStatusBlock, 1500)
        setTimeout(closeForm, 2000)

        formElements.forEach(input => {
            input.value = ''
        })
      })
      .catch(() => {
        statusBlock.textContent = errorText;        
      })
    } else {
        statusBlock.textContent = '';
        alert('Данные не валидны'); 
    }
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();   
    submitForm();
  });
};

export default sendForm;
