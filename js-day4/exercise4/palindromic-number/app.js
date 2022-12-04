// prompt ашиглан n -д утга орууlахад palindrome тоо мөн эсэхийг шалгах.
// Example1 : input: 111, output: true
// Example2 : input: 110, output: false
// Example3 : input: 101, output: true

// let a = window.prompt("palindromic too oruulna uu: ");
let a = 111;

if (0 <= a <= 9) {
  console.log(true);
} else if (11 <= a <= 99) {
  if (a.charAt(0) == a.charAt(1)) {
    console.log(true);
  } else {
    console.log(flase);
  }
} else if (101 <= a <= 999) {
  if (a.charAt(0) == a.charAt(2)) {
    console.log(true);
  } else if (a.charAt(0) == a.charAt(1) == a.charAt(2)) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log(false);
}