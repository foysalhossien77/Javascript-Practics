'use strict' 
 
const worldPopulation = 7900;

// function percentageOfWorld1(country, population) {
//    return `${country} has ${population} million people, so it's about ${(population / worldPopulation) * 100}% of the world population`;
// }

// console.log(percentageOfWorld1('Bangladesh', 171));


const percentageOfWorld2 = function(country, population) {
    return `${country} has ${population} million people, so it's about ${(population / worldPopulation) * 100}% of the world population`;
}

const bangladesh = percentageOfWorld2('Bangladesh', 171);
const china = percentageOfWorld2('China', 1441);
const usa = percentageOfWorld2('USA', 333);

console.log(bangladesh);
console.log(china);
console.log(usa);