"use strict";
// --------------------------------------Exercise 1------------------
//Installing Done Node.js, TypeScript and VS Code on your computer.
// ANS: INSTALLATION DONE!
// --------------------------------------Exercise 2------------------
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName = "Numan";
console.log(`AsslamAliakum! ${personName},How are you?`);
// --------------------------------------Exercise 3 ------------------
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName2 = "Numan Abubakar";
console.log(" personName2.toLowerCase():", personName2.toLowerCase());
personName2.toUpperCase();
console.log(" personName2.toUpperCase():", personName2.toUpperCase());
function titlecase(name) {
    const words = name.split(" ");
    console.log("🚀 words:", words);
    const titlecasedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    return titlecasedWords.join(" ");
}
console.log(titlecase(personName2));
// --------------------------------------Exercise 4  ------------------
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log(`Albert Einstein once said,“A person who never made a mistake never tried anything new.”`);
// --------------------------------------Exercise 5  ------------------
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
const famous_person = "Albert Einstein";
const quote = `“ A person who never made a mistake never tried anything new.”`;
console.log(`${famous_person} once said, ${quote}`);
// --------------------------------------Exercise 6  ------------------
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
const nameWithSpace = "\t Muhammad Numan \n";
console.log("Name With Space :", nameWithSpace);
console.log("Name With strping :", nameWithSpace.trim());
// -----------Exercise 7 or 8------------------
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log(5 + 3); // additiion
console.log(11 - 3); // substraction
console.log(4 * 2); // multiplication
console.log(16 / 2); // division
// -----------Exercise 9------------------
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
const fvrtNum = 32;
console.log("My Favorite Number is ", fvrtNum);
// -----------Exercise 10------------------
// adding comments 
// Has been done in Exercise 2 and 3
// -----------Exercise 11------------------
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
const friendsNames = ["Abdullah", "Abdul Rehman", "Umar"];
friendsNames.forEach((i) => console.log(i));
// -----------Exercise 12------------------
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
friendsNames.forEach((i) => console.log(`AsslamAliakum! ${i} I Hope You are fine!`));
// -----------Exercise 13------------------
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
const frvtCars = ["Car", "Cycle", "Motorcycle"];
frvtCars.forEach((item) => console.log(`I would like to own a ${item}`));
