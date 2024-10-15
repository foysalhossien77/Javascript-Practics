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
  },

  firstChoice: function(first, ...others) {
    console.log(`Your first choice is ${first}`);
    console.log(`Your optional choice is ${others}`);
  }
};

//////////Rest Pattern and Parameters////////////////
//Rest operator convert value to an array
//Spread operator convert arrays to single value


//The spread and rest syntax both look exactly the same. But they work in opposite ways depending on where they are used. the spread operator is used where we would otherwise write values, separated by a comma. On the other hand the rest pettern is basically used where we would otherwise write variable names separated by commas. So, again the rest pattern can be used where we would write variable names, separated by commas and not values separated by commas


//Spread operator use right side of an Assignment oprerator =
const arr = [1, 2, 3, 4, 5];
const newArr = [10, 20, ...arr];
console.log(...newArr);

//Rest pettern use left side of an Assignment operator =
const [a, b, ...c] = [10, 20, 30, 40, 50];
console.log(a, b, c);

const [dep1, , , , , dep2, group1, ...gropuNew] = [...institute.depertment, ...institute.group];
console.log(dep1, dep2, group1, gropuNew);

//Object
const {firstShift, ...otherShift} = institute.openingTime;
console.log(firstShift, otherShift);

//Function
const addition = function(...numbers) { //rest peramitter
    console.log(numbers);
};

addition(4, 9, 23, 34);
addition(11, 22, 33, 44, 55, 66, 77);

////////////
const addition1 = function(...numbers) { //rest peramitter, Here we (x) pack the values back again
  let sum = 0;
  for(let i = 0; i<numbers.length; i++) {
    sum += numbers[i];
  };
  console.log(sum);
};

addition1(34, 12, 93, 73);
addition1(38, 39, 23, 93, 443);

const x = [10, 20, 30, 40, 50];
addition1(x); //Here 'x' is a array value. that's why rest pettern doesn't work
addition1(...x); //Here we (x) unpack the values 

//Calling object method function
// institute.firstChoice('Computer', 'Electrical', 'Electronics', 'Automobile');
institute.firstChoice(institute.depertment[2], institute.depertment[0], institute.depertment[1], institute.depertment[4]);