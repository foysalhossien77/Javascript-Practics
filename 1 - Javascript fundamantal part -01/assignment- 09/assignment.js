// const digit = 3;

// switch (digit) {
//   case 1:
//     console.log('One');
//     break;

//   case 2:
//     console.log('Two');
//     break;

//   case 3:
//     console.log('Three');
//     break;

//   case 4:
//     console.log('Four');
//     break;

//   case 5:
//     console.log('Five');

//   default:
//     console.log('Please type a number between 1-5')
// }

const inputBooksName = prompt("Type your favourite book name, and see details");

switch (inputBooksName) {
  case "book_1":
  case "bookOne":
    console.log("Available in our store");
    break;

  case "book_2":
    console.log("Available in our store");
    break;

  case "book_3":
    console.log("Opps sorry! this book is stock out");
    break;

  case "book_4":
    console.log("Available in our store");
    break;

  case "book_5":
  case "bookFive":
    console.log("Opps sorry! this book is stock out");
    break;

  default:
    console.log("Sorry, i don't have any information about this book");
}
