const emailInput = document.querySelector("#input__email")
const passwordInput = document.querySelector("#input__senha")
const button = document.querySelector("#btn__default")

function validateEmail(email){
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

function validatePassword(password){
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
  return regex.test(password)
}

button.addEventListener("click", function(){

  const email = emailInput.value
  const password = passwordInput.value

  if(!validateEmail(email)){
    alert("Digite um email válido")
    return
  }

  if(!validatePassword(password)){
    alert("A Senha deve ter 8 caracteres, maiúscula, minúscula e número")
    return
  }

  alert("Login válido!")

})