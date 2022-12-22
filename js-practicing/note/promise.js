// medeelliig awchirah, amjilttai hiiwel ingene, amjiltgui bolwol tehne gej amla

// jishee n: garaas zurag awaad, oruulsan zurgiig oorchloh, hadgalah uildliig hiiy gej uzy.

// 1. zurag awah
// 2. Amjilttai bol zurgiig oorchloh
// 3. amjilttai bol amjilttai hadgalah
// 4. amjilttai bol amjilttai hadgallaa gej hewleh

// deerh uildliig callback function ashiglana

// function getImage(image, callback) {
//   let err = "";
//   if (image.type != "png") {
//     err = "PNG file bish baina";
//   }
//   callback(image, err);
// }

// reSizeImage, saveImage function

// function reSizeImage(image, callback) {
//   let err = "";
//   if (image.size != "1800x2090") {
//     err = "zow hemjeetei file bish baina";
//   }
//   let resizedImage = image;
//   callback(resizedImage, err);
// }

// ehleed function uudaa zarlasan, odoo duudatsgaay

// let newObjImage = {
//   type: "png",
//   size: "1800x2090",
//   file: {
//     filename: "img.png",
//     path: "./desktop/img2.png",
//   },
// };

// getImage(newObjImage, (rightTypeImage, err) => {
//   if (err.length > 0) return err;

//   reSizeImage(rightTypeImage, (resizedImage, err) => {
//     if (err.length > 0) return err;

//     saveImage(resizedImage, (savedImage, err) => {
//       if (err.length > 0) return err;

//       alert("success");
//     });
//   });
// });

// promise

// promise bol object

// - PromiseStatus - PromisValue -new Promise gesen tulhuur ug ashiglan uusgeh bolomjtoi

// promise
// - resolved => .then()
// - rejected => .catch()

// pending: doorh 2 tolwiin ali n ch bish, promise ajillasaar baina
// fullfilled: asuudal n shiidegdsen. "resolved" tolowtei
// rejected: asuudal n shiidehed aldaa garsan, "rejected" tolowtei

// new Promise() haaltan dotor 2 torliin callback function awdag. resolve, reject gesen 2 callback function parametereer damjuulj baina

//syntax
const promise = new Promise((resolve, reject) => {
  resolve("success");
  reject("failure");
});

const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["html", "css", "js", "react"];
    if (skills.length > 0) {
      resolve(skills);
    } else {
      reject("something wrong has happened");
    }
  }, 2000);
});
// console.log(doPromise);

// .then() // resolved tolowtei uyd duudagdana
// .catch() // rejected tolowtei uyd duudagdana
// .finally() // resolved bolon rejected alind n ch iishee orno

doPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));

function getImage(image) {
  let imagePromise = new Promise((resolve, reject) => {
    if (image.type != "png") {
      reject("png file bish bn");
    } else {
      resolve(image);
    }
  });
  return imagePromise;
}

getImage(newObjImage)
  .then((image) => console.log(image))
  .catch((err) => console.log(err));
