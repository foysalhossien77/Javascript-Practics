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

  ////////////Pass object as a peramitter///////////

  admissionDetails: function ({address, time = '12 : 00', favuriteDepertment, fullName = 'Subhe Sadik'}) {
      console.log(`Hello ${fullName}, you're applied ${this.depertment[favuriteDepertment]} depertment in ${time} O'clock from ${address}`);
  }
};

//When we defined values from object
institute.admissionDetails({
    fullName: 'Foysal Hossien',
    time: '10:30',
    favuriteDepertment: 2,
    address: 'Chitangraod, Narayangonj',
});

//when we not defined some values, but peramitter also have default values
institute.admissionDetails({
    address: 'Tejgoan, Dhaka - 1208',
    favuriteDepertment: 3
})

////////////////////////////////////////////////////

//destructuring Object
const { name, openingTime, depertment } = institute;
console.log(name, openingTime, depertment);

//If i want i also change object property names, example below
const {
  name: instituteName,
  openingTime: time,
  depertment: section,
  tags, //Referance...when i declare any name which is not exist in object. then they provide an undefined values
} = institute;
console.log(instituteName, time, section, tags); //Here tags is undefined

//Default values
const { microbiology = [], depertment: courseName = [] } = institute;
console.log(microbiology, courseName);

//Mutating Variables
let a = 121;
let b = 212;
const exchangeData = { a: 15, b: 28, c: 32 };
({ a, b } = exchangeData);
console.log(a, b);

//Nested Object
const {
  secondShift: { open, close },
} = openingTime;
console.log(open, close);

const {
  secondShift: { open: o, close: c },
} = openingTime;
console.log(o, c);
