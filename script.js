// type conversion

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Ayline"));
console.log(typeof Nan);

console.log(String(23), 23);

// Type coercion
console.log("I am" + 23 + "years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

// 5 falsy values : 0, '', undefined, null, NaN,

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); //
console.log(Boolean("Ayline")); //
console.log(Boolean("")); // it's a empty string
console.log(Boolean({})); // it's a empty object

const money = 2300;
if (money) {
  console.log("Don't spend it all ;");
} else {
  console.log("you should get a job!");
}

// Equality operators :

const age = "18";
if (age === 18) console.log("You just become an adult :D (strict)");

// whenever or if block only has one line we don't need
// to curly braces {}.

if (age == 18) console.log("You just become an adult :D (loose)");

const fav = Number(prompt("Whats your fav number ?"));
console.log(fav);
console.log(typeof fav);
if (fav === 99) {
  console.log("Cool! 99 is an an amazing number");
}
