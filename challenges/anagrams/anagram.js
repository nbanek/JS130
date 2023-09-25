/*

methods:
  match() returns an array of all anagrams
    if given word === word in array, then invalid
    if given word as sorted === word  in array as sorted, all undercase, then is valid
    filter the given array under these condistions

*/

class Anagram {
  constructor(word) {
    this.word = word;
  }

  sortWord(word) {
    return word.toLowerCase().split('').sort().join('');
  }

  match(array) {
    let matches = [];
    let givenWord = this.sortWord(this.word);

    matches = array.filter((word) => {
      let arrayWord = this.sortWord(word);
      if (this.word.toLowerCase() !== word.toLowerCase() && givenWord === arrayWord) return true;
    })


    
    return matches;
    
  }

}


module.exports = Anagram;