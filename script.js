// type conversion

// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Ayline"));
// console.log(typeof Nan);

// console.log(String(23), 23);

// Type coercion
// console.log("I am" + 23 + "years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");

// 5 falsy values : 0, '', undefined, null, NaN,

// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); //
// console.log(Boolean("Ayline")); //
// console.log(Boolean("")); // it's a empty string
// console.log(Boolean({})); // it's a empty object

// const money = 2300;
// if (money) {
//   console.log("Don't spend it all ;");
// } else {
//   console.log("you should get a job!");
// }

// // Equality operators :

// const age = "18";
// if (age === 18) console.log("You just become an adult :D (strict)");

// whenever or if block only has one line we don't need
// to curly braces {}.

// if (age == 18) console.log("You just become an adult :D (loose)");

// const fav = Number(prompt("Whats your fav number ?"));
// console.log(fav);
// console.log(typeof fav);
// if (fav === 10) {
//   console.log("Cool! 10 is an an amazing number");
// } else if (fav === 7) {
//   console.log("7 is also a cool number");
// } else if (fav === 8) {
//   console.log("8 is the number of Kroos in Real Madrid");
// } else if (fav === 9) {
//   console.log("9 is the number of Mbapé in Real Madrid");
// } else {
//   console.log("Number is not 10 , 7 , 8 or 9");
// }
// if (fav !== 10) console.log("why not 10?");

// Boolean Logic

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision); // AND = &&
// console.log(hasDriversLicense || hasGoodVision); // OR  = ||
// console.log(!hasDriversLicense); // Not = !

// // if (hasDriversLicense && hasGoodVision) {
// //   console.log("Sarah is able to drive!");
// // } else {
// //   console.log("Someone else should drive...");
// // }

// const isTired = false; // c
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// Challenge 3 :

// const scoreDolphins = (96 + 108 + 110) / 3;
// const scoreKoalas = (96 + 108 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy 🏆");
// } else if (scoreDolphins < scoreKoalas) {
//   console.log("Koalas win the trophy 🏆");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both win the  🏆");
// }

// BONUS :

// const scoreDolphins = (97 + 112 + 81) / 3;
// const scoreKoalas = (109 + 95 + 86) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win the trophy 🏆🏆");
// } else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
//   console.log("Koalas win the trophy 🏆🏆🏆");
// } else if (
//   scoreDolphins === scoreKoalas &&
//   scoreDolphins >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log("Both win the  🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆");
// } else {
//   console.log("No one win the 🏆🏆🏆");
// }

// The SWITCH statement :

// const day = "ttt";

// switch (day) {
//   case "monday": // day === 'monday'
//     console.log("Plan course structure");
//     console.log("Go to gym");
//     break; // without the break the code simply continues
//   // executing for all case so we need the break at the end
//   // of every case

//   case "tuesday":
//     console.log("GO to Bib");
//     break;

//   case "wednesday":
//   case "thursday":
//     console.log("Meeting with ALim and pratice code");
//     break;

//   case "friday":
//     console.log("Record videos");
//     break;

//   case "saturday":
//   case "sunday":
//     console.log("Bieng with Ayline and Nil for enjoying our weekend");
//     break;

//   default:
//     console.log("Not a valid day!");
// }

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to gym");
// } else if (day === "tuesday") {
//   console.log("GO to Bib");
// } else if (day === "wednesday" && day === "thursday") {
//   console.log("Meeting with ALim and pratice code");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" && day === "sunday") {
//   onsole.log("Bieng with Ayline and Nil for enjoying our weekend");
// } else {
//   console.log("Not a valid day!");
// }

// The Conditional Operator (Ternary) :

const age = 22;
const drink = age >= 18 ? "wine🍷" : "water💧";
console.log(drink);

// we can do the conditional operator in ( if else statement) like this:
let dring2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  dring2 = "water💧";
}

console.log(drink);

console.log(` I like to drink ${age >= 18 ? "wine🍷" : "water💧"}`);

//
