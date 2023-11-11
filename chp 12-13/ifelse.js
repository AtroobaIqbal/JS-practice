/*1. Write a program to check whether the given input number is
divisible by 3 or else show a message “Number is not divisible
by 3”.
var divi = +prompt("enter any number which is divisible by 3");
if (divi % 3 === 0) {
    document.write("this number is divisible by 3");
}
else{
    document.write("this number is not divisible by 3");
}

2. Write a program that checks whether the given input is an even
number or an odd number.
var num = +prompt("enter a number");
if (num % 2 === 0) {
    document.write("it is a even number");
}
else {
    document.write("it is a odd number");
}

3. Write an if/else statement with the following condition:
If the variable age is greater than 18, output "Old enough",
otherwise output "Too young".
var age = +prompt("enter your age");
if (age > 18) {
    document.write("old enough");
} else{
    document.write("too young");
}

4. Write a program that prompts the user for their name, and then
displays a special greeting to that person if their name is the
same as yours. If the name entered by the user is anything
other than your name, your code should not produce any
output.
var name = "elsa";
var clName = prompt("enter your name");
if (name === clName) {
    document.write("good luck");
} 

5. Write a program to check whether the given input number is
divisible by 3 or not by using Switch Case statements. Show a
message “Number is not divisible by 3” or “Number is divisible
by 3”.
var userInput = +prompt("Enter a number:");
switch (userInput % 3) {
    case 0:
        console.log(userInput + " is divisible by 3.");
        break;
    default:
        console.log(userInput + " is not divisible by 3.");
} 

6. Write a program that takes a character(number or string) in a
variable & checks whether the given input is a number,
uppercase letter or lower case letter. (Hint: ASCII codes:-
A=65, Z=90, a=97, z=122)
var userInput = prompt("Enter a character (number or string):");
if (userInput.length === 1) {
    var charCode = userInput.charCodeAt(0);
    if (charCode >= 48 && charCode <= 57) {
        console.log(userInput + " is a number.");
    }
    else if (charCode >= 65 && charCode <= 90) {
        console.log(userInput + " is an uppercase letter.");
    }
    else if (charCode >= 97 && charCode <= 122) {
        console.log(userInput + " is a lowercase letter.");
    }
    else {
        console.log(userInput + " is not a number or a letter.");
    }
} else {
    console.log("Invalid input. Please enter a single character.");
}


7. Write a program to create a calculator for +, -, *, /, % using
switch case statements. (number1, number2 and operator will
be input)
var num1 = +prompt("enter any number");
var num2 = +prompt("enter any number");
var oper = prompt("enter any operation + - * / %");
if (oper === "+") {
    document.write(num1 , " + " , num2 , "=" , (num1 + num2))
} else if (oper === "-") {
    document.write(num1 , " - " , num2 , "=" , (num1 - num2))
} else if (oper === "*") {
    document.write(num1 , " * " , num2 , "=" , (num1 * num2))
} else if (oper === "/") {
    document.write(num1 , " / " , num2 , "=" , (num1 / num2))
} else if (oper === "%") {
    document.write(num1 , " % " , num2 , "=" , (num1 % num2))
}

8. Write a program that takes time as input from user in 24 hours
clock format like: 1900 = 7pm. Implement the following case
using if, else & else if statements.
var time = prompt("enter time in 24 hrs format");
if (time >= 0000 && time < 1200) {
    document.write("good morning");
} else if(time >= 1200 && time < 1700) {
    document.write("good afternoon");
} else if (time >= 1700 && time < 2100) {
    document.write("good evening");
} else if (time >= 2100 && time < 2359) {
    document.write("good night");
}

9. Write a program that takes a calendar year in YYYY format in
a variable. Check & notify the user whether it is a leap year or
not.
var saal = +prompt("enter a year");
if ((saal % 4 === 0 && saal % 100 !== 0) || (saal % 400 === 0)) {
    console.log(saal + " is a leap year.");
} else {
    console.log(saal + " is not a leap year.");
}

10. Write a program that
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then give
message “ Please enter your password”
ii. Check if both passwords are same. If they are same,
show message “Correct! The password you entered
matches the original password”. Show “Incorrect
password” otherwise.
var corPas = "mysecret";
var userPas = prompt("enter your password");
if (userPas === corPas) {
    document.write("Correct! The password you entered matches the original password");
} else {
    document.write("incorrect password");
}

11. Write a program that adds an else statement to the following
script to display “You are not Fahad”
var firstName = prompt("enter your name");
if (firstName === "Fahad") {
 document.write("Hello Fahad!");
} else {
    console.log("you are not Fahad");
}
12. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    console.log(greeting)
} else {
    greeting = "Good evening";
    console.log(greeting)
} 

 13. Write a JavaScript program that accept two integers and
 display the larger. Also show if the two integers are equal.
 var firstint = +prompt("enter an integer");
 var secondint = +prompt("enter an integer");
 if (firstint > secondint) {
    console.log(firstint + "is greater");
 } else if (secondint > firstint) {
    console.log(secondint + "is greater");
 } else {
    console.log(firstint , secondint , "both are equal");
 }

 14. Write a program that takes input a number from user & state
whether the number is positive, negative or zero.
var newnum = +prompt("enter a number");
if (newnum < 0 ) {
    document.write("numbr is negative");
} else if (newnum > 0) {
    document.write("number is positive");
} else {
    document.write("number is zero");
}

15. Ask the user what the current hour is. If the hour is between
6 and 9 a.m., tell the user, "Breakfast is served." If the hour is
between 11 a.m. and 1 p.m., tell the user, "Time for lunch." If
the hour is between 5 and 8 p.m., tell the user, "It's dinner
time." For any other hours, tell the user, "Sorry, you'll have to
wait, or go get a snack." (Hint: Store the hour in 24 hours clock
format i.e. 14 for 2pm , 15 for 3pm)*/
var time = prompt("enter your time");
if (time >= 6 || time <= 9) {
    document.write("Breakfast is served");
} else if (time >= 11 || time <= 13) {
    document.write("Time for lunch.");
} else if (time >= 17 || time <= 20) {
    document.write("It's dinner time.");
} else {
    document.write("Sorry, you'll have to wait, or go get a snack.")
}