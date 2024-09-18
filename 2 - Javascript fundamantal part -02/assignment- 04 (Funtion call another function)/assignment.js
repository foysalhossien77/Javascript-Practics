// 'use strict' 


// function cutFruitPieces(fruit) {
//     return fruit * 5;
// }
 
// const fruitGenerator = function (apples, oragnes) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oragnes);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//     return juice;
// }

// const makeJuice = fruitGenerator(3, 4);
// console.log(makeJuice);


function fruitPieces (fruitTransfer) {
    return fruitTransfer * 3;
}


const fruitProcessor = function (lemon, goava) {
    const lemonPieces = fruitPieces(lemon);
    const goavaPieces = fruitPieces(goava);
    const drinks = `Drinks prepare with ${lemonPieces} pieces of lemon and ${goavaPieces} pieces of goava`;
    return drinks;
}

const fruitProduce = fruitProcessor(4, 3);
console.log(fruitProduce);