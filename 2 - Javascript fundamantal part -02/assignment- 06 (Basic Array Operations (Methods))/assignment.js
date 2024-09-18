'use strict'
const friends = ['Amit', 'Ifti', 'Rayhan'];
console.log(friends);
//Add element from end, which is called push method,
//push method is return something, which is array length
const newLength = friends.push('Himu'); //If array method is store in a variable. then check the variable for array length.

console.log(friends);
console.log(newLength); //Like this example. which is chack the lenght of arrays.

//Add element from begaining, which is called unshift method
//unshift method is return something, which is array length
const newLength1 = friends.unshift('Monir');
console.log(friends);
console.log(newLength1);

//Remove element from end. which is called pop method, which is opposite push method.
//pop method is return something. which is return remove element

const removeName = friends.pop(); //If array method is store in a variable. then check the variable for which element is removed.
console.log(friends);
console.log(removeName);

//Remove element from begaining. which is called shift method.
//shitt method is return something. which is return remove element

const removeName1 = friends.shift();
console.log(friends);
console.log(removeName1);
 
// IndexOf() method
console.log(friends.indexOf('Rayhan')); //If any item included in arrays then indexOf() method tell us position of this item. Example : Rayhan is position 2. that's why answer is 2.
console.log(friends.indexOf('Himu')); //When any item not included in arrays then indexOf() method showing us -1. that because which item doesn't exist in this arrays.


// ES6 Method (Includes()): which is simpley return 'true' when if the element in the arrays and 'false' if it's not. and which is test strict equality. I mean datatype and values. that doesn't coercion.
console.log(friends.includes('Rayhan')); 
console.log(friends.includes('Himu'));

//For examples:

if(friends.includes('Ifti')) {
  console.log('Ifti is exist');
} else {
  console.log("Opps! your'e doesn't exist");
}