// 1. Тоогоор илэрхийлсэн дүн буюу n-д утга онооход түүнд харгалзах үсгийг / A,B,C,D,F / хэвлэнэ.

let n = 20;

if (0 <= n && n < 60) {
  console.log("F");
} else if (60 <= n && n < 70) {
  console.log("D");
} else if (70 <= n && n < 80) {
  console.log("C");
} else if (80 <= n && n < 90) {
  console.log("B");
} else if (90 <= n && n <= 100) {
  console.log("A");
} else {
  console.log("Buruu dun oruulsan bn.");
}

// 2. сарын дугаар буюу n - 1<=n=>12-д хувьсагчид байх утгын дагуу тухайн сарын өдрийн тоог хэвлэнэ.хэрэв 2 дугаар сар бол 28 or 29 гэж хэвлэнэ

let jan = 31,
  feb = "28 or 29",
  march = 31,
  april = 31,
  may = 31,
  june = 30,
  july = 31,
  aug = 31,
  sep = 30,
  oct = 31,
  nov = 30,
  dec = 31;

let m = 5;

if (m === 1) {
  console.log(jan);
} else if (m == 2) {
  console.log(feb);
} else if (m === 3) {
  console.log(march);
} else if (m === 4) {
  console.log(april);
} else if (m === 5) {
  console.log(may);
} else if (m === 6) {
  console.log(june);
} else if (m === 7) {
  console.log(july);
} else if (m === 8) {
  console.log(aug);
} else if (m === 9) {
  console.log(sep);
} else if (m === 10) {
  console.log(oct);
} else if (m === 11) {
  console.log(nov);
} else if (m === 12) {
  console.log(dec);
} else {
  console.log("1-12 sariig songono uu");
}

// 3. Өгөгдсөн эерэг тоо нь 3-ын үржвэр эсвэл 7-ын үржвэр эсэхийг шалгана уу

let w = 3,
  firstW = w % 3,
  secW = w % 7;

if (firstW === 0 && secW === 0) {
  console.log("3 ba 7-iin urjwer mun");
} else {
  console.log("3 ba 7-iin urjwer bish");
}

if (firstW === 0 || secW === 0) {
  if (firstW === 0 && secW !== 0) {
    console.log("3-iin urjwer");
  } else if (firstW !== 0 && secW === 0) {
    console.log("7-iin urjwer");
  } else if (firstW === 0 && secW === 0) {
    console.log("3 ba 7-iin urjwer mun");
  }
} else {
  console.log("3 ba 7-iin urjwer bish");
}

// 4. n  хувьсагчын утгын дагуу эерэг эсвэл сөрөгийг олж хэвлэнэ.
// negative
// positive

let k = -10,
  ki = Math.sign(k);

// console.log(Math.sign(-2));

if (ki) {
  if (ki === -1) {
    console.log("negative");
  } else {
    console.log("positive");
  }
}

// 5. weight, height гэсэн 2 хувьсагчид утга оруулахад тухайн хэмжээнээс хамааран биеийн жингийн индексийг тооцож тухайн индекс-д харгалзах утгыг хэвлэнэ.
// Жингийн дутагдалтай
// Эрүүл
// Илүүдэл жинтэй
// Хэт таргаллалттай

let weight = 60,
  height = 180,
  index = weight / (height / 100) ** 2;

if (index < 18.5) {
  console.log("jingiin dutagdaltai as fuk");
} else if (18.5 <= index && index > 25) {
  console.log("Eruul bna");
} else if (25 <= index && index > 30) {
  console.log("targan bna");
} else if (30 <= index && index > 40) {
  console.log("het ih targan bn");
} else {
  console.log("error");
}
console.log(index);
// 6. Өгөгдсөн тооны тэгш эсвэл сондгой болохыг хэвлэж харуулна уу
// 7. Өгөгдсөн тооны эерэг тоо эсвэл сөрөг тоо болохыг шалгаад хэвлэж харуулна уу
// 8. Нас тооцоолох бодлого: yearOfBirth гэсэн хувьсагчид гараас төрсөн онийг ав. Тухайн оноос тухайн хүний насыг нь бодож гаргаад үр дүнгээ old гэсэн хувьсагчид оноо. Насанд нь харгалзах утгыг хэвлэ.
// 0 <= old <= 1 үед "Infant"
// 1 < old <= 3 үед "Toddler"
// 3 < old <= 5 үед "Preschool"
// 5 < old <=12 үед "Gradeschooler"
// 12 <old <= 18 үед "Teen"
// 18 < old <=21 үед "Young adult"
// 21 < old үед "Adult"
