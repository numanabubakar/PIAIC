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
console.log("🚀 ~ file: task14to30.ts:30 ~ guestList:", guestList);
