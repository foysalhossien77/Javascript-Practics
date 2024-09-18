'use strict'

// const populations = [171, 333, 1441, 250];

// if(populations.length === 4) {
//     console.log(true);
// } else {
//     console.log(false);
// }

const mySelf = ['Subhe', 'Sadik', 2024 - 2002, 'Programmer'];
console.log(mySelf);
console.log(mySelf[0]);
console.log(mySelf[1]);
console.log(mySelf.length);
console.log(mySelf[mySelf.length - 1]);
console.log(mySelf[mySelf.length - 2]);

const introMySelf = `Hey! my name is ${mySelf[0]} ${mySelf[1]}. I'm ${mySelf[2]} years old. I'm a ${mySelf[mySelf.length - 1]}`;

console.log(introMySelf);

const myHobby = ['Programming', 'Listening to music', 'Football', 'Sleeping', 'Internet Browsing'];
console.log(myHobby);
myHobby[myHobby.length - 1] = 'Joking';  //I can change arrays single item when i use const
myHobby[2] = 'Playing'; //I can change arrays single item when i use const
console.log(myHobby);


// Reference
// myHobby = ['Party', 'Studing', 'Fishing', 'Gardening']; //But i can't change full arrays when i use const


const introduceMyFamily = function (name, age) {
    const data = `I'm ${name}, and i'm ${2024 - age} years old`;
    return data;
}

const allName = ['Foysal Hossien', 'Anna Marzia', 'Parul Akther', 'Ali Ashad', 'Forhad Hossian'];
const allBirthYear = [2002, 2001, 1978, 1976, 1998];

const Me = introduceMyFamily(allName[0], allBirthYear[0]);
const Mim = introduceMyFamily(allName[1], allBirthYear[1]);
const Ammu = introduceMyFamily(allName[2], allBirthYear[2]);
const Abbu = introduceMyFamily(allName[allName.length - 2], allBirthYear[allBirthYear.length - 2]);
const Vaiya = introduceMyFamily(allName[allName.length - 1], allBirthYear[allBirthYear.length - 1]);

console.log(Me);
console.log(Mim);
console.log(Ammu);
console.log(Abbu);
console.log(Vaiya);
