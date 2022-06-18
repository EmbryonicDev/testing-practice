const calculator = {
  error: 'Please enter two numbers',
  numberTrue: false,

  checkIfNumber(a, b) {
    if (a + b !== parseInt(a + b)) {
      this.numberTrue = false;
    } else {
      this.numberTrue = true;
    }
  },

  add(a, b) {
    this.checkIfNumber(a, b);
    if (this.numberTrue) {
      return a + b;
    } else {
      return this.error;
    }
  },

  subtract(a, b) {
    this.checkIfNumber(a, b);
    if (this.numberTrue) {
      return a - b;
    } else {
      return this.error;
    }
  }
};

module.exports = calculator;