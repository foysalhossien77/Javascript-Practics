"use strict";

const fullName = "Foysal Hossien";
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

//Fix capitalization problem
const fristName = "sAdiK";
const fristNameLower = fristName.toLowerCase();
const firstNameCorrect =
  fristNameLower[0].toUpperCase() + fristNameLower.slice(1);
console.log(firstNameCorrect);

//Comparing emails
const email = "foysalhossien77@gmail.com";
const userEmail = " FoySalHOssieN77@gmaiL.cOm \n";
console.log(userEmail);

/*const lowerUserEmail = userEmail.toLowerCase();
const trimmedUserEmail = lowerUserEmail.trim(); //Trim method use for remove all white space
console.log(trimmedUserEmail);*/

const normalizeEmail = userEmail.toLowerCase().trim();
console.log(normalizeEmail);

//Replacing
const keyBoradPrice = "1599৳";
const keyBoradPriceUS = keyBoradPrice.replace("৳", "$");
console.log(keyBoradPriceUS);

const announcement =
  "All pessengers some to boaeding door 23. Boarding door 23";
console.log(announcement.replace("door", "gate"));
console.log(announcement.replace(/door/g, "gate")); //Regular expression
console.log(announcement.replaceAll("door", "gate"));

//Boolien
const bookName = "How to talk to anyone";
console.log(bookName.includes("talk"));
console.log(bookName.includes("anybody"));
console.log(bookName.startsWith("Ho"));
console.log(bookName.startsWith("to talk"));
console.log(bookName.endsWith("anyone"));
console.log(bookName.endsWith("any"));

if (bookName.startsWith("How") && bookName.endsWith("anyone")) {
  console.log("The book writter is leil lowndes");
}

//Practics exercise
const familyFunction = function (items) {
  const securtiyProcess = items.toLowerCase();
  if (securtiyProcess.includes("knife") || securtiyProcess.includes("gun")) {
    console.log("You are NOT allowed on the Family Function");
  } else {
    console.log("Welcome to our Family Function");
  }
};
familyFunction("I have a Laptop, some Food and a Pocket Knife");
familyFunction("Shocks and camera");
familyFunction("Got some snacks and a gun for protection");
