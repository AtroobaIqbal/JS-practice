/*1. Declare an empty array using JS literal notation to store
student names in future.
var name = [];

2. Declare an empty array using JS object notation to store
student names in future.
let studentsName = {
    futStudentsName : []
}

3. Declare and initialize a strings array.
var arr = ["atrooba" , "iqbal"];

4. Declare and initialize a numbers array.
var numArr = [28 , 08 , 2002];

5. Declare and initialize a boolean array.
var bool = [true , false];

6. Declare and initialize a mixed array.
var mixArr = ["atts" , 03 , true];

7. Declare and Initialize an array and store available mobile
networks in Pakistan.
var network = ["jazz" , "ufone" , "telenor" , "zong"];

8. Declare and Initialize an array and store available education
qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS,
M. Phil., PhD). Show the listed qualifications in your browser
like:
let qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];
document.write("<h2>Educational Qualifications in Pakistan:</h2>");
document.write("<ul>");
for (let i = 0; i < qualifications.length; i++) {
    document.write(`<li>${qualifications[i]}</li>`);
}
document.write("</ul>");

9. Declare and initialize an empty array to store top movies of
2015. Add movies one by one in an array. Display the elements
& length of array in your browser. (Use array’s length method)
let topMovies2015 = [];
topMovies2015.push('Star Wars: The Force Awakens');
topMovies2015.push('Jurassic World');
topMovies2015.push('Avengers: Age of Ultron');
topMovies2015.push('Inside Out');
topMovies2015.push('Mad Max: Fury Road');
document.write("<h2>Top Movies of 2015:</h2>");
document.write("<ol>");
for (let i = 0; i < topMovies2015.length; i++) {
    document.write(`<li>${topMovies2015[i]}</li>`);
}
document.write(`</ol><p>Number of movies in the list: ${topMovies2015.length}</p>`);

10. Declare and Initialize an array with your favorite cars. Show
a. First index of the array
b. Car at first index of the array
c. Last index of the array
d. Car at last index of the array
let favoriteCars = ['Tesla Model S', 'Porsche 911', 'BMW M3', 'Audi R8'];
let firstIndex = 0;
let carAtFirstIndex = favoriteCars[firstIndex];
let lastIndex = favoriteCars.length - 1;
let carAtLastIndex = favoriteCars[lastIndex];
document.write("<h2>Favorite Cars:</h2>");
document.write(`<p>a. First index of the array: ${firstIndex}</p>`);
document.write(`<p>b. Car at first index: ${carAtFirstIndex}</p>`);
document.write(`<p>c. Last index of the array: ${lastIndex}</p>`);
document.write(`<p>d. Car at last index: ${carAtLastIndex}</p>`);

11. Write a program to store 3 student names in an array. Take
another array to store score of these three students. Assume
that total marks are 500 for each student, display the scores &
percentages of students like:
var shagird = ["Michael" , "John" , "Tony"];
var numBers = [320 , 230 , 480];
document.write("<h2>Student Scores & Percentages:</h2>");
for (let i = 0; i < shagird.length; i++) {
    let percentage = (numBers[i] / 500) * 100;
    document.write(`<p>${shagird[i]}'s Score: ${numBers[i]} out of 500</p>`);
    document.write(`<p>${shagird[i]}'s Percentage: ${percentage}%</p>`);
}

12. Initialize an array with color names. Display the array
elements in your browser.
a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser.
b. Ask the user what color he/she wants to add to the end &
add that color to the end of the array. Display the updated
array in your browser.
c. Add two more color to the beginning of the array. Display
the updated array in your browser.
d. Delete the first color in the array. Display the updated
array in your browser.
e. Delete the last color in the array. Display the updated
array in your browser.
f. Ask the user at which index he/she wants to add a color &
color name. Then add the color to desired position/index.
. Display the updated array in your browser.
g. Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then
remove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser.*/
var colours = ["red","blue","green","yellow","purple","orange"];
/*document.write(colours , "</br>");
var ask = prompt("enter a colour name that you want to add");
colours.unshift(ask);
document.write(colours);
var ask1 = prompt("enter a colour name that you want to add at the end");
colours.push(ask1);
document.write(colours);
colours.unshift("white" , "black");
document.write(colours , "</br>");
colours.shift();
document.write(colours , "</br>");
colours.pop();
document.write(colours);
var ask2 = prompt("enter a colour name that you want to add");
var posit = prompt("at which position you want to add the colour");
colours.splice(posit , )
f and g are not document





13. Write a program to store student scores in an array & sort
the array in ascending order using Array’s sort method. */
