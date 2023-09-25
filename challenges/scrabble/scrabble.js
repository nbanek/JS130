/*
methods:
  (instance) score() computes word score and returns number
    empty word is 0 ([].length?)
    whitespace is 0 (trim?)
    null is 0 
  (class) score() same as instance method, therefore also creates an instance


*/










class Scrabble {
  static key = {
    ' ': 0,
    a: 1,
    e: 1,
    i: 1, 
    o: 1,
    u: 1,
    l: 1,
    n: 1,
    r: 1,
    s: 1,
    t: 1,
    d: 2,
    g: 2,
    b: 3,
    c: 3,
    m: 3,
    p: 3,
    f: 4,
    h: 4,
    v: 4,
    w: 4,
    y: 4,
    k: 5,
    j: 8,
    x: 8,
    q: 10,
    z: 10,
  }

  constructor(word) {
    if(!word) {
      this.word = '';
    } else {
      this.word = word.trim();
    }

  }

  score() {
    if(!this.word.length) return 0;
    let score = 0;
    this.word.toLowerCase().split('').forEach(char => {
      score += Scrabble.key[char];
    })
    return score;
  }

  static score(word) {
    return new Scrabble(word).score();
  }
}

module.exports = Scrabble;