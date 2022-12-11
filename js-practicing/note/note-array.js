// at
const arr = [1,2,3,4,5,6,7,8,910];
console.log(arr[0]); // 1
console.log(arr.at(0)); // 1


// concat
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
const array4 = array1 + "," + array2;

console.log(array3);
console.log(array4);
// 2 tusdaa array -iig negtej neg bolgohdoo concat ashiglana


// includes
const array5 = [1, 2, 3];
console.log(array5.includes(2)); //true

const pets = ['muur', 'nohoi', 'zagas'];
console.log(pets.includes('zagas')); // true
console.log(pets.includes('hulgana')); // false
// includes() ashiglaj array dotroos haij baigaa utga baigaa esehiig shalgana


// indexOf
const animals = ['chono', 'temee', 'nugas', 'buhun'];
console.log(animals.indexOf('buhun')); // 1

// 2r indexees hoish haina
console.log(animals.indexOf('buhun', 2)); //4

// herew baihgui bol -1 utga butsaana
console.log(animals.indexOf('giraffe')); // -1

// indexOf() ni tuhain haij baigaa utga hamgiin turuund hed deh index deer bairshij baigaa utgiig butsaana. herew baihgui bol -1 gesen utga butsaana


// join 
const jiguurten = ['elee', 'heree', 'galuu'];

console.log(jiguurten.join()); //elee,heree,galuu
console.log(jiguurten.join('')); //eleehereegaluu
console.log(jiguurten.join('-')); // elee-heree-galuu

// join() ni array-g ogogdson temdegt ashiglaj niiluulen shine string uusgehdee heregledeg


// pop
const arrr = [0, 1, 2, 3];

const poppedValue = arrr.pop();

console.log(poppedValue); //3
console.log(arrr); //[0, 1, 2]

arrr.pop();
console.log(arrr); //[0, 1]

// pop() ni array-n hamgiin suuliin indexiig salgaj awdag

console.log("------------------------------");

// push
const animals1 = ['galuu', 'uher', 'honi'];

const count = animals1.push('yamaa');
console.log(count);

console.log(animals1);

animals1.push('tahia', 'uher', 'nohoi');
console.log(animals1);

// push() ni array -n urtiig sungaj shineer suulchiin element nemne

console.log("------------------------------");

// shift
const arr2 = [1, 2, 3];
const firstEl = arr2.shift();

console.log(arr2);

console.log(firstEl);
// shift() ni array -n ehnii element buyu 0 deh elementiig salgaj awdag


// unshift 
// unshift() ni array-n urtiig sungaj shineer array-n ehend nemne

console.log("------------------------------");

// sort 
const names2 = ['maral', 'bold', 'jaw'];
names2.sort();
console.log(names2);
// ['bold', 'jaw', 'maral']

const array0 = [1, 30, 4, 21, 10000];
array0.sort();
console.log(array0);
// [1, 10000, 21, 30, 4]

console.log("------------------------------");

// reverse 
const ar = ['one', 'two', 'three'];
const reversed = ar.reverse();
console.log(reversed);
// reverse() tuhain array-n utguudiig tongorgoj shinechlene

console.log("------------------------------");

// slice
console.log(arr.slice(2));
// 2r index hurtlehiig tasdaj awna

console.log(arr.slice(2, 4));
// 2r index-ees 4 eer index hurtelhiig awna

console.log(arr.slice(-2));
// hoinoosoo 2r indexees ehlen tasdaj awna

// slice(startIndex, endIndex) tuhain array-iin ehleh bolon duusah index zaaj ogon shine array-n huulbar uusgene. undsen array-d yamr negen oorchlolt onmous oruuldaggui

console.log("------------------------------");

// splice
const ar1 = ['dawaa', 'lkhagwa', 'purew', 'byamba'];

ar1.slice(1, 0, 'myagmar');
// 1 deh index deer shineer utga nemeh uildel 
console.log(ar1);
// [dawaa, myagmar, lkhagwa, purew, byamba]

ar1.splice(4, 1, 'baasan');
// 4 doh index deh utgiig solij baina
console.log(ar1);
// [dawaa, myagmar, lkhagwa, purew, baasan]

console.log("-------------------");

// split
const str = 'arwan yasn yasaan trwaga';

const words = str.split(' ');
console.log(words);
// ["arwan", "yasn", "yasaan", "trwaga"]

const chars = str.split('');
console.log(chars[1]);
// "r"

const strCopy = str.split();
console.log(strCopy); 
// ["arwan yasn yasaan trwaga"]

// split(pattern) tuhain string-g todorhoi zaasan pattern bureer taslaj shineer array uusgene

console.log("-------------------");

// replace and replaceall
const p = 'she sells seashells by the seashore';

console.log(p.replace('sea', 'wind'));
// "she sells windshells by the seashore"

console.log(p.replaceAll('sea', 'wind'));
// "she sells windshells by the windshore"

// replace(pattern, replacement) zowhon ehnii oldson string-g shinechlen solidog
// replaceAll(pattern, replacement) oldson buh string-g shinechlen solidog