//1. Write a program that take two numbers & add them in a new
//variable. Show the result in your browser.
//var num1 = 2;
//var num2 = 5;
//alert("the sum of 2 + 5 is" + " " + num1 + num2 );

//2. Repeat task1 for subtraction, multiplication, division &
//modulus.
//alert("the sum of 5 - 2 is" , " " , num2 - num1);
//console.log("the sum of 5 - 2 is" , " " , num2 - num1);

//console.log("the sum of 5 / 2 is" , " " , num2 / num1);

//console.log("the sum of 5 * 2 is" , " " , num2 * num1);

//console.log("the sum of 5 % 2 is" , " " , num2 % num1);

//3. Do the following using JS Mathematic Expressions
//a. Declare a variable.
//b. Show the value of variable in your browser like “Value
//after variable declaration is: ??”.
//c. Initialize the variable with some number.
//d. Show the value of variable in your browser like “Initial
//value: 3”.
//e. Increment the variable.
//f. Show the value of variable in your browser like “Value
//after increment is: 4”.
//g. Add 7 to the variable.
//h. Show the value of variable in your browser like “Value
//after addition is: 11”.
//i. Decrement the variable.
//j. Show the value of variable in your browser like “Value
//after decrement is: 10”.
//k. Show the remainder after dividing the variable’s value by
//3. Output : “The remainder is : 1”
var point;
point = "value";
point = 22;
//document.write("initial value of variable is" + " " + point);

newNum = ++point;
//document.write("initial value of variable after increment is" + " " + newNum);

new2 = newNum + 7;
//document.write(" value of variable after addition is" , " " , new2);

newNum2 = --new2;
//document.write(" value of variable after decreement is" , " " , newNum2);

new3 = newNum2 / 3;
//document.write(" value of variable after divide is" , " " , new3);

//4. Cost of one movie ticket is 600 PKR. Write a script to store
//ticket price in a variable & calculate the cost of buying 5 tickets
//to a movie.
var price = 600;
var cost = price * 5;
//document.write("total cost to buy 5 tickets to a movie is" , " " , cost , " " , "PKR");

//5. Write a script to display multiplication table of any number in
//your browser. 
//document.write( "4 * 1 = 4"+"<br>"+"4 * 2 = 8"+"<br>"+"4 * 3 = 12"+"<br>"+"4 * 4 = 16"+"<br>"+"4 * 5 = 20"+"<br>"+"4 * 6 = 24"+"<br>"+"4 * 7 = 28"+"<br>"+"4 * 8 = 32"+"<br>"+"4 * 9 = 36"+"<br>"+"4 * 10 = 40");

//6. The Temperature Converter: It’s hot out! Let’s make a
//converter based on the steps here.
//a. Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//c. Now store a Fahrenheit temperature into a variable.
//d. Convert it to Celsius & output “NNoF is NNoC”.
var temp1 = 12;
var fah = (temp1 * 9 / 5) + 32;
var temp2 = 68;
var c3ls = (temp2 - 32) * 5 / 9; 
//document.write("12 C is" + " " + fah + "F" + "<br>" + "68 F is" + " " + c3ls + "C");

//7. Write a program to implement checkout process of a shopping
//cart system for an e-commerce website. Store the following in
//variables
//a. Price of item 1
//b. Price of item 2
//c. Ordered quantity of item 1
//d. Ordered Quantity of item 2
//e. Shipping charges
//Compute the total cost & show the receipt in your browser.
var item1 = 500;
var item2 = 700;
var quant1 = 2;
var quant2 = 5;
var shipp = 250;
//var total = (item1 * quant1) + (item2 * quant2) + shipp;
//document.write("price of item 1 is " + item1 + "<br>" + "quantity of item 1 is " + quant1 + "<br>" + "price of item 2 is " + item2 + "<br>" + "quantity of item 2 is " + quant2 + "<br>" + "Shipping charges is " + shipp + "<br>" + "total cost of your order is " + total);

//8. Write a script to take total marks & marks obtained by a
//student. Compute the percentage & show the result in your
//browser.
var totalMarks = 550;
var obtainedMarks = 403;
var percent = (totalMarks * 100) / obtainedMarks;
//document.write("Total Marks : " + totalMarks + "<br>" + "Obtained Marks : " + obtainedMarks + "<br>" + "Percentage : " + percent + "%");

//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script
//to convert the total currency to Pakistani Rupees. Perform all
//calculations in a single expression.
var usd = 10;
var riyal = 25;
var usdToPkr = usd * 276;
var riyalToPkr = riyal * 73;
var total = usdToPkr + riyalToPkr;
//document.write("total currency in pkr : " + total);

//10. Write a program to initialize a variable with some number
//and do arithmetic in following sequence:
//a. Add 5
//b. Multiply by 10
//c. Divide the result by 2
//Perform all calculations in a single expression.
var nuM = 8;
var sum1 = ((nuM + 5) * 10) / 2;
//alert(sum1);

//11. The Age Calculator: Forgot how old someone is? Calculate
//it!
//a. Store the current year in a variable.
//b. Store their birth year in a variable.
//c. Calculate their 2 possible ages based on the stored values.
//Output them to the screen like so: “They are either NN or NN
//years old”. 
var currentYear = 2023;
var birthYear = 2002;
var possibleAge = "20 or 21 years old";
//document.write("current year : " + currentYear + "<br>" + "birth year : " + birthYear + "<br>" + "they are either " + possibleAge );

//12. The Geometrizer: Calculate properties of a circle.
//a. Store a radius into a variable.
//b. Calculate the circumference based on the radius, and
//output “The circumference is NN”.
//(Hint : Circumference of a circle = 2 π r , π = 3.142)
//Calculate the area based on the radius, and output “The area is
//NN”. (Hint : Area of a circle = π r2, π = 3.142)
var radius = 4;
var circumference = 2 * 3.142 * 4;
var area = 3.142 * (4 * 4);
//document.write("Radius of a circle : " + radius + "<br>" + "The circumference is : " + circumference + "<br>" + "The area is : " + area);

//13. Write a program to take a number in a variable, do the
//required arithmetic to display the following result in your
//browser:
var a = 6;
var stat1 = "the value of a is ";
//document.write(stat1 + a + "<br>");

var newa = ++a;
var stat2 = "now the value of ++a is ";
//document.write(stat1 + newa + "<br>" + stat2 + newa + "<br>");

var newA = a++;
var stat3 = "now the value of a++ is ";
//document.write(stat1 + a + "<br>" );
//document.write(stat3 + a + "<br>");

var olda = --a;
var stat4 = "now the value of --a is ";
//document.write(stat1 + newA + "<br>" + stat4 + olda + "<br>");

var oldA = a--;
var stat5 = "now the value of a-- is ";
//document.write(stat1 + olda + "<br>" + stat5 + oldA + "<br>");

var newadd = a;
var stat6 = "now the value of last a is ";
//ocument.write(stat6 + newadd);

//14. What will be the output in variables a, b & result after
//execution of the following script:
 //var a = 2, b = 1;
 //var result = --a - --b + ++b + b--;
//Explain the output at each stage:
 //--a;
 //--a - --b;
 //--a - --b + ++b;
 //--a - --b + ++b + b--;
var b = 2;
var c = 1;
var result = --b - --c + ++c + c--;
//document.write(result  + "<br>");

var result1 = --b;
//document.write(result1 + "<br>");

var result2 = --b - --c;
//document.write(result2 + "<br>");

var result3 = --b - --c + ++c;
//document.write(result3 + "<br>");

var result4 = --b - --c + ++c + c--;
//document.write(result4 + "<br>");

//15. The Lifetime Supply Calculator: Ever wonder how
//much a “lifetime supply” of your favorite snack is? Wonder no
//more.
//a. Store your favorite snack into a variable
//b. Store your current age into a variable.
//c. Store a maximum age into a variable.
//d. Store an estimated amount per day (as a number).
//e. Calculate how many would you eat total for the rest of
//your life.
//Output the result to the screen like so: “You will need NNNN to
//last you until the ripe old age of NN”
var favSnack = "kurkure";
var curAge = 21;
var maxAge = 50;
var amount = 5;
var ageResult = (maxAge - curAge) * amount;
document.write("You will need "+ ageResult +" to last you until the ripe old age of "+ maxAge);