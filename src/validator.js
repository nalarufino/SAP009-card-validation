
const validator = {
  isValid(creditCardNumber){
    const arr = (creditCardNumber + '').split('').reverse().map(x => parseInt(x));
    const lastDigit = arr.splice(0, 1)[0];
    let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
    sum += lastDigit;
    return sum % 10 === 0;
  },

  maskify(creditCardNumber) {
    const maskNum = [];
    for (let i = 0; i < creditCardNumber.length; i++) {
      if (i >= creditCardNumber.length - 4) {
        maskNum.push(creditCardNumber[i]);
      }
    }
    const masked = maskNum.join(""); //O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string
    return masked;
  },
}
export default validator;

