// creating elements
const ul = document.querySelector("ul");
const li = document.createElement("li");

// adding elements
ul.append(li);

// modifying the text
li.innerText = "x-meta";

// modifying attributes and classes
li.setAttribute("id", "main-heading"); //which main-heading is in html id name and it has styles
li.removeAttribute("id"); // of course it will remove the id name what we created

const title = document.querySelector("#main-heading");

li.classList.add("list-items"); //this will add id with syle

// reveal event

const revealBtn = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".hidden-content");

function revealContent() {
  if (hiddenContent.classList.contains("reveal-btn")) {
    hiddenContent.classList.remove("reveal-btn");
  } else {
    hiddenContent.classList.add("reveal-btn");
  }
}

revealBtn.addEventListener("click", revealContent);
