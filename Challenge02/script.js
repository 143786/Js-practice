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

//  The solution of this challenge here in 4 step ..... :

// 1.
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1} : ${player}`);

/* 2. here we have to calculate the average odd: we gonna to 
      loop over this object here and simply add all of these
      three values togeather.
*/
const odds = Object.values(game.odds);
let average = 0;

// now in each iteration, we will add odds to the
// average. so in the end we can divided it by the
// length of this objec.values array.
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd} `);
}
// in the array we use the entries method to get the entries
// of the array, but in the object we have to use Object.entries
// and then pass into the function, tha the object that we
// are interestged in.

// 4.
