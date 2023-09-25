/*


Algorithm:
  Get a number from input
  General formula
  {
    1000 : M,
    500: D,
    100 : C,
    50 : L,
    10 : X,
    5: V.
    1: I,
  }
   
  Example number is 33
    first digit greater than 5? 
      digit % 

*/

class RomanNumeral {
  static ROMAN_NUMERALS = 
  {
    M: 1000,
    CM: 900,
     D: 500, // 
    CD: 400, // 400 + 44 CD
     C: 100, // 
    XC: 90,
     L: 50, // 
    XL: 40, // 40 + 4 XL
     X: 10, //
    IX: 9,
     V: 5, // 
    IV: 4,
     I: 1  // 
  }

  constructor(number) {
    this.number = number;
  }

  toRoman() {
    let romans = [];
    let number = this.number;
    Object.keys(RomanNumeral.ROMAN_NUMERALS).forEach(key => {
      if ((RomanNumeral.ROMAN_NUMERALS[key] / number) <= 1) {
        let big = number - (number % RomanNumeral.ROMAN_NUMERALS[key]);
        number = (number % RomanNumeral.ROMAN_NUMERALS[key]);
        while(big) {
          romans.push(key);
          big -= RomanNumeral.ROMAN_NUMERALS[key];
        }
      }
    })
    return romans.join('');
  }
}


module.exports = RomanNumeral;