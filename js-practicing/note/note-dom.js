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

let myButton = document.getElementById("myBtn");
function changeBackgroundColor () {
  myButton.style = "background-color: green"
}
myButton.addEventListener("click", changeBackgroundColor());

let myButton1 = document.getElementById("myBtn");
function changeBackgroundColor () {
  myButton1.style = "background-color: green"
}
myButton1.addEventListener("click", changeBackgroundColor);