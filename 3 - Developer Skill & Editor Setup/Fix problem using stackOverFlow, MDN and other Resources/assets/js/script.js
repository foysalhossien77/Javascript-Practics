
//Problem 1:
//We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - what is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temp?
// -What's a sensor error? And what to do?

// 2) Breaking up into sub problem
// -How to ignore errors?
// -Find max value in temp array
// -Find min value in temp array
// -Subtract min from max (Amplitude) and return it

const calcTemp = function (value) {
  let max = value[0];
  let min = value[0];
  for (let i = 0; i < value.length; i++) {
    const currentTemp = value[i];
    if (typeof currentTemp !== "number") continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(min, max);
  return max - min;
};
const amplitude = calcTemp(temperature);
console.log(amplitude);


//Problem: 02
//Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice: NO! just merge two arrays

// 2) Breaking up into sub - problems
// - Merge 2 arrays?

const calcTempNew = function (value1, value2) {

    const value = value1.concat(value2);
    console.log(value);

    let max = value[0];
    let min = value[0];
    for (let i = 0; i < value.length; i++) {
      const currentTemp = value[i];
      if (typeof currentTemp !== "number") continue;
  
      if (currentTemp > max) max = currentTemp;
      if (currentTemp < min) min = currentTemp;
    }
    console.log(min, max);
    return max - min;
  };
  const amplitudeNew = calcTempNew(['foysal', 'saikd', 'robin'], [22, 23,24]);
  console.log(amplitudeNew);