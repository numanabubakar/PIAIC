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
const auther = "Albert Einstein, ";
const quote = `“ A person who never made a mistake never tried anything new.”`;
console.log(`${auther} once said, ${quote}`);
