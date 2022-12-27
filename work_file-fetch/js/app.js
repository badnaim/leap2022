const select = document.querySelector("#breeds");
const card = document.querySelector(".card");
let current = "";

fetch("https://dog.ceo/api/breeds/list")
  .then((res) => res.json())
  .then((data) => {
    generateBreeds(data.message);
    fetchImage(data.message[0]);
    current = data.message[0];
  });

function generateBreeds(data) {
  data.map((dogBreed) => {
    const html = `<option value=${dogBreed}> ${dogBreed}</option>`;
    select.innerHTML += html;
  });
}

fetch("https://dog.ceo/api/breeds/list").then((res) => console.log(res));

// function fetchImage(data) {
//   data.map((dogBreed) => {
//     const html = `<img src="${dogBreed}"/>`;
//     card.innerHTML += html;
//   });
// }
