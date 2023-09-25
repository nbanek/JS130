/*
Problem:
  Given a set of numbers, up until a number(non inclusive) determine the sum of all numbers
  that are multiples of any number in the set. If no set is providided, use 3 and 5 as default.

  input:
  output:
*/

class SumOfMultiples {
  constructor(...args) {
    if (!args.length) {
      this.set = [3, 5];
    } else {
      this.set = [...args];
    }

  }

  static to(number) {
    return new SumOfMultiples().to(number);
  }

  hasMultiple(number) {
    return this.set.some(item => number % item === 0);
  }

  to(number) {
    let sum = 0; 
    for (let index = 0; index < number; index += 1) {
      if(this.hasMultiple(index)) {
        sum += index;
      }
    }
    return sum;
  }
}

module.exports = SumOfMultiples;