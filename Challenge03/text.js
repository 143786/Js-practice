/* Data Structures, Modern Operators and Strings
Coding Challenge #3

Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17:
⚽
GOAL
GOOD LUCK 😀

*/

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

// const envents = gameEvents.values();    *** this is a iterator
/*

The spread operator (...) is used here to convert the Set back into an array.

In this context:

    new Set(gameEvents.values()) 
    creates a Set containing unique values from gameEvents.

    [...new Set(gameEvents.values())]
     uses the spread operator to "spread" the values of the Set into a new array.

The spread operator allows us to take all elements in the Set and put them into
 a new array. This way, we convert the unique values back from the Set to an 
 array format, which may be more convenient for certain operations or 
 compatibility with array-specific methods.

Here’s an example to illustrate:
 
const gameEvents = ['goal', 'goal', 'yellow card', 'red card', 'goal'];
const events = [...new Set(gameEvents)];

console.log(events); // Output: ['goal', 'yellow card', 'red card']
In this example, gameEvents initially contains duplicate entries. 
By creating a Set and then using the spread operator, we get an array 
events that contains only the unique elements.


*/
