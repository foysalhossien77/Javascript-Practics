const scoreDolphins = (59 + 64 + 25) / 3;
const scoreKoalas = (42 + 61 + 57) / 3;

console.log(scoreDolphins, scoreKoalas)

if(scoreDolphins > scoreKoalas && scoreDolphins >= 50) {
  console.log('Dolphins win the trophy');
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 50) {
  console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 50 && scoreKoalas >= 50) {
  console.log("Both win the trophy");
} else {
  console.log('None wins the trophy');
}