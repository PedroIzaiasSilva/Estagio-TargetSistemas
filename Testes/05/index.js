const originalString = "Hello Target";
let invertedString = "";

for (let i = originalString.length - 1; i >= 0; i--) {
  invertedString += originalString[i];
}

// Resultado
console.log(invertedString);
