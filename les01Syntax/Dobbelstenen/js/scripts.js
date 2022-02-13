// declarations
let players = [];
players[0] = 'Indra';
players[1] = 'Nelly';
players[2] = 'Ron';
players[3] = 'Prasha';
players[4] = 'Zakaria';

let scores = [];
const NUM_DICE = 3;

// show header
console.log(`DOBBELSTENEN
============ 
aantal deelnemers: ${players.lenght}`);

// throw dice
for (let i = 0; i < players.length; i++) 
{
    console.log(`${players[i]} gooit: `);
    let dice = [];
    for (let j = 0; j < NUM_DICE; j++) 
    {
        dice[j] = Math.random(1, 7);
    }
    scores[i] = getTotal(dice);
    console.log(`${diceToString(dice)} (${scores[i]} punten)`);

    // show winner
    Console.log(`${Environment.NewLine}WINNAAR: `);
    Console.ForegroundColor = ConsoleColor.Black;
    Console.BackgroundColor = ConsoleColor.Yellow;
    Console.log(`${getWinner(scores, players)}`);
}


function diceToString(dice) 
    {
        let retval = "";
        d in dice.foreach
        {
            switch (d) 
            {
                case 1: retval += "⚀ "; break;
                case 2: retval += "⚁ "; break;
                case 3: retval += "⚂ "; break;
                case 4: retval += "⚃ "; break;
                case 5: retval += "⚄ "; break;
                case 6: retval += "⚅ "; break;
                default: break;
            }
        }

        retval;
        }
            function getTotal(dice) 
            {
                let total = 0;
                d in dice.foreach 
            {
            total += d;
        }

        total;
        }
            let total = []
            let names = []
            function getWinner(totals, names) 
            {
                let winnerIndex = 0;
                let draw = false;
                for (let i = 1; i < totals.Length; i++) 
                if (totals[i] == totals[winnerIndex]) draw = true;
                else if (totals[i] > totals[winnerIndex]) 
            {
            winnerIndex = i;
            draw = false;
        }

}
            draw ? "gelijkspel" : names[winnerIndex];
        