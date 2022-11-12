const fs = require('fs')

function swissSystem(chessPlayers) {
    // chessPlayers is an array of player objects
    // Returns the match combinations for the first round of a Swiss system 
    // tournament according the player Elo score
    // Player number must be even
    // sorting by Elo score
    chessPlayers.sort((a, b) => b.elo_points - a.elo_points)
    let matches = {}
    
    // /!\ The following only works if the length of chessPlayers is even!
    for (let player = 0; player < (chessPlayers.length)/2; player++) {
        const s1Player = chessPlayers[player];
        const s2Player = chessPlayers[player+(chessPlayers.length)/2];
        matches['match' + (player+1)] = [s1Player, s2Player]
    }
    
    return matches
}

let jsonFile = 'app/db/players.json'

fs.readFile(jsonFile, (err, players) => {
    if (err) throw err
    
    // Data recovery
    let playersStr = players.toString()
    let playersObj = JSON.parse(playersStr)
    let matches = swissSystem(playersObj.players);
    console.log("The first round of matches is:\n");
    console.log(matches);

    console.log('\n Writing the matches object as app/db/first_round.json ...\n');
    fs.writeFileSync('app/db/first_round.json', JSON.stringify(matches, null, '\t'))

    fs.readFile('app/db/first_round.json', (err, data) => {
        if (err) throw err;
        console.log("Successfully written.");
    });
})