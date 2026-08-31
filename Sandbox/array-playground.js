let Completed = [];
let InProgress = [];
let Skipped = [];
let NotStarted = [];
let AllTasks = ["Code JavaScript", "Read 5 pages", "Hit gym", "Meditate", "Drink Water"];

NotStarted = AllTasks.slice(); 
InProgress = AllTasks.splice(0,2);
NotStarted.splice(0,2)
console.log(InProgress);

if (Completed.includes("Code JavaScript")) {
    CanPlayGames = true;
} else {
    CanPlayGames = false;
}

// First check whether the task is in the list
if (AllTasks.includes("Hit gym")) {
// Completed the gym
Completed.push("Hit gym");
InProgress = InProgress.filter(task => task !== "Hit gym");
NotStarted = NotStarted.filter(task => task !== "Hit gym");
}

Completed.push("Read 5 pages"); // Completed reading 5 pages
InProgress = InProgress.filter(task => task !== "Read 5 pages");
NotStarted = NotStarted.filter(task => task !== "Read 5 pages");

// Skipped meditation
if (AllTasks.includes("Meditate") && !Completed.includes("Meditate")) {
    Skipped.push("Meditate");
    InProgress = InProgress.filter(task => task !== "Meditate");
    NotStarted = NotStarted.filter(task => task !== "Meditate");
}
// Completed drinking water
Completed.push("Drink Water");
InProgress = InProgress.filter(task => task !== "Drink Water");
NotStarted = NotStarted.filter(task => task !== "Drink Water");


// Creating a success condition if at least 3 of tasks are completed
let Success = false;
if (Completed.length >= 3) {
    Success = true;
// Create a Penalty if none of the tasks are completed
if (Completed.length === 0) {
    console.log("Penalty: No tasks completed");
}
}

console.log("Success:", Success);
console.log("CanPlayGames:", CanPlayGames);
console.log("To play games, you must completed Code Javascript task");
console.log("Completed:", Completed);
console.log("InProgress:", InProgress);
console.log("NotStarted:", NotStarted);
console.log("Skipped:", Skipped);
