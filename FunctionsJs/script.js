'use strict';
const bookings = [];
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  // ES5
  // numPassengers = numPassengers || 1;
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
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');

/*
default value : one thing that's really cool about the default values is
that they can contain any expression. For example, we could do : 
( price = 199 * 1.2)
But what's even more useful is that we can use the values of the other 
parameters that were set before it.
** here we can say that the price should be calculated based on the number 
of passengers. (flightNum, numPassengers = 1, price = 199 * numPassengers)


*/
