//This file is a list of weird hoisting examples to learn from

var a = 1;
function b() {
  a = 10;
  return;
  function a() {} 
  
}
b();

console.log(a)  //logs 1 because a in the function scope does not refer to the global scoped a.

var a = 1;
function b() {
  a = 10;
  return;
  
}
b();

console.log(a)  //logs 10 because a in the function scope is referring to the global scoped a.\

function foo() {
  function bar() {
    return 3;
  }
  return bar();
  function bar() {
    return 8;
  }
}

console.log(foo()); //logs 8 because both bar functions in foo get hoisted in order of appereance and the second function gets called