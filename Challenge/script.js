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

//  The solution of this challenge here in 7 step ..... :

// 1.

const [players1, players2] = game.players;
console.log(players1, players2);

// 2.

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3. Here we use the SPREAD OPERATOR...
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// 5. Nested destructuring here :

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals("Davies", "Muller");

printGoals(...game.scored);

// 7.

team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");
