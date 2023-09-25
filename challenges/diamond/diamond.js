/*
Problem:
  Print a diamond shape starting with A and a given letter as the widest point : ''. the back to A

  input: a character
  output: diamond to console

  requirements: 
    diamond starts with A : ''. given letter half way point : ''. then back to A
    first and last row have one A
    all other rows have exactly two letters
    diamond is symettric about the X and Y axis
    diamond can be a square with equal height and length

  Examples:
    A //to A

    A
   B B
  C   C // to C
   B B
    A

    A      // 4 + A + 0
   B B     // 3 + B + 1 + B
  C   C    // 2 + C + 3 + C
 D     D   // 1 + D + 5 + D
E       E  // 0 + E + 7 + E
 D     D   // 1 + D + 5 + D
  C   C    // 2 + C + 3 + C
   B B     // 3 + B + 1 + B
    A      // 4 + A + 0

 test case analysis:
  assume always get a letter : ''. and is uppercase : ''. no obvious outliers

 Data Structure: strings

 Algorithm:
  The width of the diamond will be ((letter range from A) * 2) + 1
    length is similar
  Iterate from 0 to ((letter range from A) * 2) + 1?
   A -> E char code 65 => 69


*/

class Diamond {
  static makeDiamond(letter) {
    this.setTop(letter);
    this.getIndexOrder();
    return this.printTriangle();
    
  }

  static printTriangle() {
    let printOut = ''
    this.indexOrder.forEach(key => {
      printOut += Diamond.rows[key];
    })
    return printOut;
  }

  static getRange(letter) {
    return (letter.charCodeAt(0) - 65);
  }

  static getIndexOrder() {
    let front = Object.keys(Diamond.rows);
    let back = front.slice().reverse().slice(1);
    Diamond.indexOrder = front.concat(back);

  }

  static setTop(letter) {
    let range = Diamond.getRange(letter);
    for (let index = 0; index <= range; index += 1) {
      if (index === 0) {
        Diamond.rows[index] = `${' '.repeat(range - index)}${String.fromCharCode(65 + index)}${' '.repeat(range - index)}\n`;
      } else {
        Diamond.rows[index] = `${' '.repeat(range - index)}${String.fromCharCode(65 + index)}${' '.repeat((index * 2) - 1)}${String.fromCharCode(65 + index)}${' '.repeat(range - index)}\n`;
      }
    }
  }

  static rows = {
    
  }

  static indexOrder = [];
}

console.log(Diamond.makeDiamond('E'))

module.exports = Diamond;