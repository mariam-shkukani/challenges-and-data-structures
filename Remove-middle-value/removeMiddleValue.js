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

module.exports = removeMiddleValue;