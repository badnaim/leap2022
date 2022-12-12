// Дэлгүүрийн боруулалтын мэдэээл өгөгдсөн.
// productName, unitPrice, amount, price, casherId(Ajiltanii dugaar), date гэсэн мэдээлэл агуулна.
// Өгөгдлийг. өөрсдөө зохионо.  30 хүртэлх мөртэй.

const data = [
         {productName:"Bakery", unitPrice:5000, amount: 200, totalPrice: 500000,  casherId:1, date: '2022-11-01'},
         {productName:"Chocolate", unitPrice:3040, amount: 18, totalPrice: 54.000, casherId:1, date: '2022-11-01'},
         {productName:"Tamhi", unitPrice:3407, amount: 20, totalPrice: 54.000, casherId:1, date: '2022-11-01'},
         {productName:"Colgate", unitPrice:3340, amount: 3, totalPrice: 54.000, casherId:1, date: '2022-11-01'},
         {productName:"Icecream", unitPrice:36800, amount: 8, totalPrice: 54.000, casherId:1, date: '2022-11-01'},
         {productName:"Candy", unitPrice:7600, amount: 200, totalPrice: 500000,  casherId:1, date: '2022-11-01'},
         {productName:"Gum", unitPrice:3400, amount: 28, totalPrice: 54.000, casherId:1, date: '2022-11-01'},
         {productName:"Chips", unitPrice:2345, amount: 13, totalPrice: 54.000, casherId:1, date: '2022-11-01'},
         {productName:"Cake", unitPrice:34543, amount: 15, totalPrice: 54.000, casherId:1, date: '2022-11-01'},
         {productName:"Pizza", unitPrice:9808, amount: 11, totalPrice: 54.000, casherId:1, date: '2022-11-01'},
         {productName:"Burger", unitPrice:9870, amount: 70, totalPrice: 500000,  casherId:1, date: '2022-11-01'},
         {productName:"Milk", unitPrice:5246, amount: 1, totalPrice: 54.000, casherId:1, date: '2022-11-01'},
         {productName:"Bread", unitPrice:6784, amount: 11, totalPrice: 54.000, casherId:1, date: '2022-11-01'},
         {productName:"Jam", unitPrice:7560, amount: 7, totalPrice: 54.000, casherId:1, date: '2022-11-01'},
         {productName:"Cola", unitPrice:5430, amount: 12, totalPrice: 54.000, casherId:1, date: '2022-11-01'},
         {productName:"Sprite", unitPrice:5430, amount: 20, totalPrice: 500000  casherId:1, date: '2022-11-01'},
         {productName:"Fanta", unitPrice:7800, amount: 100, totalPrice: 54.000 casherId:1, date: '2022-11-01'},
         {productName:"Lipton", unitPrice:3400, amount: 19, totalPrice: 54.000 casherId:1, date: '2022-11-01'},
         {productName:"Coffee", unitPrice:1200, amount: 20, totalPrice: 54.000 casherId:1, date: '2022-11-01'},
         {productName:"Brush", unitPrice:8900, amount: 21, totalPrice: 54.000 casherId:1, date: '2022-11-01'},
         {productName:"Korowka", unitPrice:23400, amount: 210, totalPrice: 500000  casherId:1, date: '2022-11-01'},
         {productName:"Cup", unitPrice:8900, amount: 20, totalPrice: 54.000 casherId:1, date: '2022-11-01'},
         {productName:"Apple", unitPrice:5670, amount: 21, totalPrice: 54.000 casherId:1, date: '2022-11-01'},
         {productName:"Banana", unitPrice:3450, amount: 22, totalPrice: 54.000 casherId:1, date: '2022-11-01'},
         {productName:"Blueberry", unitPrice:5400, amount: 5, totalPrice: 54.000 casherId:1, date: '2022-11-01'},
         {productName:"Strawberry", unitPrice:4600, amount: 32, totalPrice: 500000  casherId:1, date: '2022-11-01'},
         {productName:"Melon", unitPrice:3500, amount: 33, totalPrice: 54.000 casherId:1, date: '2022-11-01'},
         {productName:"Watermelon", unitPrice:3000, amount: 23, totalPrice: 54.000 casherId:1, date: '2022-11-01'},
         {productName:"Dog", unitPrice:2000, amount: 45, totalPrice: 54.000 casherId:1, date: '2022-11-01'},
         {productName:"Cat", unitPrice:1000, amount: 30, totalPrice: 54.000 casherId:1, date: '2022-11-01'},
];

// Дараах даалгаварыг хийж гүйцэтгэнэ үү.
// 1. Нийт борлуулалтын дүнг тооцоолох.

// 2. Нийт борлуулагдсан барааны тоог тооцоолох.
// 3. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.
// 4. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгэр/ харуулах.
// 5. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.
// 6. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгээр/ харуулах.
// 7. Хамгийн их зарагдсан /боруулалтын үнийн дүнгээр/ 10 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь харуулах.
// 8. Хамгийн их зарагдсан /боруулалтын тоо хэмжээгээр/ 5 барааны тоо хэмжээ нийт барааны тоо хэмжээнд эзлэх хувь харуулах.
// 9. Хамгийн бага зарагдсан /боруулалтын үнийн дүнгээр/ 5 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь харуулах.
// 10. Хамгийн бага зарагдсан /боруулалтын тоо хэмжээгээр/ 5 барааны тоо хэмжээ нийт барааны тоо хэмжээнд эзлэх хувь харуулах.
