// declarations
console.log(Math.ceil(Math.random() * 10));

let players = [];
players[0] = 'Indra';
players[1] = 'Nelly';
players[2] = 'Ron';
players[3] = 'Prasha';
players[4] = 'Zakaria';

let scores = [];
const numDice = 3;

// show header
console.log(`DOBBELSTENEN
============ 
aantal deelnemers: ${players.lenght}`);

// throw dice
for (let i = 0; i < players.length; i++) {
    console.log(`${players[i]} gooit: `);
    let dice = [];
    for (let j = 0; j < NUM_DICE; j++) {
        dice[j] = rnd.Next(1, 7);
    }
    scores[i] = getTotal(dice);
    console.log(`${diceToString(dice)} (${scores[i]} punten)`);

    // show winner
    Console.log(`${Environment.NewLine}WINNAAR: `);
    Console.ForegroundColor = ConsoleColor.Black;
    Console.BackgroundColor = ConsoleColor.Yellow;
    Console.log(`${getWinner(scores, players)}`);
}