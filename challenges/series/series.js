class Series {
  constructor(digits) {
    this.digits = digits;
  }

  toDigitArray() {
    return this.digits.split('');
  }

  slices(number) {
    if(number > this.digits.length) {
      throw new Error();
    }
    let digitArray = this.toDigitArray().map(char => Number(char));
    let digitCombo = [];

    for (let idx = 0; idx < digitArray.length - number + 1; idx += 1) {
      let slice = digitArray.slice(idx, idx + number);
      digitCombo.push(slice);
    }
    
    return digitCombo;
  }
  
}


module.exports = Series;