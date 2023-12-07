const Calculator = require('../calculator.js');

describe('Calculator', () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  })
  it('inits with 0', () => {
    expect(cal.value).toBe(0);
  });

  describe('Set', () => {
    it('should set the value', () => {
      cal.set(5);
      expect(cal.value).toBe(5);
    });

    it('should set the value to 0 if no value is passed', () => {
      expect(cal.value).toBe(0);
    });
  });

  describe('Clear', () => {
    it('should set the value to 0', () => {
      cal.set(5);
      cal.clear();
      expect(cal.value).toBe(0);
    });
  });

  describe('Add', () => {
    it('should add the value', () => {
      cal.set(5);
      cal.add(5);
      expect(cal.value).toBe(10);
    });
  });

  describe('Subtract', () => {
    it('should subtract the value', () => {
      cal.set(5);
      cal.subtract(5);
      expect(cal.value).toBe(0);
    });
  });

  describe('Multiply', () => {
    it('should multiply the value', () => {
      cal.set(5);
      cal.multiply(5);
      expect(cal.value).toBe(25);
    });
  });

  describe('Divide', () => {
    it('should divide the value', () => {
      cal.set(5);
      cal.divide(5);
      expect(cal.value).toBe(1);
    });

    it('should throw an error if dividing by 0', () => {
      cal.set(5);
      expect(() => cal.divide(0)).toThrow('Cannot divide by 0');
    });
  });
});
