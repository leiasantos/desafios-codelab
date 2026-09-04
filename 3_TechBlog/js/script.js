const form = document.querySelector('.contact-form');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

const nameError = document.querySelector('#nameError');
const emailError = document.querySelector('#emailError');
const messageError = document.querySelector('#messageError');


const nameRegex = /^[A-Za-zÀ-ÿ]+(?:\s+[A-Za-zÀ-ÿ]+)+$/;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


form.addEventListener('submit', (event) => {

  event.preventDefault();

  let isValid = true;


  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';

  nameInput.classList.remove('input-error');
  emailInput.classList.remove('input-error');
  messageInput.classList.remove('input-error');


  const name = nameInput.value.trim();

  if (!nameRegex.test(name)) {

    nameError.textContent =
      'Digite seu nome completo.';

    nameInput.classList.add('input-error');

    isValid = false;
  }


  const email = emailInput.value.trim();

  if (!emailRegex.test(email)) {

    emailError.textContent =
      'Digite um e-mail válido.';

    emailInput.classList.add('input-error');

    isValid = false;
  }


  const message = messageInput.value.trim();

  if (message.length < 10) {

    messageError.textContent =
      'A mensagem deve ter pelo menos 10 caracteres.';

    messageInput.classList.add('input-error');

    isValid = false;
  }


  if (isValid) {

    alert('Formulário enviado com sucesso!');

    form.submit();
  }

});