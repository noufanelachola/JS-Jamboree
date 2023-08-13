// Write a program that takes a student's score as input and prints "Pass" if the score is greater than or equal to 50, and "Fail" otherwise.
let score = 65;
let result = (score >= 50) ? "Pass" : "Fail";
console.log(result);



// Write a program that takes a number as input and prints "Even" if the number is even, and "Odd" otherwise.
let number = 7;
let parity = (number % 2 === 0) ? "Even" : "Odd";
console.log(parity);




// Write a program that calculates the final price of an item after applying a 10% discount if the price is above $100, or no discount if the price is $100 or below.
let price = 120;
let finalPrice = (price > 100) ? price * 0.9 : price;
console.log("Final Price: $" + finalPrice);
