//There are 5 falsy values in Javascript : 0, '' (empty string), undefined, null, NaN (Not a Number)

//When there is no logical value. Then the normal value is converted to logical value in case of logical operation. Then if the logical value above is false then the boolean value is false. And if the above value is not false, then the value is true. let's see this with example

console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(NaN));

const money = 0; //for changess you can use value above 0

if(money) {
  console.log('I have some money');
} else {
  console.log('I have no money');
}

let house; //for changess you can define your house.

if(house) {
  console.log('I have home for stay');
} else {
  console.log('I have no home to stay');
}

const name = ''; //for changess you can use your name.

if(name) {
 console.log('I have name and this is Subhe Sadik')
} else {
 console.log('I have no name!')
}