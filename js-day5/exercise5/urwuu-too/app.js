// 12345 -> 54321 n хувьсагчийн утгыг тоог урвуул.


function reversedNum(n) {
  n = n + ""
  return n.split("").reverse().join("");
}
console.log(Number(reversedNum(12345)));

// -------------------------------------------

// let numbers = 12345, space = "";
// for (let n = numbers.length; n => 0; n--) {
//   space += numbers[n]; 
// }console.log(space);