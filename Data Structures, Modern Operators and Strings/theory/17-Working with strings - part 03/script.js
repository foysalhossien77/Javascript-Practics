"use strict";

//Split and Join
console.log("a+veary+nice+srting".split("+")); //Here the strings are added so they are separated to add the value of split. But if I had given the value space they would have been added



console.log("Foysal Hossien".split(" ")); //Here the strings are separate so they are separated to give the value space of split. But if I had added the values ​​in the split method they would have been added

const [firstName, lastName] = "Foysal Hossien".split(" ");
console.log(firstName);
console.log(lastName);
const fullName = ["MD.", firstName, lastName.toUpperCase()].join(" "); //The join method is used to join strings
console.log(fullName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};
capitalizeName("foysal hossien and subhe sadik");
capitalizeName("sadik is happy to meet anamarzia");

//Padding
const message = "Go to gate 23";
console.log(message.padStart(25, "+").padEnd(35, "+"));
console.log("Foysal Hossien".padStart(20, "-").padEnd(30, "-"));

//Example
const maskCreditCard = function (number) {
  // const STR = number + "";
  const str = String(number);
  const lastFourDigit = str.slice(-4);
  return lastFourDigit.padStart(str.length, "*");
};
console.log(maskCreditCard(5457625445));
console.log(maskCreditCard(545762548945548));
console.log(maskCreditCard("452541365645632547"));

//Repeat
const message2 = "Bad waether... All Departues Delayed...";
console.log(message2.repeat(5));

//Example
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈".repeat(n)}`);
};
planesInLine(3);
planesInLine(7);
planesInLine(11);
