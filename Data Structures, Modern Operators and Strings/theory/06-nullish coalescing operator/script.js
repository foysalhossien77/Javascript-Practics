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

////////////////////////////////////////////////////////////////////

console.log('----- Nullish Coalescing Operator -----');

institute.numStudent = 0;

const students = institute.numStudent || 35;
console.log(students);

//Nullish: null and undefined (NOT 0 or '' and This is similar to OR operator)
const currectStudents = institute.numStudent ?? 30;
console.log(currectStudents);


