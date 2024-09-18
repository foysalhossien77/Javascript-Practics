 const hotelRent = 7000;
 const foodsBil = 2800;
 const vatt = (hotelRent >= 5000 && hotelRent <= 10000)  && (foodsBil >= 2500 && foodsBil <=3500) ? (hotelRent + foodsBil) * 0.1 : (hotelRent + foodsBil) * 0.15;

 console.log(`Your hotel rent is ${hotelRent}, foods bill is ${foodsBil}, vatt is ${vatt} and total bill is ${hotelRent + foodsBil + vatt}`);