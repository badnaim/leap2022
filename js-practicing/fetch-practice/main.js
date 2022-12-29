// let items = document.getElementsByTagName("ul");
// let input = document.getElementById("myInput");
// let receivedData = [];
// let identifier = [];
// let name = [];
// let website = [];

// fetch("http://jsonplaceholder.typicode.com/users")
//   .then(function (response) {
//     if (response.status !== 200) {
//       return;
//     }
//     response.json().then(function (data) {
//       //data is present in array
//       for (let i = 0; i < data.length; i++) receivedData.push(data[i]);
//       console.log(receivedData);

//       for (let j = 0; j < receivedData.length; j++)
//         name.push(receivedData[j].name);
//       console.log(name);

//       for (let n = 0; n < receivedData.length; n++)
//         identifier.push(receivedData[n].id);
//       console.log(identifier);

//       for (let x = 0; x < receivedData.length; x++)
//         website.push(receivedData[x].website);
//       console.log(website);
//     });
//   })
//   .catch(function (err) {
//     console.log("Fetch Error :-S", err);
//   });

var arr = [2, 5, 6, 3, 8, 9];

var newArr = arr.map(function (val, index) {
  return { key: index, value: val };
});

console.log(newArr);

const ul = document.getElementById("authors");
const list = document.createDocumentFragment();
const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let authors = data;

    authors.map(function (author) {
      let li = document.createElement("li");
      let name = document.createElement("h2");
      let email = document.createElement("span");

      name.innerHTML = `${author.name}`;
      email.innerHTML = `${author.email}`;

      li.appendChild(name);
      li.appendChild(email);
      list.appendChild(li);
    });
  })
  .catch(function (error) {
    console.log(error);
  });

ul.appendChild(list);
