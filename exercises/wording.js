function foo() {
  let name = "Pete";
  return function() {
    console.log(name);
  };
}

let printPete = foo();
printPete(); // Pete


/*
In this example, we first call foo and capture its return value, a function that logs the value of the name variable defined in the lexical scope of foo. 
At a minimum, the closure formed by the returned function's definition contains a pointer to name in its envelope. 
That pointer means that name's value won't get discarded when foo is done.

Though name is out of scope when foo finishes, the returned function has an envelope that contains a pointer to name. 
Thus, the function can still follow the pointer to the original variable, and find its current value, and that lets printPete() print `Pete'.

*/

function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2

/*


*/

