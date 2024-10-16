"use strict";

//Direct way to add element in map
const question = new Map([
  ["question", "what is the best programming  language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "PHP"],
  [4, "Javascript"],
  ["correct", 4],
  [true, "Correct answer"],
  [false, "Try again"],
]);
console.log(question);

//Object
const mySelf = {
  name: "Foysal Hossien",
  age: 22,
  employed: false,
  familyMember: ["Mother", "Older Brother", "Grand-Mother"],
};
console.log(mySelf);

//Convert object to map
console.log(Object.entries(mySelf));

//Convert [Tricks: Whenever you need a map, when you already have an object. Then use these tricks]
const mySelfMap = new Map(Object.entries(mySelf));
console.log(mySelfMap);

console.log(
  "--------------------------------Quiz App------------------------------"
);

//Iteration [Maps are also iterables, And so the for loop is also available for them]
//Quiz app

console.log(question.get("question"));

for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key} is : ${value}`);
  }
}

// const inputAnswer = Number(prompt("Which number is correct answer"));
const inputAnswer = 4;

//Solution
// if (inputAnswer === 4) {
//   console.log(question.get(true));
// } else if (inputAnswer > 4 || inputAnswer < 1) {
//   console.log("Please choose between 1-4 option");
// } else {
//   console.log(question.get(false));
// }

//Anoter one solution
console.log(question.get(question.get('correct') === inputAnswer));

//Convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);


console.log('------------------------------------------------------------');
console.log(question.entries());
console.log(question.keys());
console.log(question.values());