'use strict'

//For loop

// for(let i = 1; i <= 5; i++) {
//   console.log(`Hehe, i can do this ${i}`);
// }

//While loop = repet some code while some condition is true

// let i = 0; //we need to declare counter outside of the loop
// while(i <= 5) { //It will run while this condition is ture.
//   console.log(`While: Hehe, i can do this ${i}`); 
//   i++; //increment and decrement declare end of the block
// }

//Here is an example

let dice = Math.trunc(Math.random() * 10) + 1;

while(dice === 7) { //when dice is equal to 7 then the block is execute, and when dice is not equal to 7 then the block is not execute
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 10) + 1;
}

while(dice !== 9) { //when dice is equal to 9 then the block is not execute, and when dice is not equal to 9 then the block is execute
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 10) + 1;

  if(dice === 9) console.log('Loop is end');
}

//When you can't need any counter, you can use while loop any time.
//whenever you dont know beforehand how many iterations the loop will have. so, in that situation the while loop is the right tool for the job


//Here is another example (BroCode);

// let fullName = '';

// while(fullName === '' || fullName === null) {
//   fullName = prompt('Enter your Full Name');
// }
// console.log(`Hello ${fullName}`);


//Do while loop 

// let fullName;

// do {
//   fullName = prompt('Enter your Full Name'); //the block is alltime execute 
// } while(fullName === '' || fullName === null) //And then it check the condition
// console.log(`Hello ${fullName}`);



//Here is another example

// let logedIn = true;
// let email;
// let password;

// while(!logedIn) {
//   email = prompt('Enter your email');
//   password = prompt('Enter your Password');

//   if(email === 'subhesadik77@gmail.com' && password === 'sadik77@@') {
//     logedIn = true;
//     console.log(`Congress! You're Loged In`);
//   } else {
//     console.log(`Invalid credential, Please Try again`);
//   }
// }