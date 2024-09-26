"use strict";
function tab() {
  console.log("Ayline");
}

// calling / runnning / invoking the functions

tab();
tab();
tab();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
