"use strict";
/* for LOOP :  the for loop has 3 step :
1) Initial value,
2) When to run the loop (condtions),
3) How to change  value each time normally (+1);  */

// for (let i = 0; i <= 20; i++) {
//   console.log(i);
// }

// for (let num = 50; num >= 0; num -= 10) {
//   console.log(num);
// }

// for (let i = 100; i >= 0; i -= 12) {
//   console.log(i);
// }

// for (let i = 200; i >= 0; i -= 25) {
//   console.log(i);
// }

// DON'T RUN THIS ! - infinite loop :

// for (let i = 1; i !== 20; i += 2){
//   console.log(i);
// }

// const examScores = [98, 77, 84, 91, 57, 66];

// for (let i = 0; i < examScores.length; i++) {
//   console.log(i, examScores[i]);
// }

// --- *** For Loop use an array and objects : *** --
// const myStudents = [
//   {
//     firstName: "Ayline",
//     grade: 98,
//   },
//   {
//     firstName: "Tabish",
//     grade: 77,
//   },
//   {
//     firstName: "Nil",
//     grade: 88,
//   },
//   {
//     firstName: "Malik",
//     grade: 66,
//   },
// ];

// for (let i = 0; i < myStudents.length; i++) {
//   let student = myStudents[i];
//   //  console.log(student);
//   console.log(`${student.firstName} socred ${student.grade}`);
// }
// let total = 0;

// for (let i = 0; i < myStudents.length; i++) {
//   let student = myStudents[i];
//   total += student.grade;
// }
// console.log(total / myStudents.length);
// -- *** LOOP with string --**

// const word = "stressed";
// for (let i = word.length - 1; i >= 0; i--) {
//   console.log(word[i]);
// }

// -- *** LOOP inside of LOOP : like conditional statments (if) we can use
// loop inside another loop.

for (let i = 1; i <= 10; i++) {
  console.log("OUTER LOOP:", i);
  for (let j = 10; j >= 0; j -= 2) {
    console.log("  INNER LOOP", j);
  }
}
