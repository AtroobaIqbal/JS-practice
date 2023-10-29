/*var city = prompt("enter your city");
if (city==="karachi"){
    alert("welcome to the city of lights");
}

var gender = prompt("what is your gender?");
if (gender==="mele") {
    alert("good morning sir");
}
if (gender==="female") {
    alert("good morning ma'am");
}

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

var currentAge = prompt("write your current age");
var maximumAge = prompt("write your maximum age");
if (currentAge <= maximumAge) {
    alert("you are welcome");
}

var fuel = prompt("remaining fuel in car (in litres)");
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

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
}*/

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