'use strict';

/*  ** --- Destructuring Object --- for doing that we use the 
curly braces {} because this is also how we crate objects. then 
then all we have to do is to provide the variable names that exactly match the 
property names that we wnat to retrieve from the object ***  */

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // open 24 hours
      close: 24,
    },
  },

  // we add a method (function to order food)
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
      will be delivered to ${address} at ${time} `
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    // here we add another method (oderPasta)
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Logical Opertators ( && and ||)
// Use ANY data type, return ANY data type, Short-Circtuiting  ( && and ||)
console.log(3 || 'ayline');
console.log('' || 'ayline');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 20;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10; //  this is the way of Short-Circtuiting
console.log(guests2);

/*
//////////////////////////////////////////////////////////////////////////
// 1) Destructuring :
// * -- SPREAD OPERATOR => because on RIGHT side of operator:
const arr = [1, 2, ...[3, 4]];

// REST, => because on the LEFT side of the equal sign ( = )
const [a, b, ...others] = [1, 2, 3, 4, 5];
//console.log(a, b, others);

const [Pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  restaurant.starterMenu,
];
// console.log(Pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// 2) Functions :
const add = function (...numbers) {
  // (rest parameter)
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  // console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
/////////////////////////////////////////////////
// // ** --- THE SPREAD OPERATOR --- ***
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// const newArr = [1, 2, ...arr];

// console.log(newArr);
// console.log(...newArr);

// const newMenu = ['Gnocci', ...restaurant.mainMenu];
// console.log(newMenu);

// // -- Copy array
// const mainMenuCopy = [
//   ...restaurant.mainMenu,
// ]; /* here we just created a shallow
// copy of this array. si that's a little bit similar to object.assign   */

// // --** JOIN 2 ARRAYS OR MORE TOGETHER ** we can use the same technique  __

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // ** Iterables : Arrays, Strings, maps, sets , ( NOT objects ) -- Since ES 2018,
// // the spread operator works with objects even though objects are not iterables

// const str = 'Ayline';
// const letters = [...str, ' ', 'T.'];
// console.log(letters);

// // Real-world example -- ***
// const ingredients = [
//   // prompt("Let's make pasta! ingredient 1? "),
//   // prompt('ingrdient 2?'),
//   // prompt('ingrdient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // here we
// // can use the SPREAD Operator to change that  like  this : =>

// restaurant.orderPasta(...ingredients);

// // -- *** OBJECTS - Spread operator ---
// const newRestourant = { foundingIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestourant);

// const restaurantCopy = { ...restaurant }; // shallow copies...
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

/* restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurant, hours, tags);

/*  set the default value here , here we change the name of starterMenu to starters, and 
 we also want to give it a default value in case it doesn't exist so in this case, just 
 an empty array [] : =>  */

// Default values
/* const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

/*  here we mutated these variables    

// Mutating varibales in objects

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj); 
// console.log(a, b);

// ** Nested objects :

const {
  fri: { open: o, close: c },
} = openingHours; 
// console.log(o, c);

// -- ** Destructuring Arrays ** ---
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

console.log(x, y, z);

let [main, , secondary] = restaurant.categories;

console.log(main, secondary);

// ** - Switching varibales **

/* const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); 

[main, secondary] = [secondary, main];
console.log(main, secondary);

// ** -- Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// ** -- Nested destructutring -- **
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// ** -- Default values -- **
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);  */
