// Test - 01

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const  heightJohn = 1.95;

const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark, BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

// Test - 02

// const massSadik =  54;
// const heightSadik = 1.82;
// const massMim = 40;
// const heightMim = 1.43;
// const BMISadik = massSadik / (heightSadik * heightSadik);
// const BMIMim = massMim /  (heightMim ** 2);

// console.log(BMISadik, BMIMim);

// const mimLowerBMI = BMISadik > BMIMim;
// console.log(mimLowerBMI);


if(BMIMark > BMIJohn) {
  console.log(`Mark's BMI ${BMIMark} is higher than John's BMI ${BMIJohn}.`);
} else {
  console.log(`John's BMi ${BMIJohn} is higher than Mark's BMI ${BMIMark}.`);
}