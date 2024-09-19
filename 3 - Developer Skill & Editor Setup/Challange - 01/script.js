"use strict";

//////////////////////////////////////////
//Coding Challenge #1

/* Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] whill print "...17°C in 1 days... 21°C in 2 days ... 23°C in 3 days..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it us into sub-problem!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4] */

//Understand the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

//Devide into sub problem
// - Transform array into string
// - Transform each element to string with °C
// - String needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to consloe

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}°C in 1 days... ${data1[1]}°C in 2 days ... ${data1[2]}°C in 3 days...`);

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += ` ${arr[i]}°C in ${i + 1} Days ...`;
  }
  console.log('...' + str);
};

printForecast(data1);