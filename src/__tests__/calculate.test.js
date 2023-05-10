import calculate from "../logic/calculate";

describe('Calculate.js File Testing', () => {
  test('Should be remove by pressing on AC', () => {
    const obj = {
      total: 20,
      next: 10,
      operation: '+',
    };
    const buttonName = "0";
    const finalResult = {
      total: 20,
      next: "100",
      operation: "+",
    };

    const result = calculate(obj, buttonName);
    expect(result).toEqual(finalResult);
  });

  test('Should be remove by pressing on AC', () => {
    const obj = {
      total: 20,
      next: 10,
      operation: '+',
    };
    const buttonName = "AC";
    const finalResult = {
      total: null,
      next: null,
      operation: null,
    };

    const result = calculate(obj, buttonName);
    expect(result).toEqual(finalResult);
  });

});