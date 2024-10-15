"use strict";

const institute = {
  name: "Dhaka Polythecnic Institute",
  location: "Tejgoan, Dhaka - 1208",
  depertment: [
    "Electronics",
    "Electrical",
    "Computer",
    "Civil",
    "Automobile",
    "Mechanical",
  ],
  shift: ["First", "Second"],
  group: ["A", "B", "C"],

  openingTime: {
    firstShift: {
      open: 10,
      close: 18,
    },
    secondShift: {
      open: 12,
      close: 22,
    },
  },

  admission: function (FirstChoose, SecondChoose) {
    return [this.depertment[FirstChoose], this.depertment[SecondChoose]];
  },

  admissionReciept: function(name, phone, admissionFee) {
    console.log(`Congratulation! ${name}, Your admission process is completely done. Here is your Admission Reciept. And check your detail's. Here is your phone Number: ${phone} and Admission Fee: ${admissionFee} TK`);
  }
};


//////////The Spread Operator (...)////////////////

const numberArrays = [2, 4, 8, 29, 39, 35];

//Normal arrays adding
const unshiftArrays = [1, 3, numberArrays[0], numberArrays[1], numberArrays[2], numberArrays[3], numberArrays[4], numberArrays[5]];
console.log(unshiftArrays);

//Arrays adding with spread operator
const newArrays = [1, 3, ...numberArrays];
console.log(newArrays);

console.log(...newArrays); //when i use spread operator without arrays then output value becomes individual

//Spread operator is use for shallow copy and join element 

//Shallow copy / copy arrays
const depertmentCopy = [...institute.depertment, 'Environment']
console.log(depertmentCopy);
console.log(...depertmentCopy); //spread operator is one kind of destructure

//Joining / join arrays
const joinDataInInstitute = [...institute.depertment, ...institute.shift, ...institute.group];
console.log(joinDataInInstitute);


/////////Spread operator works on so called iterables. Iterables: arrays, strings, map, sets. NOT Object.

//Spread operator with strings
const firstName = 'Foysal';
console.log(...firstName);
const firstName1 = [...firstName, '', 'S'];
console.log(firstName1);
console.log(`${firstName} Hossien`); //This is work
// console.log(`${...firstName} Hossien`); //This is not work, that means spread operator doesn't work in template literal.

//Admission Reciept Function invoking////////
// const inputData = [prompt('Please send your information. Type your fullname'), prompt('Type your Phone number'), prompt('Type your amount')];
// institute.admissionReciept(inputData[0], inputData[1], inputData[2]); 
// institute.admissionReciept(...inputData); //Use Spread operator

//Object

const newInstitute = {foundedIn: 1954, ...institute, founder: 'Foysal Hossien'};
console.log(newInstitute);

//Object copy

const instituteCopy = {...institute};
instituteCopy.name = 'tejgoan Polythecnic Institute';
console.log(institute.name);
console.log(instituteCopy.name);