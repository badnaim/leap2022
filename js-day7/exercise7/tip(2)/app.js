// Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮ хооронд 15% нэмж төлдөг, бусад үед 20% - ийг нэмж төлдөг бол. Гончигсумлай өөртөө зориулан нийт төлбөр буцаадаг function бичжээ. Эдгээр тохиолдолуудад тус бүр хэдийг төлөхийг function - оор олно уу? 3000₮, 27500₮, 100000₮.

// console.log("----------------------------------");

// function cost(arr) {
//   for(i = 0; i < arr.length; i++) {
//     if (5000 <= arr[i] && arr[i] <= 30000) {
//       costWtip = arr[i] + (arr[i] * 15)/100;
//     }else {
//       costWtip = arr[i] + (arr[i] * 20)/100;
//     }
//     console.log(costWtip);
//   } 
// } 
// cost([3000, 27500, 100000]);


// console.log("----------------------------------");

// 1. Нийт төлбөр ийг олдог 1 function.

function cost(arr) {
  for(i = 0; i < arr.length; i++) {
    let costWtip = 0;
    if (5000 <= arr[i] && arr[i] <= 30000) {
      costWtip = arr[i] + (arr[i] * 15)/100;
    }else {
      costWtip = arr[i] + (arr[i] * 20)/100;
    }
    console.log(costWtip);
  }
} 
cost([3000, 27500, 100000]);

// console.log("----------------------------------");

// 2. Зөвхөн нэмэгдэл төлбөрийг олдог 1 function.

// function cost(a) {
//   if (5000 <= a && a <= 30000) {
//     return console.log((a * 15)/100);
//   }else {
//     return console.log((a * 20)/100);
//   }
// }cost(3000);

// console.log("----------------------------------");

// 3. Нийт төлбөрийн дундаж - ийг олдог 1 function.

