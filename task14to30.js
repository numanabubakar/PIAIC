"use strict";
// -----------Exercise 14------------------
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
const guestList = [
    "Abdullah",
    "Ali",
    "Abdul Rehman",
    "Umar",
    "Abdul Wahab",
];
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
const guestList14 = [
    "Abdullah",
    "Ali",
    "Abdul Rehman",
    "Umar",
    "Abdul Wahab",
];
console.log("No of Guest ", guestList14.length);
// -----------Exercise 20------------------
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
const countries = [
    "India",
    "United States",
    "Canada",
    "Australia",
    "Germany",
];
console.log(countries);
// -----------Exercise 21------------------
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
const car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009,
};
console.log(car.model);
// -----------Exercise 22------------------
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
console.log(countries[10]); //Intentional Error
console.log(countries[0]); //Valid index
// -----------Exercise 23------------------
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
let carName = "subaru";
console.log("Is car == 'subaru'? I predict true.");
console.log(carName == "subaru");
console.log("Is carName == 'ford'? I predict false.");
console.log(carName == "ford");
console.log("Is carName != 'honda'? I predict true.");
console.log(carName != "honda");
console.log("Is carName === 'subaru'? I predict true.");
console.log(carName === "subaru");
console.log("Is carName !== 'subaru'? I predict false.");
console.log(carName !== "subaru");
console.log("Is carName !== 'ford'? I predict true.");
console.log(carName !== "ford");
// -----------Exercise 24------------------
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
const string1 = "apple";
const string2 = "orange";
console.log(string1 === string2); // False
console.log(string1 !== string2); // True
const lowercase1 = "HELLO";
const lowercase2 = "hello";
console.log(lowercase1.toLowerCase() === lowercase2.toLowerCase()); // True
console.log(lowercase1.toLowerCase() !== lowercase2.toLowerCase()); // False
const num1 = 10;
const num2 = 5;
console.log(num1 === num2); // False
console.log(num1 !== num2); // True
console.log(num1 > num2); // True
console.log(num1 < num2); // False
console.log(num1 >= num2); // True
console.log(num1 <= num2); // False
const value1 = true;
const value2 = false;
console.log(value1 && value2); // False
console.log(value1 || value2); // True
const fruits = ["apple", "orange", "banana"];
const searchItem = "orange";
console.log(fruits.includes(searchItem)); // True
const searchItem2 = "BMW";
console.log(fruits.includes(searchItem)); // False
// -----------Exercise 25------------------
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
var alien_color = "green";
if (alien_color === "green") {
    console.log("Congratulations! You just earned 5 points!");
}
alien_color = "red";
if (alien_color === "green") {
    console.log("Congratulations! You just earned 5 points!");
}
// -----------Exercise 26------------------
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let alien_color2 = "green";
if (alien_color2 == "green") {
    console.log("player just earned 5 points for shooting the alien");
}
else {
    console.log(" player just earned 10 points");
}
// -----------Exercise 27------------------
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
if (alien_color2 == "green") {
    console.log("Player earned 5 points");
}
else if (alien_color2 == "yellow") {
    console.log("player earned 10 ponts");
}
else if (alien_color2 == "red") {
    console.log("player just earned 15 points");
}
else {
    console.log("player earned 0 points");
}
// -----------Exercise 28------------------
//  Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
let age = 5;
if (age < 2) {
    console.log("Person is baby");
}
else if (age == 2 || age < 4) {
    console.log("Person is toddler");
}
else if (age == 13 || age < 20) {
    console.log("Person is teenager");
}
else if (age == 20 || age < 65) {
    console.log("Person is adult");
}
else {
    console.log("person is elder");
}
// -----------Exercise 29------------------
/* Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas! */
let favorite_fruits = ["banana", "strawberry", "mango"];
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas! ");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries! ");
}
if (favorite_fruits.includes("mango")) {
    console.log("You really like mangoes! ");
}
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples! ");
}
if (favorite_fruits.includes("watermelon")) {
    console.log("You really like watermelons! ");
}
