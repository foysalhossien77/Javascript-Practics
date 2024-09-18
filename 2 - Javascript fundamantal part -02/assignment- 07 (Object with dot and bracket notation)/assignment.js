'use strict'

const Foysal = {
  firstName:'Foysal',
  lastName: 'Hossien',
  age: 2024 - 2002,
  job: 'Student',
  friends: ['Amit', 'Ifti', 'Rayhan']
}
console.log(Foysal);

//Dot notation, Dot notation is use for object real data
console.log(Foysal.age);
console.log(Foysal.lastName);
console.log(Foysal.friends);

//[Bracket] notation, Bracket notation is use for any expression in object and also use for object real data. but when it use for object real data then use the property name in a string "" / '' . like? ['fristName']

//for object real data
console.log(Foysal['job']);
console.log(Foysal['lastName']);

//for expression in object
const commonName = 'Name';
console.log(Foysal['first' + commonName]);

const userInterest = prompt("What do you want to know about me? Example: firstName, lastName, age, job, friends. If you want to know about me choose between them");


if(Foysal[userInterest]) {
  console.log(Foysal[userInterest]);
} else {
  console.log('Wrong request! please select between them (firstName, lastName, age, job, friends)')
}
 
//Add new property in object

//with dot (.) notation
Foysal.location = 'Narayangonj, Dhaka'

//with bracket [] notation
Foysal['facebook'] = 'subhesadik77.officials'

console.log(Foysal);





// const aboutMe = {
//   fullName: 'Foysal Hossien',
//   fatherName: 'Ali Ashad',
//   motherName: 'Parul Akther',
//   brotherName: 'Forhad Hossain'
// }
// console.log(aboutMe);
// console.log(aboutMe.motherName);

// console.log(aboutMe['brotherName']);

// const wantToKnow = prompt("What do you want to know abou me? fullName, fatherName, mohterName, brotherName choose between them.")

// // console.log(aboutMe[wantToKnow]);
// console.log(aboutMe[wantToKnow]);


//Challange

// const Foysal = {
//     firstName:'Foysal',
//     lastName: 'Hossien',
//     age: 2024 - 2002,
//     job: 'Student',
//     friends: ['Amit', 'Ifti', 'Rayhan']
//   }

//   console.log(`${Foysal.firstName} has ${Foysal.friends.length} friends, and his best friends is called ${Foysal.friends[0]}`);