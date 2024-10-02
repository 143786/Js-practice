"use strict";
// function tab() {
//   console.log(" I love Ayline! ");
// }

// // calling / runnning / invoking the functions

// tab();
// tab();
// tab();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangesJuice = fruitProcessor(2, 4);
// console.log(appleOrangesJuice);

// Function Declaration

// function great(name) {
//   return `Hello, ${name}!`;
// }

// console.log(great("Ayline"));

// great();

// function great() {
//   console.log("Hello!");
// }

// Function Declaration :
// function calcAge1(birthYear) {
//   return 2024 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1);

// // Function expression :
// const calcAge2 = function (birthYear) {
//   return 2024 - birthYear;
// };
// const age2 = calcAge2(1991);
// console.log(age2);

// // Arrow Function:
// const calcAge3 = (birthYear) => 2024 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear) => {
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };

// console.log(yearsUntilRetirement(1991));

// // Arow functions with multi parameters :

// // Functions Calling Other functions:
// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years `);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉 `);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(2023, "AYline"));
// console.log(yearsUntilRetirement(1950, "Nil"));

// function fruitProcessor(apples, oranges) {
//   const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(23, 34);
// console.log(appleOrangeJuice);

// const appleJuice = fruitProcessor(5, 0);

// function fruitProcessor(apples, oranges, kiwis, bananes) {
//   const juice = `juice with ${apples} apples , ${oranges} oranges , ${kiwis} kiwis and ${bananes} bananes.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(4, 0, 0, 0);
// console.log(appleJuice);

// const appleKiwiJuice = fruitProcessor(5, 0, 9, 0);
// console.log(appleKiwiJuice);

// const kiwiOrangeJuice = fruitProcessor(0, 23, 44, 0);
// console.log(kiwiOrangeJuice);

// const appleOrangeKiwiJuice = fruitProcessor(12, 23, 44, 0);
// console.log(appleOrangeKiwiJuice);

// const appleOrangeKiwiBanane = fruitProcessor(1, 2, 3, 4);

// const num = Number("33");

// // function declaration :
// function calcAge1(birthYear) {
//   return 2024 - birthYear;
// }

// const age1 = calcAge1(1991);

// // Function expression :
// const calcAge2 = function (birthYear) {
//   return 2024 - birthYear;
// };

// const age2 = calcAge2(1993);

// // Arrow function :
// const calcAge3 = (birthYear) => 2024 - birthYear;
// const age3 = calcAge3(2023);

// //

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years `;
// };

// const bb = yearsUntilRetirement(1991, "Tabish");
// // console.log(yearsUntilRetirement(1991, "Tabish"));
// // console.log(yearsUntilRetirement(1991, "Tabish"));

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);

  const juice = `juice with ${applePieces} piece of apples and ${orangesPieces} pience of oranges. `;
  return juice;
}

console.log(fruitProcessor(1, 2));
