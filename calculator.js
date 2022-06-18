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
  },

  multiply(a, b) {
    this.checkIfNumber(a, b);
    if (this.numberTrue) {
      return a * b;
    } else {
      return this.error;
    }
  },

  divide(a, b) {
    if (b === 0) {
      return 'Cannot divide a number by 0'
    } else {
      this.checkIfNumber(a, b);
      if (this.numberTrue) {
        return a / b;
      } else {
        return this.error;
      }
    }
  }
};

module.exports = calculator;