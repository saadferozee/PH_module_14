/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/


let score = 80;

// console.log ("score")

if (score > 100) {
    console.log ("Enter a valid score !")
}
else {
    if (score >= 90) {
        console.log ("Your Grade Is A")
    }
    else if (score >= 80) {
        console.log ("Your Grade is B")
    }
    else if (score >= 70) {
        console.log ("Your Grade is C")
    }
    else if (score >= 60) {
        console.log ("Your Grade is D")
    }
    else {
        console.log ("You are fail this exam")
    }
}