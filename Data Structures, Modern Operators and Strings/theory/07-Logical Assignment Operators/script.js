"use strict";

//////////////////////////////////////////////////////////////////////////////

const dhakaPolytechnic = {
  students: 12000,
  automobile: true,
  location: "tejgoan",
};

const comillaPolytechnic = {
  students: 7000,
  automobile: false,
  location: "courtBari",
  politics: "No",
};

//OR Assignment Operator

// dhakaPolytechnic.politics = dhakaPolytechnic.politics || "Yes";
// comillaPolytechnic.politics = comillaPolytechnic.politics || "Yes";

dhakaPolytechnic.politics ||= "Yes"; //output = Yes
comillaPolytechnic.politics ||= "Yes"; //Output = No

console.log(dhakaPolytechnic);
console.log(comillaPolytechnic);

///////////////////////////////////////////////////////////////////////////////

const dhakaPolytechnic1 = {
  students: 12000,
  automobile: true,
  location: "tejgoan",
  award: 0,
};

const comillaPolytechnic1 = {
  students: 7000,
  automobile: false,
  location: "courtBari",
  politics: "No",
};

//Nullish Coalescing Assignment Operator

// dhakaPolytechnic1.award = dhakaPolytechnic1.award ?? 3;
// comillaPolytechnic1.award = comillaPolytechnic1.award ?? 3;

dhakaPolytechnic1.award ??= 5; //Output = 0
comillaPolytechnic1.award ??= 5; //Output = 5

console.log(dhakaPolytechnic1);
console.log(comillaPolytechnic1);

///////////////////////////////////////////////////////////////////////////////////

const dhakaPolytechnic2 = {
  thirdShift: false,
  educationBackground: "Textile",
};

const comillaPolytechnic2 = {
  thirdShift: true,
  hasField: "Yes",
};

//AND Assignment Operator

// dhakaPolytechnic2.educationBackground =
//   dhakaPolytechnic2.educationBackground && "Diploma"; //Output = Diploma
// comillaPolytechnic2.educationBackground =
//   comillaPolytechnic2.educationBackground && "Diploma"; //Output = Undefined

dhakaPolytechnic2.educationBackground &&= "Diploma"; //Output = Diploma
comillaPolytechnic2.educationBackground &&= "Diploma"; //Output = no output

console.log(dhakaPolytechnic2);
console.log(comillaPolytechnic2);
