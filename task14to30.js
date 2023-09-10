"use strict";
// -----------Exercise 14------------------
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
const guestList = ["Abdullah", "Ali", "Abdul Rehman", "Umar", "Abdul Wahab"];
guestList.forEach((i) => console.log(`Im Inviting you for Dinner! ${i}.`));
// -----------Exercise 15------------------
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
const notCome = "Ali";
console.log("Not Make it", notCome);
guestList.splice(1, 1, "Numan");
// new list 
guestList.forEach((i) => console.log(`Im Inviting you for Dinner! ${i}.`));
// -----------Exercise 16------------------
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
console.log("founded a bigger dinner table");
guestList.unshift("Awais");
guestList.splice(guestList.length / 2, 0, "Umair");
guestList.push("Abdul Manan");
guestList.forEach((i) => console.log(`Im Inviting you for Dinner! ${i}.`));
// -----------Exercise 17------------------
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
console.log("I can invite only two people for dinner.");
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    if (removedGuest) {
        console.log(`Sorry, ${removedGuest}! You're no longer invited to dinner`);
    }
}
guestList.forEach((i) => console.log(i, "you are still invited!"));
guestList.splice(0, 2);
console.log("empty list :", guestList);
// -----------Exercise 18------------------
let locations = ["Paris", "Tokyo", "Rome", "New York", "Sydney"];
// Print array in its original order
console.log("Original order:", locations);
// Print array in alphabetical order without modifying the original list
console.log("Alphabetical order:", locations.sort());
// Print array in its original order
console.log("Original order:", locations);
// Print array in reverse alphabetical order without modifying the original list
console.log("Reverse alphabetical order:", locations.sort().reverse());
// Print array in its original order
console.log("Original order:", locations);
// Reverse the order of the list
locations.reverse();
console.log("Reversed order:", locations);
// Reverse the order of the list again
locations.reverse();
console.log("Original order:", locations);
// Sort the array in alphabetical order
locations.sort();
console.log("Alphabetical order:", locations);
// Sort the array in reverse alphabetical order
console.log("Reverse alphabetical order:", locations.reverse());
// -----------Exercise 19------------------
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
const guestList14 = ["Abdullah", "Ali", "Abdul Rehman", "Umar", "Abdul Wahab"];
console.log("No of Guest ", guestList14.length);
