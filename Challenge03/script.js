"use strict";
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnabry",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnabry", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1} : ${player}`);


const odds = Object.values(game.odds);
let average = 0;


for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);


for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd} `);
}
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

// 1.
// const envents = gameEvents.values();  this is our starting point,
/* to get the unique values here, we need to create a set out of this iterator,
that's the main use case of sets : 
*/
// const events = new Set(gameEvents.values());
//console.log(events);
// Now to convert it to an array, we do just like before; create a new array, and
// spread operator to unpack this set,
const events = [...new Set(gameEvents.values())];
// console.log(events);

// 2.
gameEvents.delete(64);
// console.log(gameEvents);

// 3.
// console.log(`An event happened, on
// average, every ${90 / gameEvents.size} minutes`);

// const time = [...gameEvents.keys()];
// console.log(time);
// Now we want the last value. And how can we get the last value ?
// we can use the pop method.
// with .pop() method we will take the
//last element out of the array.

const time = [...gameEvents.keys()].pop();
console.log(`An event happened, on
average, every ${time / gameEvents.size} minutes`);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST " : "SECOND";
  console.log(`[${half} HALF ] ${min}: ${event}`);
}
