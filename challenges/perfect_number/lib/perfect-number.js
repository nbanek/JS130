/*
Problem: Write a program that can tell whether a number is perfect, abundant, or deficient.

input: number
output: string 

requirements: 
  number cannot be negative
  Divisors does not include the number itself
  if all divisors of a number sum to the number it is perfect
    if sum is less than number then it is deficient
    if sum is greater than number then it is abundant
  prime numbers are always deficient
  zero cannot be any as it has no divisors

Examples:
6 is a perfect number since its divisors are 1, 2, and 3, and 1 + 2 + 3 = 6.

Data structure: array to store divisors

Algorithm:
  Iterate from 1 to number - 1
    check if the current iteration divides equally into the number
      if divides equally, push to array
  Sum array
  return appropriate string for >, <, or = to number

Code:
*/

class PerfectNumber {

  static classify(number) {

    if (number <= 1) {
      throw new Error('Number must be greater than zero to determine result');
    }

    let sum = 0;
    for (let index = 1; index <= number / 2; index += 1) {
      if (number % index === 0) {
        sum += index;
      }
    }
  

    if (sum > number) {
      return 'abundant';
    } else if (sum < number) {
      return 'deficient';
    } else if (sum === number) {
      return 'perfect';
    }
    }
  }

module.exports = PerfectNumber;