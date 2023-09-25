function mybind(func, context, ...args) {
  return function(...args) {
    return func.apply(context);
  }
}

function myBind2(func, context) {
  return func.apply(context);
}

function printName() {
  return this.name;
}

let a = {
  name : 'a',
}

let nameOfA = mybind(printName, a)
console.log(nameOfA());
console.log(printName.call(a))

let nameOfB = myBind2(printName, a);
console.log(nameOfB)
console.log(nameOfB())