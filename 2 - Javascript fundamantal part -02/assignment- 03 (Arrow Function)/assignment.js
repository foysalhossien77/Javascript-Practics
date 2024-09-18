'use strict' 
 
const worldPopulation = 7900;

const percentageOfWorld = (country, population) => `${country} has ${population} million people, so it's about ${(population / worldPopulation) * 100}% of the world population`;

const bangladesh = percentageOfWorld('Bangladesh', 171);
const chaina = percentageOfWorld('Chaina', 1441);
const usa = percentageOfWorld('USA', 333);

console.log(bangladesh);
console.log(chaina);
console.log(usa);