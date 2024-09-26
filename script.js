// // // let js = "amazing";
// // // console.log("Tabish");

// // // let firstName = "Tab";

// // // console.log(firstName);
// // // console.log(firstName);
// // // console.log(firstName);
// // // console.log(firstName);
// // // console.log(firstName);

// // // let myFirstJob = "Coder";
// // // let myCurrentJob = "Teacher";

// // // console.log(myFirstJob);

// // // let country = "Turkye";
// // // let continent = "Asia";
// // // let population = "65millions";

// // // console.log(country);
// // // console.log(continent);
// // // console.log(population);

// // const now = 2037;
// // const tabAge = now - 1991;
// // const nilAge = now - 2018;
// // console.log(tabAge, nilAge);

// // console.log(tabAge * 2, tabAge / 2, 2 ** 3);

// // const firstName = 'Ayline';
// // const lastName = 'Tabish';
// // console.log(firstName + ' ' + lastName);

// // // Assignment operators
// // let x = 10 + 5; // 15
// // x+= 10;   // 25
// // x*= 4;    // 100
// // x++;      // 101
// // x--;
// // x--;      // 99
// // console.log(x);

// // // Comparison operators // <, >,  <=,  >=

// // console.log(tabAge > nilAge);
// // console.log(nilAge >= 18);

// // const isFullAge = nilAge >= 18;

// // // console.log(now - 1991 > now - 2018);

// // const now = 2037;
// // const ageTab = now - 1991;
// // const ageNil = now - 2018;

// // console.log(now - 1991 > now - 2018);

// // let x, y ;
// // x = y = 25-10-5;
// // console.log(x,y);

// // const averageAge = (ageNil+ageTab) / 2
// // console.log(ageNil, ageTab, averageAge);

// const lastName = 'tabish';
// const job = 'developper';
// const birthYear = 1991;
// const year = 2037;

// const tabish = "i'm " + lastName  + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(tabish)

// const tabishNew = `I'm ${lastName}, a ${year - birthYear} year old ${job}!`; // template literrale
// console.log(tabishNew);

// console.log('String with \n\
// multiple \n\
// lines');

// const age = 15;
// if (age >= 18) {
//   console.log("Sarah can start driving licence 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sara is too young. wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;

// let century;
// if(birthYear <=2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// const inputYear = 1991;
// console.log(inputYear);

// type conversion

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Ayline"));
console.log(typeof Nan);

console.log(String(23), 23);

// Type coercion
console.log(`I am ` + 23 + ` years old `);
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; // '11' here the number converted to string because of plus (+)
n = n - 1; // here the string converted to number becuse of minus (-)
console.log(n);

// 5 falsy values : 0, '', undefined, null, NaN,

console.log(Boolean(0));
