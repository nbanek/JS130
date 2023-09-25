function forEach(array, callback, thisArg) {
  for (let index = 0; index < array.length; index += 1) {
    callback(array[index], index, array);
  }
}

forEach(["a", "b", "c"], (value, index, arr) => {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});