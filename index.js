import validator from './validator.js';
//import maskify from './validator.js';

const cardNumber = document.querySelector("#card-number");
const cardHolder = document.querySelector("#name-text");
const cardExpiration = document.querySelector("#valid-thru-text");
const cardCVV = document.querySelector("#cvv-text");
const button = document.querySelector(".button-register");

const cardNumberText = document.querySelector(".number-vl");
const cardHolderText = document.querySelector(".name-vl");
const cardExpirationText = document.querySelector(".expiration-vl");
const cardCVVText = document.querySelector(".cvv-vl");
const register = document.querySelector(".register")


cardNumber.addEventListener("keyup", (e) => {
  if (!e.target.value) {
    cardNumberText.innerText = "#### #### #### 0000";
  } else {
    cardNumberText.innerHTML = e.target.value;
  }

})

cardHolder.addEventListener("keyup", (e) => {
  if (!e.target.value) {
    cardHolderText.innerHTML = "TITULAR";
  } else {
    cardHolderText.innerHTML = e.target.value.toUpperCase();
  }
})

cardExpiration.addEventListener("keyup", (e) => {
  if (!e.target.value) {
    cardExpirationText.innerHTML = "mm/aa";
  } else {
    const valuesOfInput = e.target.value.replace("/", "");

    if (e.target.value.length > 2) {
      e.target.value = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
      cardExpirationText.innerHTML = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
    } else {
      cardExpirationText.innerHTML = valuesOfInput;
    }
  }
})

cardCVV.addEventListener("keyup", (e) => {
  if (!e.target.value) {
    cardCVVText.innerHTML = "123";
  } else {
    cardCVVText.innerHTML = e.target.value;
  }
})


button.addEventListener("click", validation)

function validation(e){
  e.preventDefault()
  const digitValue = cardNumber.value
  const valid = validator.isValid(digitValue)
  if (digitValue === ""||
        digitValue === "0000000000000000" ||
        digitValue === "000000000000000"||
        digitValue === "00000000000000" ||
        digitValue === "0000000000000" ||
        digitValue === "000000000000" ||
        digitValue.length <= 10
  ) {
    alert("Por favor, digite números válidos")
  }
  else if (valid === true) {
    register.innerHTML = `Cartão de final ${validator.maskify(digitValue)} cadastrado com sucesso`;
    cardNumber.value = "";
    cardCVV.value = "";
    cardHolder.value = "";
    cardExpiration.value = "";
    cardNumberText.innerHTML = `${validator.maskify(digitValue)}`;
  } else if (!valid) {
    register.innerHTML = "Número de cartão inválido, tente novamente!"
  }

}