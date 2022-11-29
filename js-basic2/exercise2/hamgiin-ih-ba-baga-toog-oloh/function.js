// Өгөгдсөн тоонуудын хамгийн их болон хамгийн багыг олно уу

// 3-н хувьсагч зарлана уу. (a, b ,c)



// Дурын тоон утгууд хувьсагчдад онооно уу

let a = 1, 
  b = 1, 
  c = 1;

// Дараа нь тухайн өгөгдсөн хувьсагчдаас хамгийн их утгатай хувьсагчийг console дээр хэвлэнэ үү

if (a>b){
  if (a>c){
    console.log(a + " n hamgiin ih");
  }else {
    console.log(c + " n hamgiin ih");
  }
} else {
  if(b>c){
    console.log(b + " n hamgiin ih");
  }else {
    console.log(c + " n hamgiin ih");
  }
}

// Бас тухайн өгөгдсөн хувьсагчдаас хамгийн бага утгатай хувьсагчийг console дээр хэвлэнэ үү

if (a>b){
  if (c>b){
    console.log(b + " n hamgiin baga")
  } else {
    console.log(c + " n hamgiin baga")
  }
} else {
  if(c>a){
    console.log(a + " n hamgiin baga")
  }else {
    console.log(c + " n hamgiin baga")
  }
}

// Тухайн утгууд нь хоорондоо бас тэнцүү байж болохыг анхаарна уу. Жишээ нь a = 5, b = 5, c = 5. Тэгвэл хамгийн их болон хамгийн бага утгууд нь 5 байна.