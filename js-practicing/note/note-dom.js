// DOM (Document Object Model)

// - bid js bol web site iig ami oruuldag gej yarij irsem
// - Tegwel html css ashiglan static site hiij sursan bas bid js - iin anhan shatnii medlegtei ch bolson
// - ene hoyriig holbohod DOM iig ashiglana

// DOM gej yu we? yu hiij boloh we?

// javascript -eer html -n elemnetuudiig udirdahad n holboos bolj ogdog interface yum
// js -eer yu hiij boloh:
// - html huudsan dahi buh elementuudiig udirdaj
// - elementuudiin attribute -uudiig bid oorchilj bolno
// - css style -uudiig oorchilj bolno
// - html-d baigaa elementuudiig ustgaj bolno
// - shineer element nemj bolno
// - elemented shineer attribute nemj bolno
// - event -uuded hariu uildel uzuulj bolno
// - html -d shineer event uusgej bolno

// html- d shineer p element uusgen demo gesen ID tai elemented oruulj ogno
//+++++++++++++++ document.gretElementById("demo").innerHTML = "Date : " + Date();

// attribute oorchloh
//++++++++++++++++ document.getElementsByTagName("img").src = "dogPicture.jpg";

// style oorchloh
// HTML-dahi profileName gesen class-tai elementiin ongiig tsenher bolgoj baina
//++++++++++++++++ document.getElementsByClassName("profileName").style.color = "blue";

// anhaarah zuil
// - getElementsByTagName
// - getElementsByClassName
// - querySelectorAll

// Edgeer selector-uudiig ni HTML collection (Array of elements) butsaahiig AuthenticatorAssertionResponse

// jishee attribute oorchloh
// document.getElementsByTagName("img")[0].src = "dogPicture.jpg";

// jishee style oorchloh
// document.querySelectorAll(".profileName")[0].style.color = "blue";
// HTML dahi profileName gesen class-tai elementiig ongiig tsenher bolgoj baina

// tugeemel ashiglagddag method-uud
// * document.createElement(element) // html element uusgeh
// * document.removeChild(element) // html element ustgah
// * document.appendChild(element) // html element nemj oruulah
// * document.replaceChild(new, old) // html element solih

// html event jishee
// * mouse darahad
// * huudas achaallahad
// * scroll erguulehed
// * towch (button) darahad
// * input dahi utga oorchlogdohod

// deerh event-uudiig tohioldohod yu boloh we gedgiig bid js -r helj ogch bolno

// EventTarget.addEventListener("yamar avent soncmoor baigaagaa","event boloh uy yu hiimeer baigaagaa")

// eventTarget: Element selector -oor barij awsan element (document.
// getElementByld("btn"))

// "yamar event sonsmoor baigaagaa" "scroll", "click", "change" geh met

// let myButton = document.getElementById("myBtn");
// function changeBackgroundColor() {
//   myButton.style = "background-color: green";
// }
// myButton.addEventListener("click", changeBackgroundColor());

// let myButton1 = document.getElementById("myBtn");
// function changeBackgroundColor() {
//   myButton1.style = "background-color: green";
// }
// myButton1.addEventListener("click", changeBackgroundColor);

// getElementsByTagName
// getElememtsByClassName
// querySelectorAll

// document.getElementById("demo").innerHTML = "Date : " + Date();
// document.getElementsByTagName("img")[0].src = "dogPicture.jpg";
// document.querySelectorAll(".profileName")[0].style.color = "blue";

// const newDiv = document.createElement("hi"); // html element uusgeh
// const newContent = document.createTextNode("Manai sited tawtai moril");
// newDiv.appendChild(newContent); //html element nemj oruulah
// const main = document.getElementsByTagName("main");
// main[0].appendChild(newDiv);

// dom event listener

// MouseEvent, huudas achaallah, scroll erguuleh, towch darahad, input dahi utga oorchlogdohod

// EventTarget.addEventListener(
//   "ymar event sonsmoor baigaagaa",
//   "event boloh uy yu hiimeer baigaagaa"
// );

// EventTarget = document.getElementById("btn");

// event types = "scroll", "click", "change" geh met;

// dom object event

// let myButton = document.getElementById("myBtn");
// function changeBackgroundColor() {
//   myButton.style = "background-color: green";
// }
// myButton.addEventListener("click", changeBackgroundColor());

// myButton.addEventListener("click", () => {
//   myButton.style = "background-color: green";
// });

// BOM

// энэ зааварт та хөтөч Javascript- ийн глобал обект болох javascript цонхны обектын талаар суралцах бөгөөд browser функцыг харуулах болно.

// window.open(url, windowName, [windowFeatures]);
// windowFeatures - ene argument n shine tsonhond orgon, ondor, tsesiin MutationRecord, hemjeeg oorchloh zereg medeelliig haruulah commandaar tusgaarladsan tohirgoonii mor yum.

// funciton openWindow() {
//   let url = 'http://www.google.com';
//   window.open(url, "");
// }

// function openWindow() {
//   let url = "http://www.google.com";
//   let feature = "height=600, width=800";
//   window.open(url, "", features);
// }

// let result = window.confirm(question); //js confirm() argiig ashiglan batalgaajuulah hariltsah tsonhiig haruulna

// let timeoutID = setTimeOut(cb [,delay], arg1, arg2,...);

// cb n timer -iin hugatsaa duussanii daraa hiigdeh butsaan duudlagiin function yum
// delay gedeg n timer butsaaj duudah fucntion guitsetgehees omno huleeh yostoi millsecond eer ilerhiilegdeh hugatsaa yum. Herew ta uuniig orhiguulsan bol delay andagchaar 0 bolno.
// arg1, arg2, ... n cb duudlagiin function d damjuulagdsan argumentuud yum

let timeoutID;

function showAlert() {
  timeoutID = setTimeout(alert, 3000, "setTimeout Demo!");
}

function clearAlert() {
  clearTimeout(timeoutID);
}

// SET INTERVAL

// let intervalID = setInterval(callback, delay, [arg1, arg2, ...]);

// setInterval() n duudlaga buriin hoorond togtmol saatal buhii function dahin dahin duuddag

let counte = 0;
setInterval(startInterval, 1000);

function startInterval() {
  console.log(counte);
  counte++;
}

// location

// window.location bolon document.location hoyulaa neg location object ruu holbodog
