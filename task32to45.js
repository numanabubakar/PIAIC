"use strict";
// -----------Exercise 32------------------
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["numan", "usman", "malik", "umair", "talha"];
let new_users = ["NUMAN", "bilal", "salman", "malik", "umar"];
new_users.map((i) => {
    if (current_users.includes(i.toLowerCase())) {
        console.log("username has already been used");
    }
    else {
        console.log("username is valid");
    }
});
// -----------Exercise 33------------------
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ordinalNumbers.map((i) => {
    if (i == 1) {
        console.log(`${i}st`);
    }
    else if (i == 2) {
        console.log(`${i}nd`);
    }
    else if (i == 3) {
        console.log(`${i}rd`);
    }
    else {
        console.log(`${i}th`);
    }
});
// -----------Exercise 34------------------
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let pizzaNames = ["Pepperoni", "Chicken Tikka", "BBQ Chicken"];
for (let i = 0; i < pizzaNames.length; i++) {
    console.log("I like " + pizzaNames[i] + " pizza.");
}
console.log("I really love pizza!");
// -----------Exercise 35------------------
// Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animal_names = ["Dog", "Cat", "Rabbit"];
animal_names.map((i) => {
    console.log(`A ${i} would make a great pet`);
});
console.log(`Any of these animals would make a great pet`);
// -----------Exercise 36------------------
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
const makeShirt = (size, message) => {
    console.log(`You have ordered a ${size} shirt with the message: "${message}".`);
};
makeShirt("XL", "Hello World");
// -----------Exercise 37------------------
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeShirt2(size = "large", message = "I love TypeScript") {
    console.log(`You have ordered a ${size} shirt with the message: "${message}".`);
}
makeShirt2(); // Large shirt with default message
makeShirt2("medium"); // Medium shirt with default message
makeShirt2("small", "I love coding!"); // Custom-sized shirt with a different message
// -----------Exercise 38------------------
//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describeCity(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describeCity("Karachi"); // Karachi is in Pakistan
describeCity("London", "United Kingdom"); // London is in United Kingdom
describeCity("Tokyo", "Japan"); // Tokyo is in Japan
// -----------Exercise 39------------------
//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function cityCountry(city, country) {
    return `${city}, ${country}`;
}
console.log(cityCountry("Lahore", "Pakistan")); // Lahore, Pakistan
console.log(cityCountry("Paris", "France")); // Paris, France
console.log(cityCountry("Sydney", "Australia"));
function makeAlbum(artist, title, tracks) {
    const album = {
        artist,
        title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = makeAlbum("Artist 1", "Album 1");
const album2 = makeAlbum("Artist 2", "Album 2", 12);
const album3 = makeAlbum("Artist 3", "Album 3");
// Print the album information
console.log(album1); // { artist: 'Artist 1', title: 'Album 1' }
console.log(album2); // { artist: 'Artist 2', title: 'Album 2', tracks: 12 }
console.log(album3); // { artist: 'Artist 3', title: 'Album 3' }
// -----------Exercise 41------------------
function showMagicians(magicians) {
    magicians.map((i) => {
        console.log(i);
    });
}
// Create an array of magician's names
const magicianNames = ["John", "Harry", "Teller", "Dynamo"];
// Pass the array to the showMagicians function
showMagicians(magicianNames);
// -----------Exercise 42 & 43------------------
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// 43 => Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
const make_great = (magicians) => {
    const modifiedMagicians = magicians.map((i) => {
        console.log(`The Great ${i}`);
        return `The Great ${i}`;
    });
    return modifiedMagicians;
};
const modifiedMagicians = make_great(magicianNames);
console.log("🚀 ~ file: task32to45.ts:166 ~ modifiedMagicians:", modifiedMagicians);
// -----------Exercise 44------------------
function orderSandwich(items) {
    console.log("Summary of the sandwich order:");
    console.log("Bread: ", items[0]);
    console.log("Proteins: ", items.slice(1).join(", "));
}
// Call the function with different number of arguments
orderSandwich(["Wheat", "Ham", "Turkey"]);
orderSandwich(["White", "Chicken"]);
orderSandwich(["Multigrain", "Tuna", "Mayonnaise", "Lettuce", "Tomato"]);
function storeCarInfo(manufacturer, modelName, ...details) {
    const car = {
        manufacturer,
        modelName,
    };
    for (let i = 0; i < details.length; i += 2) {
        const key = details[i];
        const value = details[i + 1];
        car[key] = value;
    }
    return car;
}
const myCar = storeCarInfo("Toyota", "Camry", "color", "red", "year", 2022);
console.log(myCar);
