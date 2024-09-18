'use strict'

const mark = {
   fullName: 'Mark Miller',
   mass: 78,
   height: 1.69,

   calcBMI: function() {
     const bmi = this.mass / (this.height * this.height);
     return bmi;
   }
}

const john = {
   fullName: 'John Smith',
   mass: 92,
   height: 1.95,

   calcBMI: function() {
      const bmi = this.mass / (this.height * this.height);
      return bmi;
   }
}

console.log(mark.calcBMI(), john.calcBMI());

if(mark.calcBMI() > john.calcBMI()) {
   console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})!`);
} else if(mark.calcBMI() < john.calcBMI()) {
   console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})!`);
}


//I complete this challange without any help