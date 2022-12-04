// n - д prompt  ашиглан утга оруулахад n*n харьцаатай дөрвөлжин хэвлэх.


let n = 5, 
    space = "";

for (let row = 0; row < n; row++) {
  for (let col = 0; col < n; col++) {
    if (row === 0 || row === n - 1) {
      space += "*";
    } else {
      if (col === 0 || col === n - 1) {
        space += "*";
      }else {
        space += " ";
      }
    }
  }
  space += "\n";
}
console.log(space);
