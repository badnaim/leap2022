// javascrit object

// - өгөгдлийн төрөл
// primitive type : null, boolean, number, String
// non primitive/reference type: Array, object, function

// Object

// Жаваскрипт хэлэнд бүх зүйл Object
// - object{kay:value} hosloloos togtoh ba dotroo olon oor oor ogogdluudiig hadgaldag
// let object = {
//   key: IDBCursorWithValue,
// }

// person gesen object uusgey
let person = {
  firstname: "bat",
  lastname:"dorj",
  age: 22,
  score: [77, 90, 85],
  isMarried: false,
}

// object ni olon torliin ogogdol bolon function aguuldag
// - ogogdol: shinj chanar(property)
// - function: uildel (method) gej nerledeg.

// object dotor object aguulj BeforeUnloadEvent. Uuniig nested object gene

// objectiin ogogdliin utgiig hewley
let person1 = {
  firstname: "naraa",
  lastname: "jimsee",
};

console.log(person1.firstname);
console.log(person1.lastname);

// object function

const person2 = {
  firstname: "naraa",
  lastname: "erdene",
  printFullname: function() {
    console.log(this.firstname + "" + this.lastname);
  }
};

// this tulhuur ug JS helend this ni objectiig ilerhiildeg

// ali object-d this duudaj baigaagaas hamaarch oor oor object zaadag
// - object -iin function dotor baiwal tuhain objectiig zaadag
// - dan function dotor baiwal global objectiig zaadag
// - dan this baiwal global object -iig zaadag

console.log("----------------");
// objectiig huulah

let person3 = {
  firstname: "naraa",
}
let person4 = person3;
person4.firstname = "eegii";

console.log(person3.firstname);
console.log(person4.firstname);

console.log("----------------");
// object -iin huulbariig uusgehdee spread operator -iig ashiglaj bolno

let person5 = {person4}
person5.firstname = "erdee";
console.log(person5.firstname);
console.log(person4.firstname);

// object methods - object funltsuud

// object functions
Object.keys() // objectiin tulhuur uguudiin array-iig butsaana
Object.values() // objectiin utguudiin array-iig butsaana
Object.create() // object uusgeh uyd hereglene
Object.assign() // neg objectiig nogoo ruu huulahad hereglene