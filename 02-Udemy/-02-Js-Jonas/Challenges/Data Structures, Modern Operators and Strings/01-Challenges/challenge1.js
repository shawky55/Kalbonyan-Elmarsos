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


//task one 
let [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

//task two
[gk, ...fieldPlayers] = [...players1];
// console.log(fieldPlayers)

//task three
let allPlayers = [...players1, ...players2]
    // console.log(allPlayers)

//task four
let playersFinal = [...players1, "Thinago", "Coutiho", "Perisic"];
// console.log(playersFinal)

//task five
let { odds: { team1, x: draw, team2 } } = game;
// console.log(team1,draw,team2)

//task six
let printGoals = function(...players) {
        console.log(`${players.length}`)
    }
    // printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels')


//task seven
team1 < team2 && console.log("team one more likely");


console.log('challenge two');


for (const player of game.scored) {
console.log(`${player} score  goal ${game.scored.indexOf(player)}`)
}






