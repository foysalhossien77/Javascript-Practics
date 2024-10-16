"use strict";

const institute = new Map();
// console.log(institute);

//Maps are one kind of object. Maps have different kind of datatypes key, like? string, number, boolean etc. which does not belong to the object. Object can only use string datatype. Cannot use other datatypes for keys.

institute.set("name", "Pencilbox IT Institute"); //set method adds elements to the Maps.
institute.set("location", "Karwanbazar, Dhaka - 1208");
institute.set(1, "5th Floor");
institute.set(2, "Bitbards");
institute
  .set("course", [
    "Web design and development for freelancing",
    "Digital marketing for freelancing",
    "Graphics design for freelancing",
  ])
  .set("open", 9)
  .set("close", 17)
  .set(true, "We are Open")
  .set(false, "We are Closed");

console.log(institute.get("name")); //In order to read data from a map we use the 'get' method.
console.log(institute.get(true));
console.log(institute.get("true")); //Datatype matters, If the datatypes are not similar. The result will show undefined.
console.log(institute.get(2));

const time = 12;
console.log(
  institute.get(time > institute.get("open") && time < institute.get("close"))
);

console.log(institute.has("course")); //has method checks if any data exists in the map. It shows true if any element is in it. And if any element is not in it, it returns false. this is similar to arrays include method.
console.log(institute.has("depertment"));

institute.delete("location"); //This method delete elements to the map
// institute.clear(); // This method remove all element from the map

console.log(institute.size); ////size shows number of element in map

//We can use arrays in map
const arr = ["Rayhan", "Amit", "Ifti"];
institute.set(arr, "My Friends");

//Even we can use DOM in maps
institute.set(document.querySelector('h1'), 'Webpage Heading')

console.log(institute);
