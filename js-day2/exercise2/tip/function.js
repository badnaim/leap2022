// Tip

// Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30,000₮ хооронд 15% нэмж төлдөг, бусад үед 20% - ийг нэмж төлдөг бол. Эдгээр тохиолдолуудад нийт хэдийг төлөхийг олно уу. Эдгээр тохиолдолуудад тус бүр хэдийг төлөх вэ? 3000₮, 27500₮, 100000₮. (if else ашиглахгүй ternary operator ашиглаарай).

let cost1 = 3000, 
  cost2 = 27500, 
  cost3 = 100000;

let costWtip1 = 5000 <= cost1 && cost1 <= 30000 ? cost1 + (cost1 * 15)/100 : cost1 + (cost1 * 20)/100;
let costWtip2 = 5000 <= cost2 && cost2 <= 30000 ? cost2 + (cost2 * 15)/100 : cost2 + (cost2 * 20)/100;
let costWtip3 = 5000 <= cost3 && cost3 <= 30000 ? cost3 + (cost3 * 15)/100 : cost3 + (cost3 * 20)/100;

console.log(costWtip1);
console.log(costWtip2);
console.log(costWtip3);