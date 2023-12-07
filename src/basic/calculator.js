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
    const sum = this.value + num;
    if (sum > 100) {
      throw new Error('Value can not be greater than 100');
    }
    this.value = sum;
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
