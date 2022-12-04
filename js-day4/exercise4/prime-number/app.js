// n < 100 тоо promt оор оруулна. n тоог анхны тоо эсэхийг шалгана.
// Example1: input: 1, output: true
// Example1: input: 6, output: false
// Example1: input: 11, output: true

// let n = window.prompt("Та 0-99 хүртэлх дурын тоог оруулна уу: ");
let n = 5;
let i = 1, prime = true;

if (n === 1) {
  console.log("false");
}else if (100 > n > 1) {
  for (i = 2; i < n; i++) {
    if (n % i == 0) {
      prime = false;
      break;
    }
  }
  if (prime) {
    console.log("true");
} else {
    console.log("false");
}
}else {
  console.log("false");
}