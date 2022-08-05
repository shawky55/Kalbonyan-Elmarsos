const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Challenge two task one
game.scored.forEach((player, index) => {
  console.log(`Goal ${index + 1}:scored by ${player}`);
});

//Challenge two task two
let odds = Object.values(game.odds);
//sum array element with for each
let  sumofodd=0;
x.forEach((ele)=>{
sumofodd+=ele;
})
//sum array element with reduce function
 sumofodd = odds.reduce((previous, current) => {
  return previous + current;
}, 0);
console.log(sumofodd / odds.length);

//Challenge two task three

for (let [team, odd] of Object.entries(game.odds)) {
  // team=="x"?team="draw":team;

  let teamName = team == 'x' ? 'draw' : game[team];
  console.log(teamName, odd);
}
