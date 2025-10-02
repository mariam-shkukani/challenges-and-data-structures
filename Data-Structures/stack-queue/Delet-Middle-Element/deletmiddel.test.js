
const StackWithDeleteMiddle = require('./stack-with-deletmiddle');

describe('StackWithDeleteMiddle', () => {
  test('deleting the middle element with odd number', () => {
    const s = new StackWithDeleteMiddle();
    [7, 14, 3, 8, 5].forEach(x => s.push(x));
    s.deleteMiddle();
    expect(s.toString()).toBe('Stack: Top -> 5 -> 8 -> 14 -> 7');
  });

  test('deleting the middle element with even number (lower middle)', () => {
    const s = new StackWithDeleteMiddle();
    [1, 2, 3, 4].forEach(x => s.push(x));
    s.deleteMiddle();
    expect(s.toString()).toBe('Stack: Top -> 4 -> 2 -> 1');
  });

  test('deleting from an empty stack', () => {
    const s = new StackWithDeleteMiddle();
    expect(s.deleteMiddle()).toBeNull();
    expect(s.isEmpty()).toBe(true);
  });

  test('deleting with one element', () => {
    const s = new StackWithDeleteMiddle();
    s.push(99);
    expect(s.deleteMiddle()).toBe(99);
    expect(s.isEmpty()).toBe(true);
  });
});
