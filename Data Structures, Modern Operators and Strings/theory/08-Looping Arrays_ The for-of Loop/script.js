"use strict";

const institute = {
  name: "Dhaka Polythecnic Institute",
  location: "Tejgoan, Dhaka - 1208",
  majorDepertment: ["Electrical", "Computer", "Civil", "Mechanical"],
  otherDepertment: ["Electronics", "Automobile", "Power", "RAC", "Environment"],
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
};

/////////////////Looping Arrays: The for-of Loop..................

const allDepertment = [
  ...institute.majorDepertment,
  ...institute.otherDepertment,
];
console.log(allDepertment);
for (const subject of allDepertment) console.log(subject);

for (const subject of allDepertment.entries()) {
  console.log(subject);
}

for (const subject of allDepertment.entries()) {
  console.log(`${subject[0] + 1}: ${subject[1]} `);
}

console.log('///////////////////Destructuring Method//////////////////');

//Destructuring method
for (const [SN, El] of allDepertment.entries()) {
  console.log(`${SN + 1}: ${El}`);
}
