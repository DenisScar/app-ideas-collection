// Seleção de elementos
const inputUserId = document.querySelector('#input-user-id');
const inputPassword = document.querySelector('#input-password');
const cancelBtn = document.querySelector('#cancel-btn');
const loginBtn = document.querySelector('#login-btn');
const msgInfo = document.querySelector('#msg-info');


// Funções



// Eventos
loginBtn.addEventListener('click', () => {
  const regExp = /^\w+$/;
  
  if(!regExp.test(inputUserId.value) || !regExp.test(inputPassword.value)) {
    msgInfo.innerText = 'ID e Senha não podem estar vazios';
    inputUserId.classList.remove('wrongInputError');
    inputPassword.classList.remove('wrongInputError');
    
    if(!regExp.test(inputUserId.value)) {
      inputUserId.classList.add('emptyInputError');
    } else {
      inputUserId.classList.remove('emptyInputError');
    }
    
    if(!regExp.test(inputPassword.value)) {
      inputPassword.classList.add('emptyInputError');
    }else {
      inputPassword.classList.remove('emptyInputError');
    }
  } else {
    inputUserId.classList.remove('emptyInputError');
    inputPassword.classList.remove('emptyInputError');
    
    if(inputUserId.value !== 'testuser') {
      msgInfo.innerText = 'Usuário inválido!';
      inputUserId.classList.add('wrongInputError');
    } else if(inputPassword.value !== 'mypassword') {
      inputUserId.classList.remove('wrongInputError');
      msgInfo.innerText = 'Senha inválida!';
      inputPassword.classList.add('wrongInputError');
    } else {
      msgInfo.innerText = '';
      inputUserId.classList.remove('wrongInputError');
      inputPassword.classList.remove('wrongInputError');
    }
  }
});

cancelBtn.addEventListener('click', () => {
  inputUserId.value = '';
  inputPassword.value = '';
  msgInfo.innerText = '';
  inputUserId.classList.remove('emptyInputError', 'wrongInputError');
  inputPassword.classList.remove('emptyInputError', 'wrongInputError');
});
