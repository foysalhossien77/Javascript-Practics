function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const bangladesh = describeCountry("Bangladesh", 172, "Dhaka");
const america = describeCountry("America", 193, "New York");
const japan = describeCountry("Japan", 150, "Tokoy");

console.log(bangladesh);
console.log(america);
console.log(japan);
