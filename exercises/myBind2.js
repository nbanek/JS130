function myBind(func, ctx, ...partialArgs) {
  return function(...args) {
    let totalArgs = partialArgs.concat(args);

    return func.apply(ctx, totalArgs);
  }
}

function add(a, b) {
  return a + b;
}

let addFive = myBind(add, null, 5)
console.log(addFive(2))