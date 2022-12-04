// 1. 1-100 ийн хооронд random оор 1 утга авдаг randomNumber гэсэн variable зарлана уу.

var randomNumber = Math.floor(Math.random() * (100)) + 1;
console.log(randomNumber);

// 2. Prompt ашиглан 1 утга аваад тэр тоог таах хүртэл зогсолтгүй ажиллах loop бичээргэй. 

let x = window.prompt("1-100-iin hoorond 1 too oruulna uu: "),
i = 0;

while (i <= 100) {
  if (x == i) {
    console.log(i)
  }
  i += 1
}

// 3. Хэрвээ prompt - оос авсан утга нь randomNumber оос их бол "таны оруулсан тоо их байна" г.м чиглүүлэх маягаар хэвлэдэг байх.

if (x > randomNumber) {
  alert("таны оруулсан тоо их байна");
}else {
  alert("таны оруулсан тоо бага байна");
}