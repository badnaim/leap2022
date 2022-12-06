// 12345 -> 54321 n хувьсагчийн утгыг тоог урвуул.


function reversedNum(n) {
  n = n + ""
  return n.split("").reverse().join("");
}
console.log(Number(reversedNum(12345)));

