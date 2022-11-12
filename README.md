# First round of Swiss system tournament

This little javascript program organizes the first round of a Swiss system tournament according to the Elo score of the players.

The json file ``app/db/players.json`` must contain an even number of players. Each player object must have a ```elo_points``` key.

# Usage
- clone the repo 
- go to the root of the folder name you chose
- launch ```node app/js/main.js``` in your terminal of choice
- results have been written in ```app/db/first_round```