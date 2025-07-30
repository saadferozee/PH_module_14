/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/


let myScore = 80;
let friendsScore = 80;

if (myScore >= 80) {
    if (friendsScore >= 80) {
        console.log ("We'll go for a Lunch")
    }
    else if (friendsScore >= 60) {
        console.log ("Good luck, next time.")
    }
    else if (friendsScore >= 40) {
        console.log ("Message Unseen")
    }
    else {
        console.log ("Block")
    }
}
else {
    console.log ("Go to Home and sleep, Act like sad")
}

// shorthand if else statement.
myScore >= 80 ? friendsScore >= 80 ? console.log("We'll go for a Lunch.") : console.log("Message Unseen"): console.log("Go home and sleep");