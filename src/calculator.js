class Calculator {
  constructor() {
    this.value = 0;
  }

  set(num) {
    this.value = num;
  }

  clear() {
    this.value = 0;
  }

  add(num) {
    this.value += num;
  }

  subtract(num) {
    this.value -= num;
  }

  multiply(num) {
    this.value *= num;
  }

  divide(num) {
    if (num === 0) throw new Error('Cannot divide by 0');
    this.value /= num;
  }
}

module.exports = Calculator;
