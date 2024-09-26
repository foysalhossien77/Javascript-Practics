'use strict'

const institute = {
 name: 'Dhaka Polythecnic Institute',
 location: 'Tejgoan, Dhaka - 1208',
 depertment: ['Electronics', 'Electrical', 'Computer', 'Civil', 'Automobile', 'Mechanical'],
 shift: ['First', 'Second'],
 group: ['A', 'B', 'C'],

 admission: function (FirstChoose, SecondChoose) {
  return [this.depertment[FirstChoose], this.depertment[SecondChoose]];
 }
}

//Normal arrys
const arr = [2, 3, 4, 5];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const d = arr[3];
console.log(a, b, c, d);

//Destructure arrays
const [w, x, y, z] = arr;
console.log(w, x, y, z);
console.log(arr);

let [first, second] = institute.depertment;
console.log(first, second);

//Switch value normaly

const temporary = first;
first = second;
second = temporary;
console.log(first, second);


const [one, , two] = institute.depertment;
console.log(one, two);

let [primary, , , secondary] = institute.depertment;
console.log(primary, secondary);

//Switch destructuring arrays

[primary , secondary] = [secondary, primary];
console.log(primary, secondary);

const [FirstChoose, SecondChoose] = institute.admission(3, 4);
console.log(FirstChoose, SecondChoose);

//Nested Destructuring

const nestedDepertment = ['Civil', 'Electrical', 'Computer', ['Programming', 'Networking', 'Operating']];

const [first1, , second1, [third, , fourth]] = nestedDepertment;
console.log(first1, second1, third, fourth);

//Default Values
const [p, q, r] = [10, 20];
console.log(p, q, r);

const [s = 10, t = 10, v = 10] = [30, 40];
console.log(s, t, v);