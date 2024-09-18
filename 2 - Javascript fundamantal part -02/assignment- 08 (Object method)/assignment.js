'use strict'

// const Foysal = {
//     firstName:'Foysal',
//     lastName: 'Hossien',
//     birthYear: 2002,
//     job: 'Student',
//     friends: ['Amit', 'Ifti', 'Rayhan'],

//     ageCalculated: function () {
//       console.log(this);
//         return 2024 - this.birthYear;
//     }  

    //in object always use function expression. function declaration doesn't work object.

    //   }
//   console.log(Foysal);


//   console.log(Foysal.ageCalculated());

// console.log(Foysal['ageCalculated'](Foysal.birthYear));

// Challange

const Foysal = {
  firstName:'Foysal',
  lastName: 'Hossien',
  birthYear: 2002,
  job: 'Student',
  friends: ['Amit', 'Ifti', 'Rayhan'],

  calcAge: function() {
     return 2024 - this.birthYear;  //when i use this keyword into a object then it's work like an object name. it's provide all of this object values. Example: this.birthDay ===  Foysal.birthDay, this.firstName === Foysal.firstName.
  },

  hasDriversLicense: true,

  getSummary: function() {
    const summaryData = `${this.firstName} is a ${this.calcAge()}-year's old ${this.job}, and he has ${this.hasDriversLicense === true ? 'a' : 'no'} driver's license`;
    return summaryData; //Look, i use 'this' keyword replace with object name (Foysal). because, in this position 'this' keyword is so comfortable. when i change the object name 'this' keyword automatically adjust. but if i use object name here then when i change object name then i had to do change here. 
  }
}

//Reference. when i use 'this' keyword outside of object. then 'this' keyword doesn't work. they produce a value which is called undefined.
// console.log(`${this.firstName} is a ${Foysal.calcAge()}-year's old ${this.job}, and he has ${Foysal.hasDriversLicense === true ? 'a' : 'no'} driver's license`)

//But when i use object name outside of object then it work properly.
// console.log(`${Foysal.firstName} is a ${Foysal.calcAge()}-year's old ${Foysal.job}, and he has ${Foysal.hasDriversLicense === true ? 'a' : 'no'} driver's license`)

console.log(Foysal.getSummary());

