// 1. 10 хүртэлх натурал тоог хэвлэх программ бич
let i = 0,
  n = "";

while (i < 10) {
  i += 1;
  n += i + " ";
}
console.log(n);

console.log("-------------------");
// 2. 10 хүртэлх натурал тооны сондгой тоонуудыг хэвлэх программ бич
let i1 = 0,
  n1 = "";

for (let i1 = 0; i1 <= 10; i1++) {
  if (i1 % 2 != 0) {
    n1 = i1 + " ";
    console.log(n1);
  }
}

console.log("-------------------");
// 3. 10 хүртэлх натурал тооны тэгш тоонуудыг хэвлэх программ бич
let i2 = 0,
  n2 = "";

for (let i2 = 0; i2 <= 10; i2++) {
  if (i2 % 2 == 0) {
    n2 = i2 + " ";
    console.log(n2);
  }
}

console.log("-------------------");
// 4. 100 хүртэлх натурал тооны нийлбэрийг олох программ бич
let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

console.log("-------------------");
// 5. N хүртэлх натурал тооны хэвлэх болон тэдгээр тооны нийлбэрийг олох программ бич
let N = 7,
  x = 0,
  sum1 = 0;

while (x < N) {
  x++;
  sum1 += x;
}
console.log(sum1);

console.log("-------------------");
// 6. Өгөгдсөн тоог анхны мөн эсэхийг олох программ бич
let rNumber = 4,
  prime = true;

if (rNumber === 0 || rNumber === 1) {
  console.log("not prime number");
}else if (100 > rNumber || rNumber > 1) {
  for (i = 1; i < rNumber; i++) {
    if (rNumber % i !== 0) {
      console.log("prime number");
      break;
    } else {
      console.log("not prime number");
    }
  }
}else {
  console.log("not prime number");
}

// if (rNumber === 2 ) {
//   console.log("false");
// }else if (100 > rNumber && rNumber > 2) {
//   for (i = 0; i < rNumber; i++) {
//     if (rNumber % i == 0) {
//       prime = false;
//     }
//   }
//   if (prime) {
//     console.log("true");
//   }else {
//     console.log("false");
//   }
// }else {
//   console.log("false");
// }

// console.log("-------------------");
// 7. Өгөгдсөн интервал дахь анхны тоог хэвлэх программ бич

// if (randomNumber === 1 ) {
//   console.log("false");
// }else if (100 > n && n > 1) {
//   for (i = 0; i < randomNumber; i++) {
//     if (randomNumber % i == 0) {
//       prime = false;
//       break;
//     }
//   }
//   if (prime) {
//     console.log("true");
//   }else {
//     console.log("false");
//   }
// }else {
//   console.log("false");
// }

console.log("-------------------");
// 8. N тооны факториал олох программ бич
let Number = -1;

if (Number < 0) {
  console.log("does't exist");
}else if (Number === 0) {
  console.log("1");
}else {
  let fact = 1;
  for (i = 1; i <= Number; i++) {
    fact *= i;
  }console.log(fact);
}

console.log("-------------------");
// 9. Өгөгдсөн тооны цифрүүдийн нийлбэрийг олох программ бич
// let Number1 = 5, sum2 = 0;

// for (i = 0; i <= Number1; i++) {
//   sum2 += i;
// }console.log(sum2);

let Number1 = 12345, 
    sum2 = 0, 
    char = toString(Number1),
    chara = char.length,
    q = Number1(char.charAt(i));
    

for (i = 0; i < chara; i++) {
  char = toString(Number1);
  chara = char.length;
  q = Number1(char.charAt(i));
  sum2 += q;
}console.log(sum2);

console.log("-------------------");
// 10. N хүртэлх тооны сондгой тоо хэвлэх болон түүний нийлбэрийг олох программ бич
// 11. N хүртэлх тооны тэгш тоо хэвлэх болон түүний нийлбэрийг олох программ бич
// 12. Өгөгдсөн  эерэг тооны урвууг хэвлэх программ бич 123 <=> 321
// 13. Өгөдсөн тооны цифрүүдийг үгээр хэвлэх программ бич
