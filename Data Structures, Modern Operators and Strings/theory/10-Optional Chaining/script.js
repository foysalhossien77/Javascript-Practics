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
  admission(FirstChoose, SecondChoose) {
    return [this.depertment[FirstChoose], this.depertment[SecondChoose]];
  },
};

/////////////////Optional Chaining (?.)..................

if (institute.openingTime && institute.openingTime.nightShift)
  console.log(institute.openingTime.nightShift.close);

// if (institute.openingTime.secondShift) console.log(institute.openingTime.secondShift.open);  (Work)

// console.log(institute.openingTime.nightShift.close); (Error)

//With Optional Chaining (?.)
console.log(institute.openingTime.nightShift?.close);
console.log(institute.openingTime?.nightShift?.close); //Multiple optional chaining

//Example

const classPeriod = [
  "morningShift",
  "firstShift",
  "dayShift",
  "secondShift",
  "nightShift",
];

for (const classSift of classPeriod) {
  const classOpen = institute.openingTime[classSift]?.open ?? "random time";
  console.log(`On ${classSift}, we open at ${classOpen}`);
}

//Methods
console.log(institute.admission?.(4, 5) ?? "Method doesn't exist");
console.log(institute.admissionResult?.(3, 2) ?? "Method doesn't exist"); //When method is not defined, then optional chaining result showed 'undefined'. That's why we use nullish coalescing  operator and move to "Method doesn't exist". Because nullish coalescing operator skip null and undefined values.

//Arrays
const userInfo = [
  { name: "Foysal", email: "foysalhossien77@gmail.com", phone: "01880975734" },
];
console.log(userInfo[0]?.email ?? "User array empty");
console.log(userInfo[0]?.name ?? "User array empty");
console.log(userInfo[0]?.phone ?? "User array empty");
console.log(userInfo[1]?.name ?? "User array empty");
