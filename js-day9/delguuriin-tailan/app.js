// Дэлгүүрийн боруулалтын мэдэээл өгөгдсөн.
// productName, unitPrice, amount, price, casherId(Ajiltanii dugaar), date гэсэн мэдээлэл агуулна.
// Өгөгдлийг. өөрсдөө зохионо.  30 хүртэлх мөртэй.

const data = [
  {
    productName: "Cake",
    unitPrice: 5000,
    amount: 20,
    totalPrice: 100000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Chocolate",
    unitPrice: 3000,
    amount: 10,
    totalPrice: 30000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Tamhi",
    unitPrice: 4000,
    amount: 7,
    totalPrice: 28000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Colgate",
    unitPrice: 3500,
    amount: 3,
    totalPrice: 10500,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Icecream",
    unitPrice: 8000,
    amount: 8,
    totalPrice: 64000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Candy",
    unitPrice: 7000,
    amount: 30,
    totalPrice: 210000,
    casherId: 1,
    date: "2022-11-01",
  }
];

// Дараах даалгаварыг хийж гүйцэтгэнэ үү.
// 1. Нийт борлуулалтын дүнг тооцоолох.

  let sum = 0,
      totalPrice = 0;

  for (let i = 0; i < data.length; i++) {
    sum = data[i].unitPrice * data[i].amount;
    totalPrice += sum;
  }
console.log("Нийт борлуулалтын дүн: " + totalPrice + " төгрөг");

// 2. Нийт борлуулагдсан барааны тоог тооцоолох.

let totalAmount = 0;

for (i = 0; i < data.length; i++) {
  totalAmount += data[i].amount;
}
console.log("Нийт борлуулсан барааны тоо: " + totalAmount + " ширхэг");

// 3. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.

let sum1 = 0;
let max1 = data[0].totalPrice;
let max2 = data[0].totalPrice;
let max3 = data[0].totalPrice;
const sorted = data.sort((a, b) => a - b);

for (i = 0; i < data.length; i++) {
  if (data[i].totalPrice > max1) {
    max1 = data[i].totalPrice;
  }if (data[i].totalPrice > max2 && max2 !== max1) {
    max2 = data[i].totalPrice
  }if (data[i].totalPrice > max3 && max3 !== max2  && max3 !== max1) {
    max3 = data[i].totalPrice
  }
}console.log(max1, max2, max3);

// function maximum () {
//   let array = [5, 4, 2, 15, 10, 1];
//   let max = array[0];
//   for (i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
// }

// 4. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгэр/ харуулах.
// 5. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.
// 6. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгээр/ харуулах.
// 7. Хамгийн их зарагдсан /боруулалтын үнийн дүнгээр/ 10 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь харуулах.
// 8. Хамгийн их зарагдсан /боруулалтын тоо хэмжээгээр/ 5 барааны тоо хэмжээ нийт барааны тоо хэмжээнд эзлэх хувь харуулах.
// 9. Хамгийн бага зарагдсан /боруулалтын үнийн дүнгээр/ 5 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь харуулах.
// 10. Хамгийн бага зарагдсан /боруулалтын тоо хэмжээгээр/ 5 барааны тоо хэмжээ нийт барааны тоо хэмжээнд эзлэх хувь харуулах.
