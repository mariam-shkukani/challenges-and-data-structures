function MinimumValue(arr) {
  if (arr.length === 0) {
    return null; // أو أي معالجة حسب المطلوب
  }

  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

// أمثلة للتجربة:
console.log(MinimumValue([10, 15, 8, 6, 12])); // 6
console.log(MinimumValue([1, 3, 5, 7, 9]));    // 1
console.log(MinimumValue([7, 9, 13, 25, 5]));  // 5

