function powerGenerator() {
  var i = 0;

  return {
    next: function() {
      var ret = Math.pow(i, 2);

      i++;

      return ret;
    }
  };
}

var gen = powerGenerator();
console.log(gen.next(), gen.next(), gen.next()); // -> 0 1 4