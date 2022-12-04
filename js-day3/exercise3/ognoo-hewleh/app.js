// Гараас огноо, сар, өдөр гэсэн утгуудыг аван дараах форматын дагуу харуулна уу. Жишээ 2009, 12, 31 гэж орж ирвэл “2009-12-31”. Анхаарах зүйл хэрвээ өдөр, сар нэг оронтой байвал 2 оронтой болгох буюу сар нь  1 гэж байвал “01” болгох, гараас оруулж байгаа утгыг шалгах

const year = parseInt(prompt("Enter a born year: "));
const month = parseInt(prompt("Enter a born month: "));
const day = parseInt(prompt("Enter a born day" ));

if (year > 1800 && year < 2023 && month > 0) {
  if (month > 0 && month < 10 && day > 0 && day < 10){
    console.log(`${year}-0${month}-0${day}`);
  }else if (month > 0 && month < 10 && day > 9 && day < 32) {
    console.log(`${year}-0${month}-${day}`);
  }else if (month > 9 && month < 13 && day > 0 && day < 10) {
    console.log(`${year}-${month}-0${day}`);
  }
}else if (year > 1800 && year < 2023 && month > 9 && month < 13 && day > 9 && day < 32) {
  console.log(`${year}-${month}-${day}`);  
}else {
  console.log("Уучлаарай таны оруулсан огноо буруу байна");
}

console.log("----------------");

// 2. Гараас утасны дугаар ( 99001234 ) аван шалгах, зөв дугаар бол харгалзах операторыг (Unitel, Mobicom, G-Mobile, Skytel) хэвлэх , буруу дугаар бол буруу гэсэн мессежийг өгөх

let phoneNumber = parseInt(prompt("Enter your phone number: "));
let strq = phoneNumber.toString();
let stre = strq.substr(0, 2)

if (stre == 99 || stre == 95 || stre == 85 || stre == 94) {
  console.log("Mobicom");
}else if (stre == 88 || stre == 89 || stre == 86) {
  console.log("Unitel");
}else if (stre == 87 || stre == 83 || stre == 81 || stre == 78) {
  console.log("G-mobile");
}else if (stre == 90 || stre == 92 || stre == 96 || stre == 98) {
  console.log("Skytel");
}else {
  console.log("Buruu dugaar oruulsan baina eo.")
}

