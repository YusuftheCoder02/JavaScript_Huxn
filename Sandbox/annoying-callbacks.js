// This file demonstrates my fails and struggles with callback functions in JavaScript.

let Player = {
    name: "Yusuf",
    streak: 7,
    streakStatus: true,
    grace: false,
    gracePeriod: 0,
    maxGracePeriod: 1,
}

// If streak status is false the grace period should start, if grace period exceeds maxGracePeriod the streak is reset

// lets assume I didnt continued my streak
Player.streakStatus = false;

if (Player.streakStatus === false){
    // Activating grace period
    Player.grace = true
    console.log(`Your streak is in grace perioud, Return in ${Player.maxGracePeriod} days to save your streak`);
    
    if (Player.gracePeriod < Player.maxGracePeriod) {
        ++Player.gracePeriod
    } else {
        Player.streak = 0;
        console.log("Your streak has ended");
        
    }
}

// Where is callbacks lol

function showPlayerData(callback){
    //show player info in console
    console.log(`Player Name: ${Player.name}`);
    console.log(`Streak: ${Player.streak}`);
    console.log(`Streak Status: ${Player.streakStatus}`);
    // calling the callback to show grace information
    callback("Hello I am a callback function");
    // the callback function is for showing grace,graceperiod and max grace period info
}

function showGraceInfo(message){
    // The callback function bring the message to this function as an argument
    // it created a new variable for message lol
    console.log(message);
    console.log(`Grace: ${Player.grace}`);
    console.log(`Grace Period: ${Player.gracePeriod}`);
    console.log(`Max Grace Period: ${Player.maxGracePeriod}`);
}
// Example usage:
showPlayerData(showGraceInfo);
