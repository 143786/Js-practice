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

const examScores = [98, 77, 84, 91, 57, 66];

for (let i = 0; i < examScores.length; i++) {
  console.log(i, examScores[i]);
}
