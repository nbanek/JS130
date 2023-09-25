/*
Problem: Write a program to determine whether a triangle is equilateral, isosceles, or scalene.

An equilateral triangle has all three sides the same length.
An isosceles triangle has exactly two sides of the same length.
A scalene triangle has all sides of different lengths.

Requirements:
A valid triangle the length of all sides must be greater than 0, the sum of the lengths of any two sides must be
greater than the length of the third side.

Test Case Analysis:
Triangle class that accepts three numbers for the constructor
methods: 
  kind(), returns a string of the triangle type.
  error is thrown if triangle sides are invalid
Code:
*/

class Triangle {
  constructor(side1, side2, side3) {
    if(this.invalidTrangle(side1, side2, side3)) {
      throw new Error('Invalid Triangle')
    }
    [this.short, this.med, this.long] = [...arguments].sort((a, b) => a - b);
  }

  invalidTrangle(side1, side2, side3) {
    if (
      side1 + side2 <= side3 ||
      side2 + side3 <= side1 ||
      side1 + side3 <= side2
      ) {
        return true;
      }
      return false;
  }

  kind() {
    if (this.short === this.med && this.med === this.long) {
      return 'Equilateral';
    } else if (
      this.short === this.med ||
      this.med === this.long ||
      this.short === this.long
      ) {
        return 'Isosceles';
      } else {
        return 'scalene';
      }
  }
}

let tri = new Triangle(2, 3, 4);
console.log(tri.kind())
module.exports = Triangle;

