/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


let ticketPrice = 800;

let passengerAge = 65;
let isStudent = false;
let discount = null;

if (isStudent) {
    discount = .5;
} else {
    if (passengerAge < 10) {
        discount = 0;
    } else if (passengerAge >= 60) {
        discount = .85;
    } else {
        discount = 1;
    }
}

let fare = ticketPrice * discount;
console.log("Pay " + fare + "tk.");