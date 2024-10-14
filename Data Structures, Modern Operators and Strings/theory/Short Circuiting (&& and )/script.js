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
    nightShift: {
      open: 19,
      close: 23,
    },
  },

  admission: function (FirstChoose, SecondChoose) {
    return [this.depertment[FirstChoose], this.depertment[SecondChoose]];
  }
};


/////We can use OR operator to set default values, and we can use AND operator to execute code in the second opreand if the first one is true

//Use ANY data types, return ANY data type, short-ciucuiting
console.log('----- OR -----');

//If there is a falsy value then or operator skip that. and when they find a truthy value then they execute that and skip other truthy values

/////OR operator will return the first truthy value of all the operandes, or simply the last value if all of them are falsy

console.log('' || 'Foysal');
console.log(20 || 0);
console.log(undefined || null);
console.log('' || 0 || null || undefined || 'Sadik' || 23 || true);
console.log(false || true);
console.log(undefined || NaN);
console.log(NaN || null);
console.log(null || undefined);
//Example
const student1 = institute.numStudent ? institute.numStudent : 80;
console.log(student1);

institute.numStudent = 100;
const student2 = institute.numStudent ? institute.numStudent : 70;
console.log(student2);

const teacher1 = institute.numTeacher || 35;
console.log(teacher1);

institute.numTeacher = 40;
const teache2 = institute.numTeacher || 30;
console.log(teache2);

//////////////////////////////////////////////////
console.log('----- AND -----');

//The AND operator will return the first falsy value, or the last value if all of them are truthy values.

console.log(0 && 'Foysal');
console.log(29 && true && 'Sadik' && null && 'Foysal');
console.log(10 && 'Foysal' && true && 29 && 'Sadik');

//Example

institute.numTeacher1 = 40;
const teache3 = true && 29 && institute.numTeacher;
console.log(teache3);