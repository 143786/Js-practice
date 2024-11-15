'use strict';

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
};

const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurant, hours, tags);

/*  set the default value here , here we change the name of starterMenu to starters, and 
 we also want to give it a default value : =>  */

const { menu = [], starterMenu: starters = [] } = restaurant;

/*  ** --- Destructuring Object --- for doing that we use the 
curly braces {} because this is also how we crate objects. then 
then all we have to do is to provide the variable names that exactly match the 
property names that we wnat to retrieve from the object ***  */

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
