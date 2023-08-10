// Write a program that uses a "for" loop to print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Create a program that takes a number as input and prints its multiplication table up to 10.
const number = parseInt(prompt("Enter a number:"));
for (let i = 1; i <= 10; i++) {
  console.log(`${number} * ${i} = ${number * i}`);
}


// Create a program that prints the following pattern using nested "for" loops:

// *
// * *
// * * *
// * * * *
// * * * * *

for (let row = 1; row <= 5; row++) {
    let pattern = "";
    for (let col = 1; col <= row; col++) {
      pattern += "* ";
    }
    console.log(pattern);
}

