function numberGenerator() {
  return {
    next: function() {
      return 42;
    }
  };
}

var gen = numberGenerator();
console.log(gen.next(), gen.next()); // -> 42 42