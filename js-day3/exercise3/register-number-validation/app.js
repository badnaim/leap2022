// Монгол улсын иргэний бүртгэлийн дугаар болох регистрийн дугаар нь 10 оронтой эхний 2 орон нь үсэг үлдсэн нь тоо байдаг билээ. 
// Тэгвэл хэрвээ хэрэглэгч гараас 10 тэмдэгт оруулахад эхлээд тухайн оруулсан утганы урт нь 10 байгаа эсэх дараа нь эхний 2 орон нь зөвхөн үсэг эсэх хамгийн эцэст нь үлдсэн 8 тэмдэгт нь бүхэлдээ тоо эсэхийг шалгана уу. Хэрвээ энэ бүх нөхцлүүд биелж байвал та монгол улсын регистрийн дугаарыг зөв орууллаа гэж харуулна уу. Хэрвээ аль нэг нөхцөл нь буруу байвал та монгол улсын иргэний бүртгэлийн дугаарыг буруу орууллаа гэж харуулна уу.

// Input: СЦ90091817

const input = СЦ90091817;
let twoNumber = input.substr(0, 2);
let eigthNumber = input.substr(2, 10);

if (input.length === 10) {
  if (isNaN(twoNumber)) {
    if (isNaN(eigthNumber)) {
      console.log("та монгол улсын иргэний бүртгэлийн дугаарыг буруу орууллаа");
    }else {
      console.log("та монгол улсын регистрийн дугаарыг зөв орууллаа");
    }
  }else {
    console.log("та монгол улсын иргэний бүртгэлийн дугаарыг буруу орууллаа");
  }
}else {
  console.log("та монгол улсын иргэний бүртгэлийн дугаарыг буруу орууллаа");
}