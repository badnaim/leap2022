// Өндөр жилийг олно уу

// ------- leaf year lagorithm --------

// Өгөгдсөн жилийг өндөр жил мөн эсэхийг шалгаад хэрвээ мөн бол өндөр жил мөн үгүй бол үгүй гэж хариулна уу.

// Өндөр жил гэдэг нь 4 жилд нэг удаа болдог бөгөөд тэр нь 2-р сар 29 хоногтой үед тохиолддог. Энэ нь 4-д хуваагдаж байвал мөн, 100 хуваагдаж байвал өндөр жил биш. Харин 400 жилд бүтнээрээ хуваагдаж байвал мөн.

let leafYear = 2024;
let leafNearYear1 =  leafYear % 4;
let leafNearYear2 =  leafYear % 100;
let leafNearYear3 =  leafYear % 400;


if (leafNearYear1){
  if (0<leafNearYear1) {
    console.log("өндөр жил биш");
  }else {
    if(leafNearYear2) {
      if (0===leafNearYear2){
        console.log("өндөр жил биш");
      }else if(leafNearYear3===0){
        console.log("өндөр жил мөн");
      }else {
        console.log("өндөр жил мөн");
      }
    }
  }
}