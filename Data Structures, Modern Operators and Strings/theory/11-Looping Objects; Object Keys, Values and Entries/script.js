"use strict";

const institute = {
  name: "Dhaka Polythecnic Institute",
  location: "Tejgoan, Dhaka - 1208",
  depertment: [
    "Electrical",
    "Computer",
    "Civil",
    "Mechanical",
    "Electronics",
    "Automobile",
    "Power",
    "RAC",
    "Environment",
  ],
  shift: ["First", "Second"],
  group: ["A", "B", "C"],

  openingTime: {
    firstShift: {
      open: 0,
      close: 18,
    },
    secondShift: {
      open: 12,
      close: 22,
    },
    nightShift: {
      open: 18,
      close: 24,
    },
  },
};

/////////////////Looping Object: Objec Keys, Values and Entries..................

//Property NAMES
const properties = Object.keys(institute.openingTime);
console.log(properties);

let openStr = `There are ${properties.length} shift in our institute: `;

for (const classPeriod of properties) {
  openStr += `${classPeriod} ,`;
}
console.log(openStr);

//Property Values
const values = Object.values(institute.openingTime);
console.log(values);

//Entries Object
const entries = Object.entries(institute.openingTime);
console.log(entries);

for (const [shift, {open, close}] of entries) {
  console.log(`${shift} will open at ${open} and close at ${close}`);
}
