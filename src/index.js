import validator from './validator.js';

const form = document.querySelector("#credit-card");

const cardNumber = document.querySelector("#card-number");
const cardHolder = document.querySelector("#name-text");
const cardExpiration = document.querySelector("#valid-thru-text");
const cardCVV = document.querySelector("#cvv-text");

const cardNumberText = document.querySelector(".number-vl");
const cardHolderText = document.querySelector(".name-vl");
const cardExpirationText = document.querySelector(".expiration-vl");
const cardCVVText = document.querySelector(".cvv-vl");
const button = document.getElementById("button")

cardNumber.addEventListener("keyup", (e) => {
    if (!e.target.value) {
    cardNumberText.innerText = "#### #### #### 0000";
    } else {
        cardNumberText.innerHTML = e.target.value.replace("0000", masked());
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
    let digitValue = cardNumber.value
    let valid = validator.isValid(digitValue)
        if (digitValue === ""||
        digitValue === "0000000000000000" ||
        digitValue === "000000000000000"||
        digitValue === "00000000000000" ||
        digitValue.length <= 13
        ) {
            alert("Por favor, digite números válidos")
        }
        else if (valid === true) {
            alert("Cadastro realizado com sucesso")
            
        } else if (!valid) {
            alert("Número de cartão inválido")
            
        }

}



