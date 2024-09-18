// Conversion

let digit = '965';
digit = Number(digit)
console.log(typeof digit);

let randomNumber = 245;
randomNumber = String(randomNumber);
console.log(randomNumber);

// When we conversion the datatype main value does't change.


// Coercion

console.log(10+'54') //Ans is = 1054 | when we add different datatype like number and string they does't add in regular besis. In this time number data type automatic convert to string data type. and add them like concatinate. lastly, the final output contains the data type string.

console.log(54-'10') //Ans is = 44 | when we subtract different datatype like number and string they subtract regular besis. In this time string data type automatic convert to number  data type. and subtract them. lastly, the final output contains the data type number.