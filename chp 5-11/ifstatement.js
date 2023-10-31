//3. Write a program to take “city” name as input from user. If user
//enters “Karachi”, welcome the user like this: “Welcome to city
//of lights”
/*var city = prompt("enter your city");
if (city==="karachi"){
    alert("welcome to the city of lights");
}

4. Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the user is
female, give the message: Good Morning Ma’am.
var gender = prompt("what is your gender?");
if (gender==="male") {
    alert("good morning sir");
}
if (gender==="female") {
    alert("good morning ma'am");
}

5. Write a program to take input color of road traffic signal from
the user & show the message according to this table:
var color = prompt("write traffic signal color");
if (color==="red"){
    alert("vehicles must stop");
}
if (color==="yellow") {
    alert("vehicles should get ready to move");
}
if (color==="green") {
    alert("vehicles can move now");
}

6. Write a program to take input max age & current age from
user. If the current age is less than or equal to max age, show
the message “You are welcome”
var currentAge = prompt("write your current age");
var maximumAge = prompt("write your maximum age");
if (currentAge <= maximumAge) {
    alert("you are welcome");
}

7. Write a program to take input remaining fuel in car (in litres)
from user. If the current fuel is less than 0.25litres, show the
message “Please refill the fuel in your car”
var fuel = prompt("remaining fuel in car (in litres)");
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

8. Run this script, & check whether alert message would be
displayed or not. Record the outputs.
var a = 4;
if (++a === 5){
 alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
 alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
 alert("condition 1 is true");
}
if (c === 13){
 alert("condition 2 is true");
}
if (++c < 14){
 alert("condition 3 is true");
}
if(c === 14){
 alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
 alert("The cost equals");
}
if (true){
    alert("True");
}
if (false){
   alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");
}

9. Write a program to take input the marks obtained in three
subjects & total marks. Compute & show the resulting
percentage on your page. Take percentage & compute grade as
per following table:
var totalMarks = +prompt("enter total marks");
var obtainedMarks = +prompt("enter obtained marks of 3 subjects");
var Percentage = (obtainedMarks * 100) / totalMarks;
if (Percentage >= 80) {
    var grade = "a one";
    var remarks = "excellent";
    document.write("total marks ; " + totalMarks + "<br>" + "obtained Marks : " + obtainedMarks + "<br>" + 
    "percentage : " + Percentage + "<br>" + "grade : " + grade + "<br>" + "remarks : " + remarks);
}
if (Percentage >= 70 && Percentage < 79){
    var grade = "a";
    var remarks = "good";
    document.write("total marks ; " + totalMarks + "<br>" + "obtained Marks : " + obtainedMarks + "<br>" + 
    "percentage : " + Percentage + "<br>" + "grade : " + grade + "<br>" + "remarks : " + remarks);
}
if (Percentage >= 60 && Percentage < 69) {
    var grade = "b";
    var remarks = "you need to improve";
    document.write("total marks ; " + totalMarks + "<br>" + "obtained Marks : " + obtainedMarks + "<br>" + 
    "percentage : " + Percentage + "<br>" + "grade : " + grade + "<br>" + "remarks : " + remarks);
}
if ( Percentage < 60) {
    var grade = "fail";
    var remarks = "sorry";
    document.write("total marks ; " + totalMarks + "<br>" + "obtained Marks : " + obtainedMarks + "<br>" + 
    "percentage : " + Percentage + "<br>" + "grade : " + grade + "<br>" + "remarks : " + remarks);
}

10. Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Take input
from users, the following:
a. Name of item1
b. Name of item2
c. Price of item 1
d. Price of item 2
e. Ordered quantity of item 1
f. Ordered Quantity of item 2
g. Shipping charges
Compute the total cost. If the total cost is above 2000 PKR ,
offer them 10% discount & show the receipt in your browser.
var name1 = prompt("name of item 1");
var name2 = prompt("name of iten 2");
var price1 = +prompt("price of item 1");
var price2 = +prompt("price of item 2");
var quantity1 = +prompt("ordered quantity of item 1");
var quantity2 = +prompt("ordered quantity of iten 2");
var shipCharges = 250;
var totalPrice = (price1 * quantity1) + (price2 * quantity2) + shipCharges;
if (totalPrice >= totalPrice) {
    var discount = totalPrice * 0.9;
    document.write("price of " + name1 + " is " + price1 + "<br>" + "quantity of " + name1 + " is " + quantity1 + "<br>" 
    + "price of " + name2 + " is " + price2 + "<br>" + "quantity of " + name2 + " is " + quantity2 + "<br>" + "shipping charges is " + shipCharges + 
    "<br>" + "total cost of your order is " + totalPrice + "<br>" + "discounted price is " + discount);
}

11. Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”.
var secret = 5;
var guess = +prompt("guess a secret number");
if (guess===secret) {
    alert("bingo! correct answer");
}
if (guess!==secret) {
    alert("Close enough to the correct answer");
}

12. Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number is
divisible by 3.
var divi = +prompt("enter any number which is divisible by 3");
if (divi % 3 === 0) {
    document.write("this number is divisible by 3");
}

13. Names & Total scores of two teams are taken as input. Write
a program that shows which team has won the game or show if
there is a tie. (Team A or Team B)
var team1 = prompt("enter team 1 name");
var team2 = prompt("enter team 2 name");
var score1 = prompt("enter team 1 score");
var score2 = prompt("enter team 2 score");
if (score1 > score2) {
    alert(team1 + " won");
}
if (score2 > score1) {
    alert(team2 + " won");
}
if (score1 === score2) {
    alert("tie");
}

15. Write a program that checks whether the given input is an
even number or an odd number.
var num = +prompt("enter a number");
if (num % 2 === 0) {
    document.write("it is a even number");
}
if (num % 2 !== 0) {
    document.write("it is a odd number");
}

16. Weather in Karachi nowadays is too cool, write a program
that takes temperature as input and shows a message based on
following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.”
var temp = +prompt("enter temperature");
if (temp >= 40) {
    document.write("It is too hot outside.");
}
if (temp >= 30 && temp < 40) {
    document.write("The Weather today is Normal.");
}
if (temp >= 20 && temp < 30) {
    document.write("Today’s Weather is cool.");
}
if (temp >= 10 && temp < 20) {
    document.write("OMG! Today’s weather is so Cool.");
}*/

// question no 17 and 14 not done now 16 questions are done

