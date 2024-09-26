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

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // AND = &&
console.log(hasDriversLicense || hasGoodVision); // OR  = ||
console.log(!hasDriversLicense); // Not = !

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false; // c
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

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
const scoreDolphins = (97 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆🏆");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log("Koalas win the trophy 🏆🏆🏆");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the  🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆");
} else {
  console.log("No one win the 🏆🏆🏆");
}
