'use strict';

/*  ***** Enhanced Object Literals :  
here this restaurant object is an object literal, because we wrote this object literally 
in our code using the curly braces syntax, so all of this  object here has been written using
the object literal syntax. Now ES6 introduced 3 ways, which make it easier to write object literal
like this so let's go through them one by one now.
First we can say that we have an object that is outside of this object. we take the ( openingHours ) 
object and create a separate object with it.


THe second enhancement to object literals is about writing  methods. 
so in ES6 we no longer have to create a property, and then set it to a functon expression, like 
we have always been doing, 
*/
const weekdays = ['mon', 'tue', 'wed', 'the', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // open 24 hours
    close: 24,
  },
};

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
  // ES6 enchanced object literals
  openingHours,

  // we add a method (function to order food)

  /*  
  THe second enhancement to object literals is about writing  methods. 
so in ES6 we no longer have to create a property, and then set it to a functon expression, like 
we have always been doing, but now we no longer need to do that  we can write it in an easier way
 here we remove ( : function ) no needed in ES6 : we remove for all functions :
  it's the new way of writing mehtods, but this actually comes down to personal preference
  once again. so if you prefer the old way you can just keep ot likt that.
  so maybe you think it's more explicit if you can actually read the function keyword there,
  but for me it's enouph that we have the parenthesis here , so that alone already shows that 
  if has to be a function and VS code itself is also helpful as it change the color of the methods
  to green, so VS code is really smart in that regard.

  */
  // order: function (starterIndex, mainIndex) {
  // return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
  //   console.log(
  //     `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
  //     will be delivered to ${address} at ${time} `
  //   );
  // },

  // orderDelivery({ starterIndex, mainIndex, time, address }) {
  // //   //console.log(
  // //     `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
  // //     will be delivered to ${address} at ${time} `
  // //   );
  // // },
  // // orderPasta: function (ing1, ing2, ing3) {
  // //   // here we add another method (oderPasta)
  // //   console.log(
  // //     `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
  // //   );
  // // },

  // orderPasta(ing1, ing2, ing3) {
  //   // here we add another method (oderPasta)
  //   console.log(
  //     `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
  //   );
  // },

  // orderPizza: function (mainIngredient, ...otherIngredients) {
  //   console.log(mainIngredient);
  //   console.log(otherIngredients);
  // },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

/*  -- ***** Optional chaining => THis feature interduced in ES2020 *** 
if a certain property does not exist, then undefined is returned immediately.  and so that will
then avoid that kind of error that we sa earlier :  istead of dot (.) we use question mark, dot 
then open, so here is how optional chaining works :

 */
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

/*  so only if the property that is before this question mark here, so only if Monday exist,
Then this open property will be read from there.  But if not, the immediately undefined will be
returned. and exist here actullay means the nullish concept, so if it's zero or the empty String, 
  then it still exists, soif we try this now, then we get undefined.*/

//  Example of Optional chaining :

const days = ['mon', 'tue', 'wed', 'the', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'cloded';
  // here we use the optional chaining operator (?.) and the nullish coalescing operator (??)
  // working together. they were introduced at the same time in ES2020. they were design to work
  // with each other. so both of them rely on this new concept of nullish so nullish values are
  // null and undefined.
  console.log(`On ${day}, we open at ${open}`);
}

/*  ****    --- Looping Arrays : The for-of Loop -- introduced in ES6  : 
This loop will automatically loop over the entire array and in each iteration, it 
will give us access to the current array element which we can specify here. so 
in this case it's called the item, but of course we could call it anything that we want.
And if we simply log the current item in to console we get  all elements, simply each 
element logged one by one. and that's because again, the item variable is always the current
element in each iteration. and also just like in the if else statement, we don't need to create
a code block when we only have one statement here to execute, so that's pretty simple,  but it's 
really nice level of obstructing over the regular for loop. so we can do the same thing with this
one,  but without having to worry about all the underlying details such as counters and conditions.

what's also great about the for-of loop, is that we can still use the continue and break keywords.

 */

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

/* But now what if we also wanted the current index and not just the current element, il the for-of loop
it's a bit of a pain when we need that index, because originally the for-of loop was really just 
meant to give you the current element. However, we can get both and we can do it like this :::
*/

// for (const [item] of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// wen want to destructuring the item here for made it easy  :
// destructuring made our lives a litte bit easier here.

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// ****   Logical Assignment operators : introduced in ES 2021 :

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

/* ****  OR ||=  assignment operator :
 This operator assigns a variable to a variable if that variable is currently falsy, like this
 one rest1.numGuests ||= 10; this variable is currently falsy and so it will be assigned the value
 of 10. there's an axception in one situation 

*/

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// the shortcut ways of  this rest1.numGuests = rest1.numGuests || 10; will be like this
// it call Logical Assignment Operators :
//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;
/*The Logical nullish assignement operator (null or undefined) :
the nuliish assignement operator will assign a value to a variable if that exact varibale is 
currently nullish so again, that is the case in restaurant number2
*/
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // AND assignment operator :
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // We can write it like this in shortcut way :
// rest2.owner &&= '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);
/* ///////////////////////////// *** Nullish : null and undefinded (NOT 0 or '' )  ??
 nullish coalescing operator : it' an operator that was introduced in ES2020,
 and it works like this :
*/
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

/*Logical Opertators ( && and ||)
Use ANY data type, return ANY data type, Short-Circtuiting  ( && and ||)
OR Operator ||  
The OR operator short circuits return the first truthy value.
*/
// console.log(3 || 'ayline');
// console.log('' || 'ayline');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 20;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10; //  this is the way of Short-Circtuiting
// console.log(guests2);

// AND Operator && => when it comes to short-circuit evaluation,the AND operator works
// in the exact opposite way of the OR operator.

/* The AND operator short circuits when the first value is falsy 
and then immediately returns that falsy value.

*/

// console.log('--- AND ----');
// console.log(0 && 'ayline');
// console.log(7 && 'ayline');

// // *** Practical example :
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// this work the same like if () statements.

/*                                  ***  Summarize  *****  
the OR (||) operator will return the first truthy value of all the operands, 
or simply the last value if all of them are falsy. 
on the other hand,  the AND (&&) operator will return the first falsy value 
or the last value if all of them are truthy.
****** And as for practical applications we can use the OR operator to set default values, 
And we can use the AND operator to execute code in the second operand if the first one is 
true.
*/

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
