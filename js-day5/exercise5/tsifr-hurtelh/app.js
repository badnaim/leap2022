// 1. Цифрүүд зайгаар тусгаарлагдана хэвлэгдэнэ.
// Input: 4
// Output: 0 1 2 3
let n = 4,
  space = "";

for (let i = 0; i < n; i++) {
  space += i + " ";
}
console.log(space);

console.log("---------------------");
// 2. Есөөс цифр хүртэл
// Есийн цифрээс өгөгдсөн цифр хүртэл нэг нэгээр нэг мөрөнд хэвлэ.
// Input: 5
// Output:
// 9
// 8
// 7
// 6
// 5

let x = 5;

for (let i = 9; i >= x; i--) {
  console.log(i);
}
