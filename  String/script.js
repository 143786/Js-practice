'use strict';

// ------------------------------ Strings ---------------------------
/* Part 3:
/ here we work with one of the most powerful string methods, which is split.
  So split allows us to split(divide) a string into multiple parts based on a 
  divider string.

  ***  join() this mehtod is the opposite of the split() method. 
*/
// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Ayline Tabish'.split(' ')); // output : Array [ "Ayline", "Tabish" ]
// the output is string in a Array

const [firstName, lastName] = 'Ayline Tabish'.split(' ');
const newName = ['Ms.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

//  capitalize the name : transfer the first lette of each name into a capital letter

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith devis');
capitalizeName('ayline tabish');
// Padding :
/* --- Padding a string : means to add a numer of characters to the string
       until the string has a certain desired length. 
*/

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+')); // the length of this entire string 25
console.log(message.padStart(25, '+').padEnd(35, '!'));

// MaskCreditCard :
const maskCreditCard = function (number) {
  const str = number + ' ';

  /*  here we change the number to string ( when one 
  the operands of the plus sing is a string it will convert all the operands to 
  to a string. )  so here the number become a string */

  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(437363778788898));
console.log(maskCreditCard(437363776512432));

/* ***  Repeat method : 
  this one simply allows us to repeat the same string multipe times.
  */
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInline = function (n) {
  console.log(`There are ${n} planes in line ${'🛬'}   `.repeat(n));
};
planesInline(5);
planesInline(3);
planesInline(12);

/* const airline = 'Tap Air Portugal';
//    ----- Part 2
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//   ******* Fix capitalization in name :

const passenger = 'aYlInE'; // Ayline
const passLower = passenger.toLowerCase();
const passCorrect = passLower[0].toUpperCase() + passLower.slice(1);
console.log(passCorrect);

// Comparing emails - Example  :

const email = 'ayline@tabish.io';
const loginEmail = 'Ayline@Tabish.Io   \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
//  we can do that simply in one statments instead of two step  in 2 line :
const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail);
console.log(email === normalizeEmail);

// *******            --- Replace parts of strings :

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const annoncement = 'All passengers come to barding door 23. Boarding door 23!';

console.log(annoncement.replace('door', 'gate'));
/* the replace method replace the very first occurrence of this search string.
but the rest of them will stay the same. So they will not get updated.
But fortunately for us, there's also the replaceAll method, 

console.log(annoncement.replaceAll('door', 'gate'));

/* Regular expression : one of the most complex and confusing topics of programming,
   but for now we are just gonna use a very simple, regular expression to tell the
   replace method that it should target all the occurrences of door here and not 
   just the first one: 


console.log(annoncement.replaceAll(/door/g, 'gate')); // g = global
/* the replace method is of course case-sensitive. so just like all of the other
string methods are.

// There are 3 simple methods that return booleans :  Booleans :
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));
if (plane.startsWith('Airbus') && plane.endsWith('neo'));
{
  console.log('Part of the NEW ARibus family');
}

/* whenever we need to take some decistion based on the contents of the string,
   these 3 methods are very, very helpful : 
   1) includes()   
   2) startsWith()
   3) endsWith()


// Practice with 3 methods :
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board 🚫 ');
  } else {
    console.log('Welcome to a board');
  }
};
checkBaggage('I have a laptop, some Food, and a pocket Knife ');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');


// Working with string   -      *********   Part 1 :
// const plane = 'A320';
// console.log(plane[0]);
// // we can also read the legth property of strings, just like we can in arrays:
// console.log(airline.length);
// console.log('A320'.length);

// /* Method : comparing to arrays, strings also have methods and some of them are
// quite similar to the array mehtods. So one of them is the indexOf.
// */
// console.log(airline.indexOf('r'));
// /* wo we can get the position in which a certain letter is in the string like 'r'.
//    simetimes we might need the last one. and so then we can use lastIndexOf,
// */
// console.log(airline.lastIndexOf('r'));

// // we can also search for entire words:

// console.log(airline.indexOf('Portugal')); // this one is actually a case sensitive.

// //   *****  slice method  *********** :

// console.log(airline.slice(4)); // output : Air Porugal
// /* The reason for that is that this (4) is the begin parameter.
//    so it's the position at which the extraction will strart.
//    This result ( Air Porugal ) is called a substring, because it's just a part
//    of the original string. Now this does not change the underlying string,
//    That's because it's impossible to mutate strings. They are primitives
//    so if we want to use this string ( Air Porugal) now we would have to store it
//    first into some variable or some data structure. so this method here all the
//    other ones that we 're gonna talk about always return a new string.
//    Now besides the beging parameter that we already specified, we can also
//    specify an end parameter :
//  */
// console.log(airline.slice(4, 7)); // output : Air
// /*
// The length of the extracted string is always going to be end minus beginning.
// 7-4 = 3
// */

// // extracting the first word :
// console.log(airline.slice(0, airline.indexOf(' '))); // output :  Tap

// // extracting the last word :
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //  output : Portugal
// /* we can even define a negative begin argument. like this for example :
//    then it will start counting from the end.
// */

// console.log(airline.slice(-2));

// // We can also specify a negative end parameter :
// console.log(airline.slice(1, -1)); // output: ap Air Portuga
// //console.log(airline.slice(-15));

// // we write a function that receives an airplane seat and lock to the console,
// // whether it is a middle seat or not :

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats,
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat 😖');
//   else console.log('You got lucky 😋');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

/*  why all of this works : 
  We know that strings are just primitves, so why do they have methods ?
  shoouldn't methods only be available on object such as arrays ? 
  Yeah that's true, However, JS is really smart. 
  Whenever we call a method on a string, JS will automatically behind the 
  scenes convert that string primitive to a string object with the same
  content. And then it's on that object where the methods are  called. 
  AND this process is called boxing, because it basically takes our string
  and puts it into a box, which is the object.

  In JavaScript, boxing is the process of converting a primitive value
   (like a number, string, or boolean) to an object so that it can access 
   methods and properties. This process happens automatically behind the
    scenes when you try to access methods or properties of a primitive value.
     1) Primitive Value:
    let str = "Hello"
    2) Boxing: When you call a method on the primitive, JavaScript automatically 
    "boxes" it into an object:
    let length = str.length;
    In this case, JavaScript temporarily wraps the string str in a String object
     to access the length property.

   3) Unboxing: After accessing the property or method, JavaScript "unboxes" 
      the object back to the primitive value:
      console.log(length); // Output: 5

    This automatic process allows you to use object methods on primitive values 
    seamlessly. Here are some examples with different primitives:
    Numbers:
    let num = 42;
      console.log(num.toFixed(2)); // Output: "42.00"
    Booleans:
    let isTrue = true;
    console.log(isTrue.toString()); // Output: "true"
    These object wrappers (like Number, String, and Boolean) provide methods that
     can be used on their respective primitive types, making JavaScript more 
     flexible and powerful.

*/

// console.log(new String('Ayline'));
// console.log(typeof new String('Ayline'));

// this conversion here is what JS does behind the scenes. whenever we call a
// method on a string. And then when the operation is done the object is
// converted back to a regular string primitve. And in fact all string methods
// return primitives. Even if called on a string object.
