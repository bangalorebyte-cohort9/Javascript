var readline = require('readline-sync');

var name = readline.question("What is your name?");
var num1 = parseInt(readline.question("Enter number 1:"));
var num2 = parseInt(readline.question("Enter number 2:"));

console.log("The sum of two numbers is "+ (num1+num2))
console.log("Hi " + name + ", nice to meet you.");