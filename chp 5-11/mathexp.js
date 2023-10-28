//var num1 = 2;
//var num2 = 5;
//alert("the sum of 2 + 5 is" + " " + num1 + num2 );

//alert("the sum of 5 - 2 is" , " " , num2 - num1);
//console.log("the sum of 5 - 2 is" , " " , num2 - num1);

//console.log("the sum of 5 / 2 is" , " " , num2 / num1);

//console.log("the sum of 5 * 2 is" , " " , num2 * num1);

//console.log("the sum of 5 % 2 is" , " " , num2 % num1);

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

var price = 600;
var cost = price * 5;
//document.write("total cost to buy 5 tickets to a movie is" , " " , cost , " " , "PKR");

//document.write( "4 * 1 = 4"+"<br>"+"4 * 2 = 8"+"<br>"+"4 * 3 = 12"+"<br>"+"4 * 4 = 16"+"<br>"+"4 * 5 = 20"+"<br>"+"4 * 6 = 24"+"<br>"+"4 * 7 = 28"+"<br>"+"4 * 8 = 32"+"<br>"+"4 * 9 = 36"+"<br>"+"4 * 10 = 40");

var temp1 = 12;
var fah = (temp1 * 9 / 5) + 32;
var temp2 = 68;
var c3ls = (temp2 - 32) * 5 / 9; 
//document.write("12 C is" + " " + fah + "F" + "<br>" + "68 F is" + " " + c3ls + "C");

var item1 = 500;
var item2 = 700;
var quant1 = 2;
var quant2 = 5;
var shipp = 250;
//var total = (item1 * quant1) + (item2 * quant2) + shipp;
//document.write("price of item 1 is " + item1 + "<br>" + "quantity of item 1 is " + quant1 + "<br>" + "price of item 2 is " + item2 + "<br>" + "quantity of item 2 is " + quant2 + "<br>" + "Shipping charges is " + shipp + "<br>" + "total cost of your order is " + total);

var totalMarks = 550;
var obtainedMarks = 403;
var percent = (totalMarks * 100) / obtainedMarks;
//document.write("Total Marks : " + totalMarks + "<br>" + "Obtained Marks : " + obtainedMarks + "<br>" + "Percentage : " + percent + "%");

var usd = 10;
var riyal = 25;
var usdToPkr = usd * 276;
var riyalToPkr = riyal * 73;
var total = usdToPkr + riyalToPkr;
//document.write("total currency in pkr : " + total);

var nuM = 8;
var sum1 = ((nuM + 5) * 10) / 2;
//alert(sum1);

var currentYear = 2023;
var birthYear = 2002;
var possibleAge = "20 or 21 years old";
//cument.write("current year : " + currentYear + "<br>" + "birth year : " + birthYear + "<br>" + "they are either " + possibleAge );

var radius = 4;
var circumference = 2 * 3.142 * 4;
var area = 3.142 * (4 * 4);
//document.write("Radius of a circle : " + radius + "<br>" + "The circumference is : " + circumference + "<br>" + "The area is : " + area);

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

var favSnack = "kurkure";
var curAge = 21;
var maxAge = 50;
var amount = 5;
var ageResult = (maxAge - curAge) * amount;
document.write("You will need "+ ageResult +" to last you until the ripe old age of "+ maxAge);