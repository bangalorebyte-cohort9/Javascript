var http = require('http');
var readline = require('readline-sync');


var name = readline.question("What is your name?");
var num1 = readline.question("Enter number 1:");
var num2 = readline.question("Enter number 2:");


n1 = parseInt(num1)
n2 = parseInt(num2)
n3 = n1+n2

http.createServer(function (req, res) {
  res.write("Hi " + name + ", nice to meet you.\n")
  res.write("The sum of two numbers is "+ n3)
  res.end();
}).listen(8081);