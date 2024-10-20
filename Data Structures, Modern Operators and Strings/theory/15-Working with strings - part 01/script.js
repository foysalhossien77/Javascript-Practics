"use strict";

const wish = "I want to be a best programmer in the world";
const password = "HK254T8";

console.log(password[0]);
console.log(password[3]);
console.log(Number(password[4]));
console.log(password[5]);
console.log(password.length);

console.log("K3S94"[0]);
console.log("K3S94"[1]);

console.log(wish.length);

//Index of method
console.log(wish.indexOf("w"));
console.log(wish.indexOf("p"));
console.log(wish.indexOf(" "));
console.log(wish.lastIndexOf(" "));
console.log(wish.lastIndexOf("w"));
console.log(wish.lastIndexOf("a"));
console.log(wish.indexOf("a"));

// console.log(wish.indexOf('Programmer')); //outpurt = -1, Because this is case sensetive
console.log(wish.indexOf("programmer"));

//Slice method
console.log(wish.slice(6));
console.log(wish.slice(7)); //slice method will take all the next elements including the number I say.
console.log(wish.slice(25));

console.log(wish.slice(11, 31));
console.log(wish.slice(2, 5)); //But if I apply double input it will take element between two numbers. In that case the last numbered element will not be included.

console.log(wish.slice(0, wish.lastIndexOf(" ")));
console.log(wish.slice(wish.lastIndexOf(" ") + 1));

console.log(wish.slice(-2)); //If I give nagetive value, then it starts working to end in same process.
console.log(wish.slice(12, -8));

//Example
const examSitPosition = function (regNumber) {
  const sitPlan = regNumber.slice(0, 2);

  if(sitPlan === 'LE') {
    console.log('Your seat is on the left side of the class');
  } else if (sitPlan === 'CE') {
    console.log('Your seat is on the center of the class');
  } else {
    console.log('Your seat is on the right side of the class');
  }
};
examSitPosition("LE-25417");
examSitPosition("CE-25418");
examSitPosition("RI-25419");

console.log(new String ('Foysal')); //Whenever we call a method on a string, javascript convert that into a object. And then when the operation is done the object is converted back to a regular string primitive. 
console.log(typeof new String ('Foysal'));
console.log(typeof new String ('Foysal').slice(1));
