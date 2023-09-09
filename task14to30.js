// -----------Exercise 14------------------
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = ["Abdullah", "Ali", "Abdul Rehman", "Umar"];
guestList.forEach(function (i) { return console.log("Im Inviting you for Dinner! ".concat(i, ".")); });
// -----------Exercise 14------------------
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var notCome = "Ali";
console.log(notCome);
guestList.splice(1, 1, "Numan");
// new list 
guestList.forEach(function (i) { return console.log("Im Inviting you for Dinner! ".concat(i, ".")); });
