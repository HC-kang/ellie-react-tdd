const Calculator = require('../calculator.js');

describe('Calculator', () => {
  describe('Set', () => {
    it('should set the value', () => {
      const calculator = new Calculator();
      calculator.set(5);
      expect(calculator.value).toBe(5);
    });

    it('should set the value to 0 if no value is passed', () => {
      const calculator = new Calculator();
      expect(calculator.value).toBe(0);
    });
  });

  describe('Clear', () => {
    it('should set the value to 0', () => {
      const calculator = new Calculator();
      calculator.set(5);
      calculator.clear();
      expect(calculator.value).toBe(0);
    });
  });

  describe('Add', () => {
    it('should add the value', () => {
      const calculator = new Calculator();
      calculator.set(5);
      calculator.add(5);
      expect(calculator.value).toBe(10);
    });
  });

  describe('Subtract', () => {
    it('should subtract the value', () => {
      const calculator = new Calculator();
      calculator.set(5);
      calculator.subtract(5);
      expect(calculator.value).toBe(0);
    });
  });

  describe('Multiply', () => {
    it('should multiply the value', () => {
      const calculator = new Calculator();
      calculator.set(5);
      calculator.multiply(5);
      expect(calculator.value).toBe(25);
    });
  });

  describe('Divide', () => {
    it('should divide the value', () => {
      const calculator = new Calculator();
      calculator.set(5);
      calculator.divide(5);
      expect(calculator.value).toBe(1);
    });

    it('should throw an error if dividing by 0', () => {
      const calculator = new Calculator();
      calculator.set(5);
      expect(() => calculator.divide(0)).toThrow('Cannot divide by 0');
    });
  });
});
