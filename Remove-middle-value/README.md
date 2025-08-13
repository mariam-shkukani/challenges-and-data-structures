# Challenge 04: Remove Middle Value

## Description

Write a function that removes the value at the middle index of an array without using built-in methods, then returns the modified array.

## Whiteboard

![Whiteboard](./removemiddle.png)

## code

- javascript
function removeMiddleValue(arr) {
  let length = arr.length;
  if (length === 0) return arr;
  let middleIndex = Math.floor(length / 2);
  for (let i = middleIndex; i < length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = length - 1;
  return arr;
}
