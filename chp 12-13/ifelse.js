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



6. Write a program that takes a character(number or string) in a
variable & checks whether the given input is a number,
uppercase letter or lower case letter. (Hint: ASCII codes:-
A=65, Z=90, a=97, z=122)

7. Write a program to create a calculator for +, -, *, /, % using
switch case statements. (number1, number2 and operator will
be input)

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
var saal = prompt("enter a year");
var leapsaal = saal * 4;
if ()



10. Write a program that
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then give
message “ Please enter your password”
ii. Check if both passwords are same. If they are same,
show message “Correct! The password you entered
matches the original password”. Show “Incorrect
password” otherwise.*/
