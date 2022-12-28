// fetch("http://localhost:3333//api/cars", {
//   // method: "GET",
//   // node: "no-cors",
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// let btn = document.getElementById("btn");
// let root = document.getElementById("root");
// btn.addEventListener("click", async () => {
//   const res = await fetch("http://localhost:3333//api/cars")
//     .then((res) => res.json())
//     .then((res) => {
//       let newImg = document.createElement("img");
//       newImg.src = res[1].image;
//       root.appendChild(newImg);
//     })
//     .catch((e) => console.log("e: ", e));
// });

let allBtn = document.getElementById("btn1");
let root = document.getElementById("root");
root.style.display = "flex";
root.style.flexWrap = "wrap";
root.style.gap = "20px";
root.style.marginLeft = "40px";

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
