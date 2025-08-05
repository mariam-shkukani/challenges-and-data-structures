function ReverseCharacters(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// أمثلة:
console.log(ReverseCharacters("javascript")); // tpircsavaj
console.log(ReverseCharacters("elyts")); // style
console.log(ReverseCharacters("nadroj")); // jordan
console.log(ReverseCharacters("abc564")); // 465cba