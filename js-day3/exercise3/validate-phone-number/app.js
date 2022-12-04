// Хэрвээ хэрэглэгч гараас утасны дугаар оруулвал өгөгдсөн утгыг тоо мөн эсвэл биш эсэхийг шалгаарай.

// var num1 = window.prompt("Utasnii dugaaraa oruulna uu: ");
//  if(isNaN(num1)){
// 	console.log(num1 + " is not a number");
//  }else{
// 	console.log(num1 + " is a number");
//  }

// console.log("---------------------------");

// Дараа нь тухайн өгөгдсөн утасны эхний 4 орон нь +976 байгаа эсэхийг шалгана. Эцэст нь өгөгдсөн утасны дугаарын урт 12 байвал та монгол улсын утасны дугаарыг зөв орууллаа гэж харуулаарай. Хэрвээ буруу байвал та монгол улсын утасны дугаарыг буруу орууллаа гэж харуулна.
// Жишээ нь
// Input: +97699119911

// console.log("---------------------------");

// var num1 = window.prompt("Utasnii dugaaraa oruulna uu: ");
// let fourNumber = num1.substr(0, 4);

// console.log(fourNumber);

//  if(isNaN(num1)){
// 	console.log(num1 + " is not a number");
//  }else{
//   if (+976 == fourNumber){
//   console.log(num1 + " is a number and mongolian number");
//   }else {
//     console.log(num1 + " is a number and not mongolian number");
//    } 
//  }

// console.log("---------------------------");

var num1 = window.prompt("Utasnii dugaaraa oruulna uu: ");
let fourNumber = num1.substr(0, 4);

 if(isNaN(num1)){
	console.log(num1 + " is not a number");
 }else{
  if (+976 == fourNumber){
    if (num1.length === 12) {
      console.log("Tа монгол улсын утасны дугаарыг зөв орууллаа");
    }else {
      console.log("Tа монгол улсын утасны дугаарыг буруу оруулсан байна!");
    }
  }else {
    console.log("Tа монгол улсын утасны дугаарыг буруу оруулсан байна!");
   } 
 }