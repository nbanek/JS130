/*
Problem: Determine the number of differences between two DNA strands at each point

input: two strings
output: a number

requirements:
  if the two strings are not of equal length, take the smallest string as the distance

Examples:
GAGCCTACTAACGGGAT
CATCGTAATGACGGCCT
^ ^ ^  ^ ^    ^^  //Hamming distance of 7

Data structure: strings/array

Algorithm:
  Determine the shorter DNA string length
  initialize counter
  Iterate over both DNA strings from 0 to this (length - 1)
    if string1[index] !== string2[index]
      increment counter
  return counter

Code:
*/

class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(comparison) {
    let [short, long] = [this.strand, comparison].sort((a, b) => a.length - b.length)
    let length = short.length;
    let counter = 0;
    for (let index = 0; index < length; index += 1) {
      if (short[index] !== long[index]) {
        counter += 1;
      }
    }
    return counter;
  }

}


module.exports = DNA;