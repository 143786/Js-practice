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
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
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

/*   ****** Sets and maps ******* :
In te past, js has always had very little built-in data structures.
basically, we only had  Arrays and Objects. BUT in ES6 two more 
data structures were finally introduced. And that are sets and maps.
So these are pretty common data structures that already exists in 
other programming languages, and now, they also exist in JS.
So in here we learn all about sets: 
    ******** set is just a collection of unique values, so that
    means that a set can never have any duplicates. and that 
    property makes them useful in certain situations. so 
    le's create a new set here :
 */

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet); /* in output of console we have just
  three values pasta , pizza and Risotto , so all the duplicates
  are gone. AND kind of look similar to an array. So there are
  no key value pairs, it's just a buch of values grouped together
  And just like arrays, sets are also iterables, set is still 
  very different from an array. so first, because it's elements
  are unique. AND second, because the order of elements in the 
  set is irrelevant.  */

console.log(new Set('Ayline')); /* so we have get a set with 
6 elements ( a y l i n e ) that's the five components of this 
iterable, which is the String. ANd of course, the set could also
be empty, just like this :  console.log(new Set(' '));

Now we learn how to work with sets :
*/

console.log(orderSet.size); // we can get the size of a set.
// it's not length like its in arrays.

/* we can check if a certain element is in a set.
actually it's a method : has()
*/
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('bread'));
// to add some elements in set we use the add keywords or add method:
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
// console.log(orderSet);
/* the garlic bread got added, but only, of them, because the
   set has to be unique and so the second one was basicallu 
   ignored.
*/
// * for delete elements :
orderSet.delete('Risotto');
//orderSet.clear(); //  This method is for delete all elements :
console.log(orderSet);

/* *** in sets there are no indexex, and in fact, there is no way
of getting values out of a set. there's no need for getting data 
out of a set. That's because if all values are unique, and if their
order does not matter then there is not point of retrieving values
out of a set. All we need to know is whether a certain value is in
the set or not. And that's why we have the has method.
If your goal is to store values in order and then tetrieve it,then
the best use case, is to just use an Array. you wouldn't use a set
for that.
*/

// set is iterables : so we can loop over them :

for (const order of orderSet) console.log(order); /* So looping is possible 
just like in any other iterable. 
*/
/*     ****  The big use case of set :
in a normal code base, the main use of sets is to remove duplicates
values of arrays.
Example 
*/
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// we want to have an array without the duplicate of elements :
const stafUnique = new Set(staff);
/* so here we want to be an array our set so ;
 here we convert the set to an array with spread operator
 the conversion is easy because both the set and arrays are
  iterables.  spread operators work in all iterables. */
const stafUnique1 = [...new Set(staff)];

console.log(stafUnique, stafUnique1);

/* now we want to know how many diffrent positions there are the the
 size property is very useful : */
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

/*  And the same could even be done with counting, how many 
different letters there are in a string ; because a string
is also an iterable :  */
console.log(new Set('Ayline').size);
/*  ********** AS a Conclusion : sets are not intended  to replace arrays
 at all, so whenever you need to store values in order, and
 that might contain duplicates, always just use arrays, That's 
 also true when you need to really manipulate data, because 
 arrrays have access to a lot of great array methods.
 Sets have this very useful property of bieng unique, and it's also
 very easy to interact with sets by using all of their straightforword
 methods, however, they are not nearly as important as arrays.
  */

/*    ---------- MAPS : maps are a lot more useful than sets.
        So what is a map ? 
        map is a data structure that we can use to map valeues
        to keys. So just like an object data is stored in key
        value pairs in maps. Now, the big diffrence between
        objects and maps : in maps , the keys can have any 
        type and this can be huge. so, in Object, the keys are 
        always strings. But in maps, we can have any type of key.
        it could even be objects, or arrays, or other maps.
        so, that can lead to some really great and advanced stuff.

        so let's create a restaurant map here: 
        so we use again the constructor just like we used for 
        the set, but this one called map. And the easeiest way 
        to create a map is to create an empty map like like without
        paassing anything in.  
        And then , to fill up the map we can use the set method.
        The set mehtod is similar to add mehtod that we had in sets.
        So both allow us to add a new element.
 */
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisob, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

/* so calling the set method returns the updated map. And so , all
of this is now the updated map. And so, we can call set again on 
that map,
In order to read data from a map we use the Get method. And so, that
get method is available on all the maps.
*/
console.log(rest.get('name'));
console.log(rest.get(true));

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

/*  -- ***** Optional chaining => THis feature interduced in ES2020 *** 
if a certain property does not exist, then undefined is returned immediately.  and so that will
then avoid that kind of error that we sa earlier :  istead of dot (.) we use question mark, dot 
then open, so here is how optional chaining works :

 */
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

/*  so only if the property that is before this question mark here, so only if Monday exist,
Then this open property will be read from there.  But if not, the immediately undefined will be
returned. and exist here actullay means the nullish concept, so if it's zero or the empty String, 
  then it still exists, soif we try this now, then we get undefined.*/

//  Example of Optional chaining  and nullish coalescing

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'cloded';
//   // here we use the optional chaining operator (?.) and the nullish coalescing operator (??)
// working together. they were introduced at the same time in ES2020. they were design to work
// with each other. so both of them rely on this new concept of nullish so nullish values are
// null and undefined.
//   console.log(`On ${day}, we open at ${open}`);
// }

/*  Optional chaining and nullish coalescing - for calling Methods :      */
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisoto?.(0, 1) ?? 'Method does not exist');

/*  Optional chaining and nullish coalescing - Arrays :  
So basically we can use it to cheack if an array is empty , so 
we simply create a users array :    */

// const users = [{ name: 'ayline', email: 'abdelmaliktabish@gmail.com' }];
// // now to get the name of the first element of this array, we can do this, if it exist so
// // optional chaining only then take its name, and otherwise we want to log user array empty.
// console.log(users[0].name ?? 'User array empty');

// // without optional chaining we would have to write something like this :
// if (users.length > 0) console.log(users[0].name);
// else console.log('User array empty');
// /* so that looks like a lot more work then what we just have up there. so here
//  we don't need to do any cheack so that's a lot better.
//  console.log(users[0].name ?? 'User array empty');
//so now in both cases, we get ayline .

/* - ******************** - Looping Objects :  object Keys, values And Entries  ********
   We learned about the for of loop to loop over arrays, which remember is iterable, but 
   we can also loop over objects, which are not Iterable, but in an indirect way.
   Now we have different options here, depending on what exactly we want to loop over.
   So we want to loop over the objects, property names over the values or both together.
   And let's start by simply looping over property names, they are also called keys.
   Now we will still have to use the for of loop to loop over the array, but again we're going
   to do that in an indirect way. So we're not actually looping over the object itself. 
   Instead, we're going to loop over, an array ::::

*/

// Property NAMES :
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length}
// days: `;
// for (const day of properties) {
//   openStr += `${day},`;
// }
// console.log(openStr);

// // Property VALUES :

// const values = Object.values(openingHours);
// console.log(values);

// // Entire object :

// const entries = Object.entries(openingHours);
// console.log(entries);
// we now get an array, so all of these keys, values and entries basically transformed the
// object into an array. and here we have fiest the key then the value, so now we can use this
// to basically loop over the object :

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);

//   // here we got all of the data out of the object into nicly and neat string (look at console).
// }

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
