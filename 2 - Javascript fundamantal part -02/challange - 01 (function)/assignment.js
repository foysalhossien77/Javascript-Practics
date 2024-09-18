// const calcAverage = (a, b, c) => (a + b + c) / 3;

// // Test data - 01

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins win the trophy (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas win the tropry (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log("No team win the trophy");
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// // Test data - 01

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);

// checkWinner(scoreDolphins, scoreKoalas);




const calcAverage = (number1, number2, number3) => (number1 + number2 + number3) / 3;
// console.log(calcAverage(10, 20, 30));

// Test data - 01

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if(avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win the trophy (${avgDolphins} vs ${avgKoalas})`);
    } else if(avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win the tropy (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log('No team wins the trophy :D');
    }
}

checkWinner(scoreDolphins, scoreDolphins);
checkWinner(20, 50);



scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

checkWinner(scoreDolphins, scoreKoalas);

