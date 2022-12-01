// Хувьсагч
// 1. 4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол.:
// a=85 b=75 c=96 d=69
// 80-аас их тоонуудын нийлбэрийг: 181

let a=85, 
  b=75, 
  c=96, 
  d=69;

let sum1 = a + b + c + d,
sum2 = a + c;

console.log(sum2);



// if (a > 80) {
//   if (b > 80) {
//     console.log(true);
//   }else {
//     if (c > 80){
//       if (d > 80){
//         console.log(a);
//       }else {
//         console.log(a + c);
//       }
//     }else {
//       console.log(false);
//     }
//   }
// }else {
//   console.log(false);
// }



if (a > 80) {
  if (b > 80) {
    if (c > 80){
      if (d > 80){
        console.log(a + b + c + d);
      }else {
        console.log(a + b + c);
      }
    }else {
      if (c > 80){
        if (d > 80){
          console.log(a + b + d);
        }else {
          if (d > 80){
            console.log(a + d);
          }else {
            console.log(a);
          }
        }
      }
    }
  }else {
    if (c > 80){
      if (d > 80){
        console.log(a + c + d);
      }else {
        if (d > 80){
          console.log(a + d);
        }else {
          console.log(a);
        }
      }
    }else {
      if (c > 80){
        if (d > 80){
          console.log(a + c + d);
        }else {
          if (d > 80){
            console.log(a + d);
          }else {
            console.log(a);
          }
        }
      }
    }
  }
}else {
  
}

// 2. 4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 5-аас бага тоонуудын үржвэрийг ол. 5-аас бага тоо ядаж 1 байгаа:
// a=3 b=7 c=2 d=4
// 5-аас бага тоонуудын үржвэр: 24

