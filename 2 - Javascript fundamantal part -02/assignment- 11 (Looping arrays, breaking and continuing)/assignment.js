'use strict'

//-------------------------- Loop breaking and continuing -----------------------------
console.log('------------------------------------ Loop breaking and continuing ---------------------------------');



for(let i = 1; i <= 10; i++) {
  console.log(i);
}

//breaking

console.log('-----Breaking-----')

for(let i = 1; i <= 10; i++) {
  if(i === 5) {break;}
  console.log(i);
}

//Continuing / skip

console.log('-----Continuing-----')

for(let i = 1; i <= 10; i++) {
  if(i === 5) {continue;}
  console.log(i);
}

//Another example

const sadik = [
  22,
  true,
  'Subhe Sadik',
  ['Munna', 'Tuhin', 'Hridoy'],
  'Programmer',
  'Sleeping'
]

console.log(sadik);

//Continuing / skip

console.log('---Pring Only String---')

for(let i = 0; i < sadik.length; i++) {
  if(typeof(sadik[i]) !== 'string') continue; //when condition is false they executed, but when contition is true then they 'Skip' the element. 

  console.log(sadik[i], typeof(sadik[i])); //when condition is true then this line of code doesn't execute. but when condition is false then the line of code is execute.
}

//breaking

console.log('---Break with object---')

for(let i = 0; i < sadik.length; i++) {
  if(typeof(sadik[i]) === 'object') break; //when condition is false they executed, but when contition is true then they stop executeing 

  console.log(sadik[i], typeof(sadik[i])); //when condition is true then loops is turned off and never execute. but when condition is false then the line of code continue running.
}


//------------------------------------ Looping arrays ---------------------------------
console.log('------------------------------------ Looping arrays ---------------------------------');

const birthYear = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2002]
const age = [];

for(let i = 0; i < birthYear.length; i++) { 
  age.push(2022 - birthYear[i]); //This mathod is professional
  // age[i] = birthYear[i]; //Here is another method
}

console.log(age);