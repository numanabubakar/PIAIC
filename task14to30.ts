// -----------Exercise 14------------------

  //Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

  const guestList:string[]=["Abdullah","Ali","Abdul Rehman","Umar","Abdul Wahab"]
  guestList.forEach((i)=>console.log(`Im Inviting you for Dinner! ${i}.`)
  )


// -----------Exercise 15------------------

  //Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

  const notCome:string="Ali";
console.log("Not Make it",notCome);
guestList.splice(1,1,"Numan")
// new list 
guestList.forEach((i)=>console.log(`Im Inviting you for Dinner! ${i}.`)
)

// -----------Exercise 16------------------

// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

console.log("founded a bigger dinner table");

guestList.unshift("Awais")

guestList.splice(guestList.length/2,0,"Umair")

guestList.push("Abdul Manan")

guestList.forEach((i)=>console.log(`Im Inviting you for Dinner! ${i}.`)
)

// -----------Exercise 17------------------


// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

console.log("I can invite only two people for dinner.");
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    if (removedGuest) {
      console.log(`Sorry, ${removedGuest}! You're no longer invited to dinner`);
    }
  }
  
  guestList.forEach((i)=>console.log(i,"you are still invited!")
  )
guestList.splice(0,2)

console.log("empty list :",guestList);
// -----------Exercise 18------------------


let locations: string[] = ["Paris", "Tokyo", "Rome", "New York", "Sydney"];

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



const guestList14:string[]=["Abdullah","Ali","Abdul Rehman","Umar","Abdul Wahab"]
console.log("No of Guest ",guestList14.length);


// -----------Exercise 20------------------

//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.


const countries: string[] = ["India", "United States", "Canada", "Australia", "Germany"];

console.log(countries); 

// -----------Exercise 21------------------


// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};

console.log(car.model);

// -----------Exercise 22------------------

// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

console.log(countries[10]);   //Intentional Error
console.log(countries[0]);   //Valid index


// -----------Exercise 23------------------

// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')




let carName: string = 'subaru';

console.log("Is car == 'subaru'? I predict true.");
console.log(carName == 'subaru');

console.log("Is carName == 'ford'? I predict false.");
console.log(carName == 'ford');

console.log("Is carName != 'honda'? I predict true.");
console.log(carName != 'honda');

console.log("Is carName === 'subaru'? I predict true.");
console.log(carName === 'subaru');

console.log("Is carName !== 'subaru'? I predict false.");
console.log(carName !== 'subaru');

console.log("Is carName !== 'ford'? I predict true.");
console.log(carName !== 'ford');


// -----------Exercise 24------------------


// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


const string1: string = "apple";
const string2: string = "orange";
console.log(string1 === string2); // False
console.log(string1 !== string2); // True

const lowercase1: string = "HELLO";
const lowercase2: string = "hello";
console.log(lowercase1.toLowerCase() === lowercase2.toLowerCase()); // True
console.log(lowercase1.toLowerCase() !== lowercase2.toLowerCase()); // False

const num1: number = 10;
const num2: number = 5;
console.log(num1 === num2); // False
console.log(num1 !== num2); // True
console.log(num1 > num2); // True
console.log(num1 < num2); // False
console.log(num1 >= num2); // True
console.log(num1 <= num2); // False


const value1: boolean = true;
const value2: boolean = false;
console.log(value1 && value2); // False
console.log(value1 || value2); // True

const fruits: string[] = ["apple", "orange", "banana"];
const searchItem: string = "orange";
console.log(fruits.includes(searchItem)); // True
const searchItem2: string = "BMW";
console.log(fruits.includes(searchItem)); // False

