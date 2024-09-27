"use strict";
// function tab() {
//   console.log("Ayline");
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
function calcAge1(birthYear) {
  return 2024 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

// Function expression :
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2);

// Arrow Function:
const calcAge3 = (birthYear) => 2024 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);
