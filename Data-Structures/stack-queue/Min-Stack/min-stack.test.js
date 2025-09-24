
const MinStack = require('./minstack');

describe('MinStack', () => {
  test('retrieves minimum element in the stack', () => {
    const ms = new MinStack();
    ms.push(15);
    ms.push(7);
    ms.push(12);
    ms.push(3);
    expect(ms.getMin()).toBe(3);
  });

  test('popping elements updates minimum correctly', () => {
    const ms = new MinStack();
    ms.push(15);
    ms.push(7);
    ms.push(12);
    ms.push(3);
    expect(ms.pop()).toBe(3);
    expect(ms.getMin()).toBe(7);
  });

  test('pushing elements updates minimum correctly', () => {
    const ms = new MinStack();
    ms.push(15);
    ms.push(7);
    ms.push(12);
    expect(ms.getMin()).toBe(7);
    ms.push(2);
    expect(ms.getMin()).toBe(2);
  });
});
