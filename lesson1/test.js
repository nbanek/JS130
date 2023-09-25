function mult(callback, time) {
  setInterval(() => {
    callback();
  }, time);
}

mult(() => console.log(1), 1000);