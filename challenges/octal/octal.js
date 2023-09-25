/*
Problem: write a program that converts an octal to a decimal.

input: octal string
output: decimal number

requirements:
  invalid octals are treated as octal 0

Examples:
  233 # octal
= 2*8^2 + 3*8^1 + 3*8^0
= 2*64  + 3*8   + 3*1
= 128   + 24    + 3
= 155

Data structure:
  string -> array of digits -> number

Algorithm:
Convert string to individual digits
  while number > 0
    find remainder the string number from 10
    store digit in array
    subtract from original number
    dividie number by 10
Iterate through array
  multiple each value by corresponding 8^index
  sum all products

*/

class Octal {
  constructor(number) {
    this.number = number;
  }

  toDigits(number) {
    let digits = [];
    while(number > 0) {
      let remainder = number % 10;
      digits.push(remainder);
      let difference = number - remainder;
      number = difference / 10;
    }
    return digits;
  }

  isInValidOctal(digits) {
    return digits.some(digit => digit > 7)
  }

  toDecimal() {
    let digits = this.toDigits(this.number);
    if (this.isInValidOctal(digits)) {
      return 0;
    }
    digits = digits.map((digit, index) => {
      return digit * 8**index;
    })
    return digits.reduce((acc, cv) => acc + cv, 0)
  }
}

let a = new Octal('233');
console.log(a.toDecimal());

module.exports = Octal;