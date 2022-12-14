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
  },
];

// Дараах даалгаварыг хийж гүйцэтгэнэ үү.
// 1. Нийт борлуулалтын дүнг тооцоолох.

console.log("-------------------------------------");

let sum = 0,
  totalPrice = 0;

for (let i = 0; i < data.length; i++) {
  sum = data[i].unitPrice * data[i].amount;
  totalPrice += sum;
}
console.log("Нийт борлуулалтын дүн: " + totalPrice + " төгрөг");

console.log("-------------------------------------");

// 2. Нийт борлуулагдсан барааны тоог тооцоолох.

let totalAmount = 0;

for (i = 0; i < data.length; i++) {
  totalAmount += data[i].amount;
}
console.log("Нийт борлуулсан барааны тоо: " + totalAmount + " ширхэг");

console.log("------------------------------------");

// 3. Хамгийн их зарагдсан 5 барааны жагсаалт /борлуулалтын үнийн дүнгээр/ харуулах.

data.sort((a, b) => b.totalPrice - a.totalPrice);
console.log("Хамгийн их зарагдсан 5 бараа бор/үнэээр:");
for (i = 0; i < 5; i++) {
  console.log(
    `Number ${i + 1} бараа: `,
    data[i].productName,
    data[i].totalPrice
  );
}

// -------------------------------

// function maximum () {
//   let array = [5, 4, 2, 15, 10, 1];
//   let max = array[0];
//   for (i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
// }

console.log("-------------------------------------");

// 4. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгэр/ харуулах.

data.sort((a, b) => b.amount - a.amount);
console.log("Хамгийн их зарагдсан 5 бараа тоо хэмжээгээр:");
for (i = 0; i < 5; i++) {
  console.log(`Number ${i + 1} бараа: `, data[i].productName, data[i].amount);
}

console.log("-------------------------------------");

// 5. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.

data.sort((a, b) => a.totalPrice - b.totalPrice);
console.log("Хамгийн бага зарагдсан 5 бараа бор/үнээр:");
for (i = 0; i < 5; i++) {
  console.log(data[i].productName, data[i].totalPrice);
}

console.log("-------------------------------------");

// 6. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгээр/ харуулах.

data.sort((a, b) => a.amount - b.amount);
console.log("Хамгийн бага зарагдсан 5 бараа тоо хэмжээгээр:");
for (i = 0; i < 5; i++) {
  console.log(data[i].productName, data[i].amount);
}

console.log("-------------------------------------");

// 7. Хамгийн их зарагдсан /борлуулалтын үнийн дүнгээр/ 10 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь харуулах.

let sum2 = 0,
  totalPrice1 = 0;

data.sort((a, b) => b.totalPrice - a.totalPrice);
function percent(data) {
  let sum1 = 0;
  for (i = 0; i < 3; i++) {
    sum1 += data[i].totalPrice;
  }
  for (j = 0; j < data.length; j++) {
    sum2 = data[j].unitPrice * data[j].amount;
    totalPrice1 += sum2;
  }

  console.log(
    "Хамгийн их зарагдсан 3 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь:",
    Math.round((sum1 / totalPrice) * 100) + "%"
  );
}
percent(data);

console.log("-------------------------------------");

// 8. Хамгийн их зарагдсан /боруулалтын тоо хэмжээгээр/ 5 барааны тоо хэмжээ нийт барааны тоо хэмжээнд эзлэх хувь харуулах.

let sum3 = 0,
  totalAmount8 = 0;
data.sort((a, b) => b.amount - a.amount);
function percentAmount(data) {
  for (i = 0; i < data.length; i++) {
    totalAmount8 += data[i].amount;
  }
  for(j = 0; j < 3; j++) {
    sum3 += data[j].amount;
  }
  console.log(
    "Хамгийн их зарагдсан 3 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь:",
    Math.round((sum3 / totalAmount8) * 100) + "%"
  );
}percentAmount(data);

console.log("-------------------------------------");

// 9. Хамгийн бага зарагдсан /боруулалтын үнийн дүнгээр/ 5 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь харуулах.

let sum4 = 0,
  totalPrice9 = 0;

data.sort((a, b) => a.totalPrice - b.totalPrice);
function percentYoungTotalPrise(data) {
  for (i = 0; i < 3; i++) {
    sum4 += data[i].unitPrice * data[i].amount;
  }
  for (j = 0; j < data.length; j++) {
    sum2 = data[j].unitPrice * data[j].amount;
    totalPrice9 += sum2;
  }

  console.log(
    "Хамгийн бага зарагдсан 3 барааны тоо хэмжээ нийт борлуулсан барааны тоонд эзлэх хувь:",
    Math.round((sum4 / totalPrice9) * 100) + "%"
  );
}
percentYoungTotalPrise(data);

console.log("-------------------------------------");

// 10. Хамгийн бага зарагдсан /боруулалтын тоо хэмжээгээр/ 5 барааны тоо хэмжээ нийт барааны тоо хэмжээнд эзлэх хувь харуулах.

let sum5 = 0,
  totalAmount0 = 0;
data.sort((a, b) => a.amount - b.amount);
function percentYoungAmount(data) {
  for (i = 0; i < data.length; i++) {
    totalAmount0 += data[i].amount;
  }
  for(j = 0; j < 3; j++) {
    sum5 += data[j].amount;
  }
  console.log(
    "Хамгийн бага зарагдсан 3 барааны тоо хэмжээ нийт борлуулсан барааны тоонд эзлэх хувь:",
    Math.round((sum5 / totalAmount0) * 100) + "%"
  );
}percentYoungAmount(data);

console.log("-------------------------------------");