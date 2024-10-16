"use strict";

const nameSet = new Set("Sadik");
console.log(nameSet);

const friendsSet = new Set([
  "Foysal",
  "Sadik",
  "Robin",
  "Sadik",
  "Foysal",
  "Robin",
  "Sadik",
]);
console.log(friendsSet); //Sets are unique, it's ignored duplicate data. Sets are similar to arrays, but it's unique.

console.log(friendsSet.size); //size shows number of element in sets, ignoring duplicate element. this is similar to arrays length method.
console.log(friendsSet.has("Sadik")); //has method checks if any data exists in the set. It shows true if any element is in it. And if any element is not in it, it returns false. this is similar to arrays include method.
console.log(friendsSet.has("Munna"));
friendsSet.add("Anamarzia"); //This method adds elements to the set
friendsSet.add("Anamarzia");
console.log(friendsSet);
friendsSet.delete("Robin"); //This method delete elements to the set
console.log(friendsSet);
// friendsSet.clear(); // This method remove all element from the set
console.log(friendsSet);

//Example
const fruits = [
  "Mango",
  "Orange",
  "Banana",
  "Waterlemon",
  "Mango",
  "Waterlemon",
  "Orange",
];
console.log(fruits);

const uniqueFruitsSets = new Set(fruits);
console.log(uniqueFruitsSets);

//Conversion sets to an arrays. [Arrays and sets are iterables. and we know that, spread operator are works all iterables.]

const uniqueFruitsArrays = [...new Set(fruits)];
console.log(uniqueFruitsArrays);

console.log(new Set('Foyssaal').size);

//So as a conclusion to this topic, sets are not intended to replace arrays at all. So whenever you need to store values in order, and that might contain duplicates, always just use arrays. That's also true when you need to really manuputate data, because arrays have access to a lot of great array methods. Now sets are very useful property of being unique. And it's also very easy to interact with sets by using all ot their straightforward methods.