"use strict";

//Compute property name

const shift = ["firstShift", "secondShift", "nightShift"];

const openingTime = {
 
  //------------------Real One---------------
  // firstShift: {
  //   open: 10,
  //   close: 18,
  // },

  [shift[0]]: { //Compute property name
    open: 10,
    close: 18,
  },
  [shift[1]]: { //Compute property name
    open: 12,
    close: 22,
  },
  [`Night ${6 +2 }PM`]: { //If we want, we can use any expression here.
    open: 18,
    close: 24,
  },
};

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

  //ES6 enhanced Object Literals
  openingTime,

  // admission: function (FirstChoose, SecondChoose) {
  //   return [this.depertment[FirstChoose], this.depertment[SecondChoose]];
  // },

  //Writing methods
  admission(FirstChoose, SecondChoose) {
    return [this.depertment[FirstChoose], this.depertment[SecondChoose]];
  },

  ////////////Pass object as a peramitter///////////

  // admissionDetails: function ({
  //   address,
  //   time = "12 : 00",
  //   favuriteDepertment,
  //   fullName = "Subhe Sadik",
  // }) {
  //   console.log(
  //     `Hello ${fullName}, you're applied ${this.depertment[favuriteDepertment]} depertment in ${time} O'clock from ${address}`
  //   );
  // },

  //Writing methods
  admissionDetails({
    address,
    time = "12 : 00",
    favuriteDepertment,
    fullName = "Subhe Sadik",
  }) {
    console.log(
      `Hello ${fullName}, you're applied ${this.depertment[favuriteDepertment]} depertment in ${time} O'clock from ${address}`
    );
  },
};

// console.log(institute);
