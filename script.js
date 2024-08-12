// 1. Declare 3 variables in one statement.

let myName = "Humna Anees", Qualification = "Enter", Field = "Computer Science";
document.write(myName + "<br>" + Qualification + "<br>" + Field + "<br>");
console.log(myName + "\n" + Qualification + "\n" + Field);



// Question 2:Declare 5 legal & 5 illegal variable names. 
// legal
var firstName = "John", $price = 25.99 , _age = 30, userName = "Alice", totalAmount = 100;
document.write(firstName + "<br>" + $price + "<br>" + _age + "<br>" + userName + "<br>" + totalAmount + "<br>");
console.log(firstName + "\n" + $price + "\n" + _age + "\n" + userName + "\n" + totalAmount + "\n");

// illegal
var illegal_case1 = "1stPlace", illegal_case2 = "user-name", illegal_case3 = "@home", illegal_case4 = "let", illegal_case5 = "user name";
document.write(illegal_case1 + "<br>" + illegal_case2 + "<br>" + illegal_case3 + "<br>" + illegal_case4 + "<br>" + illegal_case5 + "<br>");
console.log(illegal_case1 + "\n" + illegal_case2 + "\n" + illegal_case3 + "\n" + illegal_case4 + "\n" + illegal_case5 + "\n");


// illegal veriables .Here are five examples of illegal variable names, along with explanations for why they are illegal:
// 1stPlace

// Reason: Variable names cannot start with a number.
// user-name

// Reason: Hyphens - are not allowed in variable names (they are interpreted as the subtraction operator).
// @home

// Reason: Special characters like @ are not allowed in variable names (except for $ and _).
// let

// Reason: let is a reserved keyword in JavaScript, so it cannot be used as a variable name.
// user name

// Reason: Variable names cannot contain spaces.





// Question 3:Display this in your browser.
var heading = " JS ";
document.write("<h3>" + "Rules for naming" + heading + "variables" + "</h3>" + "<br>");
console.log("Rules for naming" + heading + "variables" + "<br>");

var a = "numbers, $ and _ ";
document.write(" Variable names can only contain " + a + "For example $my_1stVariable " + "<br>");
console.log(" Variable names can only contain " + a + "For example $my_1stVariable " + "<br>");
var b = "letter, $ and _ ";
document.write("Variables must begin with a " + b + "For example $name, _name or name" + "<br>");
console.log("Variables must begin with a " + b + "For example $name, _name or name" + "<br>");
var c = "sensitive";
document.write("Variable names are case " + c + "<br>");
console.log("Variable names are case " + c + "<br>");
var d = "keywords";
document.write("Variable names should not be JS " + d);
console.log("Variable names should not be JS" + d);