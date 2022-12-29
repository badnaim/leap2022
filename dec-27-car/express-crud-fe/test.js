let allBtn = document.getElementById("btn1");
let root = document.getElementById("root");
root.style.display = "flex";
root.style.flexWrap = "wrap";
root.style.gap = "20px";

let opOne = document.getElementById("opOne");
let opTwo = document.getElementById("opTwo");

opOne.addEventListener("click", () => {
  fetch("http://localhost:3333/api/cars")
    .then((res) => res.json())
    .then((res) => {
      res.map((car) => {});
    });
});

allBtn.addEventListener("click", () => {
  fetch("http://localhost:3333/api/cars")
    .then((res) => res.json())
    .then((res) => {
      res.map((car) => {
        let newCard = document.createElement("div");
        newCard.innerHTML = `<div h-25 class="card" style="width: 18rem;">
      <img src="${car.Image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${car.model}</h5>
        <p>${car.brand}</p>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`;
        root.appendChild(newCard);
      });
    });
});

// let search = document.getElementById("search");
// let bttn = document.getElementById("bttn");

// bttn.addEventListener("click", () => {
//   fetch("http://localhost:3333/api/cars")
//     .then((res) => res.json())
//     .then((res) => {
//       res.map((car) => {
//         let newCard = document.createElement("div");
//         newCard.innerHTML = `<div h-25 class="card" style="width: 18rem;">
//       <img src="${car.Image}" class="card-img-top" alt="...">
//       <div class="card-body">
//         <h5 class="card-title">${car.model}</h5>
//         <p>${car.brand}</p>
//         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//         <a href="#" class="btn btn-primary">Go somewhere</a>
//       </div>
//     </div>`;
//         root.appendChild(newCard);
//       });
//     });
// });
