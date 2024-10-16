"use strict";

//Starting Data

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
      "Gnarby",
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
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names */

//01
console.log("------Task: 01");
for (const [index, goal] of game.scored.entries()) {
  console.log(`Goal ${index + 1} : ${goal}`);
}

//02
console.log("------Task: 02");
const values = Object.values(game.odds);
let sum = 0;
for (const odd of values) {
  sum += odd;
}
const aveOdds = sum / values.length;
console.log(aveOdds);

//03
console.log("------Task: 03");

const { team1, team2 } = game;
// console.log(team1, team2);
const { team1: team1Odds, x: draw, team2: team2Odds } = game.odds;
// console.log(team1Odds, draw, team2Odds);

console.log(`Odd of victory ${team1}: ${team1Odds}`);
console.log(`Odd of draw: ${draw}`);
console.log(`Odd of victory ${team2}: ${team2Odds}`);

/*4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
} */

//Sotution
console.log("-------Bonus challange solution");

const scorers = {};

for (const player of game.scored) {
  // console.log(player);
  if (scorers[player]) {
    scorers[player]++;
  } else {
    scorers[player] = 1;
  }
}

console.log(scorers);
