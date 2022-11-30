// Сурагчдын шалгалтын дүнг гаргаарай



// Багш сурагчдын эцсийн шалгалтын дүнг дүгнэхээр болжээ

// 1. Бат - 67 оноо, Онц Дүмд - 59 оноо авчээ.

let bat = 67, 
    ontsdumd = 59,
    name1 = "Бат",
    name2 = "Онц-Дүмд"; 

// 2. Шалгалтын онооноос хамааран багш тодорхой дүнгийн жагсаалт гаргах ёстой бөгөөд энэ нь

// a. Хэрвээ оноо 60 хувиас доош байвал (60 орохгүй) - Маш муу
// b. Хэрвээ оноо 60 - 70 (70 орохгүй) хооронд байвал - Хангалттай
// c. Хэрвээ оноо 70 - 80 (80 орохгүй) хооронд байвал - Дунд
// d. Хэрвээ оноо 80 - 90 (90 орохгүй) хооронд байвал - Сайн
// e. Хэрвээ оноо 90 - 100 хооронд байвал - Маш сайн гэсэн үнэлгээг өгч байгаа юм байна.

if (0 <= bat && bat < 60) {
  console.log("Mash muu");
} else if (60 <= bat && bat < 70){
  console.log("Hangalttai");
} else if (70 <= bat && bat < 80){
  console.log("Dund");
} else if (80 <= bat && bat < 90){
  console.log("Sain");
} else if (90 <= bat && bat <= 100){
  console.log("Mash sain");
} else{
  console.log("utga buruu bn!")
}

if (0 <= ontsdumd && ontsdumd < 60) {
  console.log("Mash muu");
}else if (60 <= ontsdumd && ontsdumd < 70){
  console.log("Hangalttai");
}else if (70 <= ontsdumd && ontsdumd < 80){
  console.log("Dund");
}else if (80 <= ontsdumd && ontsdumd < 90){
  console.log("Sain");
}else if (90 <= ontsdumd && ontsdumd <= 100){
  console.log("Mash sain");
}else{
  console.log("utga buruu bn!")
}

// 3. Тэгвэл тухайн сурагчдыг тэнцсэн болоод тэнцээгүй эсэхийг жагсааж доорх хэлбэрээр
// НЭР - АВСАН ОНОО - ҮНЭЛГЭЭ гэсэн маягаар console дээр харуулна уу.

if (0 <= bat && bat < 60) {
  console.log(name1 + " - " + bat + " - " + "тэнцээгүй");
} else if (60 <= bat && bat <=100){
  console.log(name1 + " - " + bat + " - " + "тэнцсэн");
}else {
  console.log("Буруу утга оруулсан байна");
}

if (0 <= ontsdumd && ontsdumd < 60) {
  console.log(name1 + " - " + ontsdumd + " - " + "тэнцээгүй");
} else if (60 <= ontsdumd && ontsdumd <=100){
  console.log(name1 + " - " + ontsdumd + " - " + "тэнцсэн");
}else {
  console.log("Буруу утга оруулсан байна");
}