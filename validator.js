
const validator = {
  isValid(creditCardNumber) {
    let sum = 0;
    let shouldDouble = false;
    // loop through values starting at the rightmost side
    for (let i = creditCardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(creditCardNumber.charAt(i));

      if (shouldDouble) {
        if ((digit *= 2) > 9) digit -= 9;
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }
    return (sum % 10) === 0;
  },
  maskify(creditCardNumber) {
    let result = "";
    for (let index = 0; index < creditCardNumber.length - 4; index++) {
      result += "#";
    }
    // juntar os # com os 4 últimos caracteres da string 
    return result + creditCardNumber.slice(-4);
  }
}


export default validator;