"use strict";

// const { acceptsEncodings } = require("express/lib/request");

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

// Function Calling other Function :
// function cutFruitPieces(fruit) {
//   return fruit * 5;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangesPieces = cutFruitPieces(oranges);

//   const juice = `juice with ${applePieces} piece of apples and ${orangesPieces} piece of oranges. `;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// // Reviewing functions :
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years.`);
//     return retirement;
//   } else {
//     console.log(`${firstName}  has already retired.`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1991, "Tabish"));
// console.log(yearsUntilRetirement(1960, "Mike"));

/* Arrays => our first DATA Structure: Array is like a big container into which we
 can throw variables and then later reference them. */

// // Add elements :
// const friends = ["Micheal", "Sean", "Hashim"];
// const newLength = friends.push("Dokai");
// console.log(newLength);

// friends.unshift("Shahir");
// console.log(friends);

// // Remove elements :
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf("Sean"));

// const fruits = [];
// fruits.push("banana", "apple", 23);

// console.log(fruits);

// console.log(fruits.includes(23));
// console.log(fruits.includes("banana"));
// console.log(fruits.includes("oranges"));

// if (fruits.includes("apple")) {
//   console.log("you have an apple 🍎");
// }

// const ayline = [
//   "Ayline",
//   "Tabish",
//   "2024 - 2023",
//   "Kalb baba",
//   ["Papa", "Maman"],
//   true,
// ];

// for (let i = 0; ayline.length; i++) {
//   console.log(ayline[i], typeof ayline[i]);
// }

// const years = [1991, 2002, 1993, 2023];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2024 - years[i]);
// }

// console.log(ages);

// const ayline = [
//   "Ayline",
//   "Tabish",
//   "2024 - 2023",
//   "Kalb baba",
//   ["Papa", "Maman", 23, "Victoria"],
//   true,
//   "papa",
//   "maman",
// ];
// 0, 1, ..., 4
// for (let i = 0; ayline.length; i++)
// 4, 3, ..., 0

// for (let i = ayline.length - 1; i >= 0; i--) {
//   console.log(i, ayline[i]);
// }

// // Create a Loop inside a Loop :

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`------ Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(` exercise ${exercise} Lifting weight repetition ${rep} 🏋🏽‍♂️ `);
//   }
// }

/*     ---------- While Loop --------
we can specify the conditions ( it will run while this 
condition is true ) */

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weight repetition ${rep} 🏋🏽‍♂️`);
// }

// let rep = 1;
// while (rep <= 10) {
//   // console.log(` WHILE Lifting weight repetition ${rep} 🏋🏽‍♂️`);
//   rep++;
// }

// // ------- while loop exemple --

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("Loop is about to end...");
// }

// function fruitProcessor(apples, oranges) {
//   // console.log(apples, oranges);
//   const juice = `juice with ${apples} apples  and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));
// console.log(fruitProcessor(23, 33));

// // --------Function déclaration -------
// function calcAge1(birthYear) {
//   return 2024 - birthYear;
// }
// const age1 = calcAge1(1991);

// // ------ FUnction expression -----------
// const calcAge2 = function (birthYear) {
//   return 2024 - birthYear;
// };

// const age2 = calcAge2(2023);
// console.log(age1, age2);

// // -------- Arrow Function ---------
// const calcAge3 = (birthYear) => 2024 - birthYear;

// const age3 = calcAge3(2023);
// // console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;

//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(2023, "Ayline"));
// console.log(yearsUntilRetirement(1991, "Tabish"));
// console.log(yearsUntilRetirement(1976, "Mike"));
// console.log(yearsUntilRetirement(1956, "Dokai"));

//   ------- Functions Calling other functions-------
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangesPieces = cutFruitPieces(oranges);

//   const juice = `juice with ${applePieces} pieces of apples  and ${orangesPieces} pieces of orange.`;
//   return juice;
// }

// const tt = fruitProcessor(2, 9);
// console.log(tt);

// // --------- code challenge 1 ------------

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 5, 5));

// // Test 1 -----
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win the Trophy 🎉🏆 ${avgDolphins} vs. ${avgKoalas}`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win the Trophy 🎉🏆 ${avgDolphins} vs. ${avgKoalas}`);
//   } else {
//     console.log("No team wins... ");
//   }
// };
// checkWinner(scoreDolphins, scoreKoalas);
// // --- test 2

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

// //  ---------- Array -----------------

// const friend1 = "Sean";
// const friend2 = "Hashim";
// const friend3 = "Doaki";

// // wen can write array like this :
// const friends = ["Sean", "Hashim", "Dokai"];
// console.log(friends);

// // we can write array also like this :
// const years = new Array(2011, 2020, 2000, 1991);
// // in here we put elements in an Array.

// // we need a way to get them out : like this => :
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// console.log(years.length);
// console.log(years[years.length - 2]);

// // change or mutate the Array

// friends[1] = "Alim";
// console.log(friends);

// // Array with diffrent values types :
// const firstName = "Ayline";
// const ayline = ["firstName", "Tabish", 2024 - 2023, "Kalb baba", friends];
// console.log(ayline);
// console.log(ayline.length);

// // Exercise :
const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const years2 = [1991, 1967, 2002, 2020, 2018];

const age1 = calcAge(years2[0]);
const age2 = calcAge(years2[1]);
const age3 = calcAge(years2[years2.length - 1]);

console.log(age1, age2, age3);

// example Array :

const ages = [
  calcAge(years2[0]),
  calcAge(years2[1]),
  calcAge(years2[years2.length - 1]),
];
console.log(ages);
