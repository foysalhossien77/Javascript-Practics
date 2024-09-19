"use strict";

//Constractor function name will create capitalize (Mind it)

function Worker(name, age, areFit, skill) {
  this.name = name;
  this.age = age;
  this.areFit = areFit;
  this.skill = skill;

  this.wiring = function() {
    alert('Your house wiring is prcessed');
  }
}
//this.something is property and before = something is value which is passed by paramitter


//Remember that, when we call constractor function then we need to use 'new' keyword. this is mandatory, otherwise our code will not executed anymore.
const worker1 = new Worker("Mofiz", 37, true, ["Electrical", "architectural"]);
console.log(worker1.name);


// Worker.wiring(); this is not work all all.
worker1.wiring(); //when we use method then we need to declare our generating object not function name.
console.log(worker1);
