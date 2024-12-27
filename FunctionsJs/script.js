'use strict';
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1
  // price = price || 199;
  /*  this is the ES5 way of coding it for default value; now in ES6 there is
  a better way and easy way   : so all we have to do is to write this equlas one in the parameter
  parenthises : (flightNum, numPassengers = 1, price = 199)
   */
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  // console.log(booking);
  bookings.push(booking);
};

// createBooking('LH123');
// createBooking('LH123', 2);
// createBooking('LH123', 4);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000); // to skip a default parameter (undefined)

/*  we can set the second parameter to undefined, setting the parameter to
undefined its the same thing as not even setting it.
So when we don't pass an argument into that parameter, then it will take the 
value of undefined. And so this is how we skip a default parameter that we 
want to leave at its default.

*/

/*
default value : one thing that's really cool about the default values is
that they can contain any expression. For example, we could do : 
( price = 199 * 1.2)
But what's even more useful is that we can use the values of the other 
parameters that were set before it.
** here we can say that the price should be calculated based on the number 
of passengers. (flightNum, numPassengers = 1, price = 199 * numPassengers)
*/

/* How passing arguments works : Value VS Reference : 

How exactly it works to pass arguments into functions : 
primitive versus objects that we also called primitive 
types and reference types.  It's super important that we 
really understand how primitives and objects work in the 
context of functions.  
*/

const flight = 'LH123';
const ayline = {
  name: 'Ayline Tabish',
  passport: 234567846,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999'; // here we change the flightNum
  passenger.name = 'Ms. ' + passenger.name;

  if (passenger.passport === 234567846) {
    alert('Check in ');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, ayline);
console.log(flight);
console.log(ayline);

/* flightNum = flight; /// flightNum is basicallu a copy of that
original value, (flight variable), and the fligtNum inside of
the function not as a parameter is a completely different 
variable, And therefore, as we changed it to 'LH999' it did 
not get reflected in the outside flight variable.
*/
