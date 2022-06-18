const calculator = {
  add(a, b) {
    if (a + b !== parseInt(a + b)) {
      return 'Please enter two numbers'
    } else {
      return a + b;
    }
  }
};

module.exports = calculator;