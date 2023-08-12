// Write a program that uses a "while" loop to count from 1 to 10 and prints each number.

let count = 1;
while (count <= 10) {
  console.log(count);
  count++;
}


// Write a program that takes a number as input and prints its multiplication table up to 10 using a "while" loop.

const number = parseInt(prompt("Enter a number:"));
let i = 1;

while (i <= 10) {
  console.log(number + " * " + i + " = " + (number * i));
  i++;
}