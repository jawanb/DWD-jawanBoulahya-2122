// declarations
console.log(Math.ceil(Math.random() * 10));

let players = [];
players [0] = 'Indra';
players [1] = 'Nelly';
players [2] = 'Ron';
players [3] = 'Prasha';
players [4] = 'Zakaria';

let scores = [players.length];
const numDice = 3;

// show header
console.log(`DOBBELSTENEN
============ 
aantal deelnemers: ${players.lenght}`);

// throw dice
for (let i = 0; i < players.length; i++) 
    {Console.log(`${players[i]} gooit: `);
    let dice = [NUM_DICE];
    for (let j = 0; j < NUM_DICE; j++) {
    dice[j] = rnd.Next(1, 7);
    }
    scores[i] = getTotal(dice);
    Console.log(`${diceToString(dice)} (${scores[i]} punten)`);
    }
    