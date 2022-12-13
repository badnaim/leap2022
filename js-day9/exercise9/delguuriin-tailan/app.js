// Дэлгүүрийн боруулалтын мэдэээл өгөгдсөн.
// productName, unitPrice, amount, price, casherId(Ajiltanii dugaar), date гэсэн мэдээлэл агуулна.
// Өгөгдлийг. өөрсдөө зохионо.  30 хүртэлх мөртэй.

const data = [
  {
    productName: "Bakery",
    unitPrice: 5000,
    amount: 200,
    totalPrice: 0,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Chocolate",
    unitPrice: 3040,
    amount: 18,
    totalPrice: 0,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Tamhi",
    unitPrice: 3407,
    amount: 20,
    totalPrice: 0,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Colgate",
    unitPrice: 3340,
    amount: 3,
    totalPrice: 0,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Icecream",
    unitPrice: 36800,
    amount: 8,
    totalPrice: 0,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Candy",
    unitPrice: 7600,
    amount: 200,
    totalPrice: 0,
    casherId: 1,
    date: "2022-11-01",
  },
];

// Дараах даалгаварыг хийж гүйцэтгэнэ үү.
// 1. Нийт борлуулалтын дүнг тооцоолох.

allInfo(data);

function totalPrice(list) {
  let sum1 = 0,
    sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum1 = data[i].unitPrice * data[i].amount;
    sum += sum1;
    return sum;
  }
}

function allInfo(list) {
  let = allInfo(list);
}
// 2. Нийт борлуулагдсан барааны тоог тооцоолох.

// function sumOfAmount(data) {
//   let sum2 = 0;
//   for (i = 0; i < data.length; i++) {
//     sum2 += data[i].amount;
//   }return sum2;
// }
// console.log(sum2);
// 3. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.
// 4. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгэр/ харуулах.
// 5. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.
// 6. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгээр/ харуулах.
// 7. Хамгийн их зарагдсан /боруулалтын үнийн дүнгээр/ 10 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь харуулах.
// 8. Хамгийн их зарагдсан /боруулалтын тоо хэмжээгээр/ 5 барааны тоо хэмжээ нийт барааны тоо хэмжээнд эзлэх хувь харуулах.
// 9. Хамгийн бага зарагдсан /боруулалтын үнийн дүнгээр/ 5 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь харуулах.
// 10. Хамгийн бага зарагдсан /боруулалтын тоо хэмжээгээр/ 5 барааны тоо хэмжээ нийт барааны тоо хэмжээнд эзлэх хувь харуулах.
