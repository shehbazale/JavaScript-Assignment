//==================== Exercise    1  ====================//

// Q 1. Write a script to greet your website visitor using JS alert
// box.
// Ans
alert("Welcome to Travel Again websites");

// Q 2: Write a script to display following message on your web
// page:
// Ans

// alert("Error! please enter a valid password.");

// Q 3:3. Write a script to display following message on your web
// page: (Hint : Use line break)
// Ans

//  alert ("Welcome to JS land..."+ '\n' +
//         "Happy Coding!");

//  Q 4. Write a script to display following messages in sequence:
// Ans
// alert ("Welcome to JS Land...");
// alert ("Happy Coding!");

// Q 5. Generate the following message through browser’s
// developer.
// Ans
// alert ("helo... I can run JS through my web browser's console");
// console.log("helo... I can run JS through my web browser's console");

// ===========================================================================//

//  ===========================  Exercise 2 VARIABLES FOR STRINGS=====================//

// Q 1: Declare a variable called username.
// Ans
var username;

// Q 2: Declare a variable called myName & assign to it a string
// that represents your Full Name.
// Ans
var myName = "Shehbaz Ali";

// Q 3 : Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

// Ans
//  var message;
//  message = "Hello World";
//  alert(message);

// Q 4: Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.

// Ans
// var name1  = "Shehbaz Ali";
// var age   = 26;
// var certification = "Certified front end developer";
//     alert(name1);
//     alert(age);
//     alert(certification);

//     Q 5 : Write a script to display the following alert using one JS
// variable:
// PIZZA
// PIZZ
// PIZ
// PI
// P
// Ans

// var fastFood = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(fastFood);

// Q 6 : Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)
// Ans
// var email ="shah@gmail.com";
// alert ("My email address is"+ " " +email);

// Q 7: Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

//   Ans
// var book = "A smarter way to learn Javascript";
// alert("I am trying to learn from the book " + " "+book);
// Q 8: Write a script to display this in browser through JS
// Ans

//  var showData = "Yeh! I can write HTML content through Javascript";
//  document.write (showData);

// Q 9 :Store following string in a variable and show in alert and
// browser through JS
// “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”

//   Ans
// var line = " ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ ";
// alert(line);
// document.write(line);

// =============================================================//

// ==================================Exercise 3 ==============//
// Q 1:    Declare a variable called age & assign to it your age. Show
// your age in an alert box.
// Ans
// var age = 26;
// alert("I am "+ age + " years old");

// Q 2: Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her number of visits on your web page.
//  For example: “You have visited this site N times”.

// var visitedTime =0;
// visitedTime++;
// alert("you have visited this site " +visitedTime+" times ");

// Q 3:Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:
// My birth year is 1990
// Data type of my declared varible is number
// Ans

// var DOB= 1997;
// document.write("My birth year is " + DOB + '\n'
//  +"Data type of my declared varible is " +typeof(DOB));

// Q 4: A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to  order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

// Ans

//  var visitorName = "<b>John Doe</b>";
//  var productTitle = "<b>T-Shirt(s)</b>";
//  var quantity = '<b>' +5 +'</b>';
// //  var storeName = "XYZ Clothing store";
// document.write(visitorName+" ordered " + quantity +" " +productTitle+" on XYZ CLothing Store");

// ==================  Exercise  4    ============================ //

// Q 1: Declare 3 variables in one statement.
// Ans:
//  var fName = "Shehbaz", lName= "Ali", gender = "Male";

// Q 2: Declare 5 legal & 5 illegal variable names.
// Ans:

//  5 Legal variables
//  var firstName;
//  var lastName;
//  var zipCode;
//  var phoneNumber123;
//  var $currency;

// 5 illegal variables

// var 1name;
// var f-Name;
//  var @gmail;
//  var %modulus;
//  var *star;

// Q 3:Display this in your browser
//     a) A heading stating “Rules for naming JS variables”
//     b) Variable names can only contain ______, ______,
//     ______ and ______.
//     For example $my_1stVariable
//     c) Variables must begin with a ______, ______ or
//     _____. For example $name, _name or name
//     d) Variable names are case _________
//     e) Variable names should not be JS _________
// Ans:

// var namingRules = "<b>Rules for naming JS variables</b>";
// var variableNames = "Variable names can only contain numbers , $ and _ . For example $my_1stVariable.";
// var  beginWith = " variables must begin with a letter, $ or _ . For example $name, _name or name";
// var caseSensitive = "variable names are case sensitive.";
// var jsWords = "Variable names should not be JS Keywords.";
// document.write(namingRules + '<br>' +' <br>'+'<br>' + variableNames + '<br>' + beginWith+
// '<br>' + caseSensitive + '<br>' + jsWords);

// =======================Exercise 5   =========================//

// Q 1: Write a program that take two numbers & add them in a
// new variable. Show the result in your browser
// Ans:

//    var num1 = +prompt("Enter first Number");
//    var num2 = +prompt("Enter second Number");
//    var sum = num1 + num2;
//    alert ("Sum of " + num1 +" and " + num2 + " is " + sum);

//     Q: 2. Repeat task1 for subtraction, multiplication, division &
//    modulus.
// Ans:
// Subtraction
// var num1 = +prompt("Enter first Number");
// var num2 = +prompt("Enter second Number");
// var subtract = num1 - num2;
// alert ("Subtraction of " + num1 +" and " + num2 + " is " + subtract);

// multiplication
// var num1 = +prompt("Enter first Number");
// var num2 = +prompt("Enter second Number");
// var multiply = num1 * num2;
// alert ("Multiplication of " + num1 +" and " + num2 + " is " + multiply);

// Division
// var num1 = +prompt("Enter first Number");
// var num2 = +prompt("Enter second Number");
// var division = num1 / num2;
// alert ("Multiplication of " + num1 +" and " + num2 + " is " + division);

// // Modulus
// var num1 = +prompt("Enter first Number");
// var num2 = +prompt("Enter second Number");
// var modulus = num1 % num2;
// alert ("Modulus of " + num1 +" and " + num2 + " is " + modulus);

// Q 3: Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.

//  Ans:

// var initialValue;
// document.write("Value after variable declaration is "+ initialValue+'<br>');
// initialValue = 5;
// document.write("Initial value: " +initialValue+ '<br>');
// var incrementValue=++initialValue;
// document.write("Value after increment is: " +incrementValue+ '<br>');
// var additionValue = incrementValue + 7;
// document.write("Value after addition is: "+ additionValue+ '<br>');
// var decrementValue = --additionValue;
// document.write("Value after decrement is: "+ decrementValue+ '<br>');
// var modulus = decrementValue % 3;
// document.write("The remainder is: "+ modulus+ '<br>');

// Q 4: Cost of one movie ticket is 600 PKR. Write a script to
// store ticket price in a variable & calculate the cost of buying 5
// tickets to a movie.

// Ans:
// var ticketPrice = 600;
// ticketBuy = 5;
// var totalPrice = ticketPrice * ticketBuy;
// document.write ("Total cost of buy " + ticketBuy + " tickets to a movie is " +
// totalPrice+"PKR");

//   Q 5: Write a script to display multiplication table of any
//   number in your browser
// Ans:
//   var mulNumber = prompt("Enter a number");
//   var range = prompt("Enter a range");
//   var finalResult = " ";
//   for (i=1; i<=range; i++)
//   {
//  finalResult += mulNumber + "*" + i + "=" + mulNumber*i + '<br>';
//   }
//   document.write("Table of " +mulNumber +" <br>"+finalResult);

// Q: 6. The Temperature Converter: It’s hot out! Let’s make a
//     converter based on the steps here.
//     a. Store a Celsius temperature into a variable.
//     b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//     c. Now store a Fahrenheit temperature into a variable.
//     d. Convert it to Celsius & output “NNoF is NNoC”

// Ans:
// var celTemp = 25;
// var convertTofahrTemp = (celTemp * 9/5)+32;
// document.write(celTemp +"\xB0C is " + convertTofahrTemp + "\xB0F <br>");
// // var temp = fahrTemp;
// var fahrTemp =70;
// var convertToCelsiusTem = (fahrTemp - 32)*5/9;
// document.write(fahrTemp +"\xB0F is " + convertToCelsiusTem + "\xB0C");

//     Q 7: Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store the following in variable
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// Ans:
// var item1Price = +prompt("Enter Price of item 1");
// var item2Price = +prompt("Enter Price of item 2");
// var item1Quantity = +prompt("Enter Ordered quantity of item 1");
// var item2Quantity = +prompt("Enter  Ordered quantity of item 2");
// var shippingCharges = +prompt("Enter Shipping Charges");
// var item1TotalPrice = item1Price * item1Quantity;
// var item2TotalPrice = item2Price * item2Quantity;
// var totalCost = item1TotalPrice + item2TotalPrice + shippingCharges;
// document.write ("<h3>Shopping Cart</h3><br>" +
// "Price of item 1 is: " + item1Price + "<br>"+
// "Quantity of item 1 is: " + item1Quantity + "<br>" +
// "Price of item 2 is: " + item2Price + "<br>" +
// "Quantity of item 2 is: " + item2Quantity + "<br>" +
// "Shipping charges is: " +shippingCharges + "<br>" +"<br>"+
// "Total cost of your order is: " +totalCost);

// Q: 8. Store total marks & marks obtained by a student in 2 variables. Compute the
// percentage & show the result in   your browser
// Ans:

// var totalMarks = +prompt("Enter Total Marks");
// var obtaindeMarks = +prompt("Enter Obtained Marks");
// var percentage = obtaindeMarks * 100 / totalMarks;
// document.write ("Total Marks: " +totalMarks + "<br>"+
// "Obtained Marks: " +obtaindeMarks+ "<br>" +
// "Percentage: " + percentage + "%");

// Q: 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert
// the total currency to Pakistani Rupees. Perform all calculations in a single
//  expression.(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// Ans:
//     var currencyConverter = 10 * 104.80 + 25 * 28;
//     document.write ("Total curreny in PKR: "+ currencyConverter);

//       Q:  10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single

// Ans:
// var calculate =(15 +5 )* 10 /2 ;
// document.write(calculate);

// Q:11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values

// // Ans:
//         var currentYear = 2024;
//         var birthYear = 1998;
//         var age = currentYear - birthYear;

//         document.write("Current Year: "+ currentYear +"<br>"
//         + "Birth Year: "+ birthYear +"<br>" +"Your age is: " +age);

// Q: 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// Ans:

//    var circleRadius = +prompt("Enter circle radius");
//    var circumference = 2*3.142*circleRadius;
//    var areaOfCircle =  3.142*circleRadius*circleRadius;
// document.write("Radius of circle: " + circleRadius + "<br>"+
// "The circumference is: "+circumference+ "<br>" +
// "The area is: " +areaOfCircle);

// Q:13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of
//  your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest ofyour life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”

// Ans:

// var favSnack = "Chocolate Chip";
// var currentAge = 26;
// var maxAge = 70;
// var estimatedAmount = 3;
// var remainingAge = maxAge - currentAge;
//  var requiredChips = remainingAge * estimatedAmount;
//   document.write ("favourite Snack: " + favSnack + "<br>" +
//   "Current Age: " +currentAge + "<br>" +
//   "Estimated Maximum Age: "+ maxAge + "<br>"+
//   "Amount of snacks per day: " + estimatedAmount+ "<br>"+
//   "you will nedd " +requiredChips+ " chocolate chips until the ripe old age of "+ maxAge);

// =================================if..... else if......else statement=================//

// Q 1: Write a program to check whether the given input number is divisible by 3 or not
// by using Switch Case statements. Show a message “Number is not divisible by 3” or
//  “Number is divisible by 3”.
//  Ans:

// var numberToCheck = +prompt("Enter a number");

// switch (numberToCheck % 3)
// {
//     case 0:
//      alert("Number is divisible by 3");
//     break;

// default:
//     alert("Number is not divisible by 3");
//     break;
// };

// Q 2:    Write a program that checks whether the given input is an even
// number or an odd number
// Ans:
// var numToCheck = +prompt("Enter a number even || odd ");
// if (numToCheck%2===0){
//     alert(numToCheck +" is even");
// }
// else
// {
//     alert(numToCheck +" is odd");
// }

// Q 3:    Write a program that prompts the user for their name, and then
// displays a special greeting to that person if their name is the
// same as yours. If the name entered by the user is anything
// other than your name, your code should not produce any
// output
// Ans:
// var secretName  ="skardu";
// var userInput = prompt("Enter a name to guess-- hint! city");
// if (userInput===secretName){
//     alert("Congratulations! you got it");
// }

// Q:  6. Write a program that takes a character(number or string) in a
//     variable & checks whether the given input is a number,
//     uppercase letter or lower case letter. (Hint: ASCII codes:-
//     A=65, Z=90, a=97, z=122)

// Ans:
//    var character = prompt("Enter any character");
// if (character >=65 && character <= 90){
//     alert(character+ " is an Uppercase letter");
// }
// else if (character >=97 && character <= 122){
//     alert(character+ " is an Lowercase letter");
// }
// else if (character>=48 && character<=57)
// {
// alert(character+ " is a digit");
// }

// else {
//     alert("incorrect input");
// }

//   Q : 9. Write a program that takes a calendar year in YYYY format in
//   a variable. Check & notify the user whether it is a leap year or not
// Ans:

//  var year = prompt ("Enter any year in YYYY format");
//  if (year.length > 4 || year.length<4){
//     alert("Please enter valid year");
//  }
//  else if (year%4===0){
//     alert(year+ " is a leap year");
//  }
//  else{
//     alert(year+ " is not a leap year")
//  }

// Q 13:  Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
// Ans:
// var num1 = +prompt("Enter first integer");
// var num2 = +prompt("Enter second integer");
// if (num1 > num2)
// {
//     alert(" First Integer is greater");
// }
// else if (num1===num2) {
//     alert ("Numbers are equal");
// }
// else {
//     alert("Second integer is greater")
// }

// Q 14 :  Write a program that takes input a number from user & state
// whether the number is positive, negative or zero.
// Ans:
//  var inputNumber = +prompt("Enter any number");
// if (inputNumber > 0){
//     alert ("Number is positive");
// }
// else if (inputNumber === 0){
//     alert("Number is zero");
// }
// else{
//     alert("Number is negative");
// }

// Q:7 Write a program to create a calculator for +, -, *, /, % using switch
// case statements. (number1, number2 and operator will be input)
// Ans:
//    var num1 = +prompt("Enter num 1");
//    var num2 = +prompt("Enter num 2");
//    var operator = prompt("Enter any operator, +, -, *, /, % ");
//     var result;

//    switch(operator){
//         case '+':
//         var result = num1 + num2;
//         alert("Addition of "+num1+ " and " +num2 + " is "+ result);
//             break;
//         case '-':
//         var result = num1 - num2;
//         alert("Subtraction of "+num1+ " and " +num2 + " is "+ result);
//             break;
//         case '*':
//         var result = num1 * num2;
//         alert("Multiplication of "+num1+ " and " +num2 + " is "+ result);
//             break;
//         case '/':
//         var result = num1 / num2;
//         alert("Division of "+num1+ " and " +num2 + " is "+ result);
//             break;
//         case '%':
//         var result = num1 % num2;
//         alert("Modulus of "+num1+ " and " +num2 + " is "+ result);
//             break;
//         default:
//             alert("Incorrect operator");
//             break;
//    }

//  8) Write a program that takes time as input from user in 24 hours clock format
//  like: 1900 = 7pm. Implement the following case  using if, else & else if statements
// 15) Ask the user what the current hour is. If the hour is between
// 6 and 9 a.m., tell the user, "Breakfast is served." If the hour is
// between 11 a.m. and 1 p.m., tell the user, "Time for lunch." If
// the hour is between 5 and 8 p.m., tell the user, "It's dinner
// time." For any other hours, tell the user, "Sorry, you'll have to
// wait, or go get a snack." (Hint: Store the hour in 24 hours clock
// format i.e. 14 for 2pm , 15 for 3pm)

// Ans:

//    var currentTime = +prompt ("Enter  current time in 2400 Hrs format");
//     if(currentTime >= 600 && currentTime <= 900){
//         alert("Breakfast is served");
//     }
//     else if(currentTime >= 1100 && currentTime <= 1300){
//         alert("Time for lunch");
//     }
//     else if(currentTime >= 1700 && currentTime <= 2000){
//         alert("It's dinner time");
//     }

//     else{
//         alert("Sorry, you'll have to wait, or go get a snack.");
//     }
// Q 16Write a program that stores value in a variable & tell whether 
// the type of that variable is a "number", "string", "boolean" or 
// “undefined”

// // Ans:
// function checkType(value) {
//     if (typeof value === 'number') {
//         return 'number';
//     } else if (typeof value === 'string') {
//         return 'string';
//     } else if (typeof value === 'boolean') {
//         return 'boolean';
//     } else if (typeof value === 'undefined') {
//         return 'undefined';
//     } else {
//         return 'unknown';
//     }
// }
// var variable1 = 42;
// var variable2 = "Hello";
// var variable3 = true;
// var variable4; // Undefined variable

// console.log("Type of variable1:", checkType(variable1));
// console.log("Type of variable2:", checkType(variable2));
// console.log("Type of variable3:", checkType(variable3));
// console.log("Type of variable4:", checkType(variable4));
            //   let inputValue = prompt("Enter a value to check");
            //   var dataType= checkType(inputValue);
            //   alert(dataType);
//    Q : 17) Write a program that takes a character (i.e. string of length 1)
//         and returns true if it is a vowel, false otherwise.
// Ans:

// var character = prompt("Enter a single character");
//    if (character.length>1){
//     alert("Character length must be 1");
//    }
// else if (character === "a" || character=== "e" || character=== "i" || character=== "o" || character=== "u")
// {
//     alert(character +  " is vowel");
// }

// else {

//     alert(character +" is not a vowel");
// }

// Q 19: Use a switch statement to rewrite the following JavaScript code. Prompt the
//  user for the number of a month rather than setting it to 8:
// Ans:

// var month = +prompt("Enter a month number");
// switch(month)
// {
//     case 1:
//         alert("January");
//         break;
//     case 2:
//         alert("February");
//         break;
//     case 3:
//         alert("March");
//         break;
//     case 4:
//         alert("April");
//         break;
//     case 5:
//         alert("May");
//         break;
//     case 6:
//         alert("June");
//         break;
//     case 7:
//         alert("July");
//         break;
//     case 8:
//         alert("August");
//         break;
//     case 9:
//         alert("September");
//         break;
//     case 10:
//         alert("October");
//         break;
//     case 11:
//         alert("November");
//         break;
//     case 12:
//         alert("December");
//         break;
//     default:
//         alert("Invalid Month");
//         break;
// }

// Q 20: Use a conditional (ternary) operator for this exercise:
// If the variable age is a value below 18, the value of the variable voteable
// should be "Too young",otherwise the value of voteable should be "Old enough".
// Ans:
// var checkAge = +prompt("Enter your age");
// var result = checkAge < 18 ? "Too young" : "Old enogh";
// alert (result);

// =================================FUCNTIONS==========================//

//  Q:1 Create a block of code that you can use several times.
// Ans:
// function car(){
//     carName = "Hyundai";
//     carModel = "2023";
//    alert(carName +" "+ carModel);
// }
// car();

// Q 2: Write a function that displays current date & time in your browser.
// Ans:
// var currentDateTime = new Date().toLocaleString();
// alert(currentDateTime);

// Q 3:  Write a function that takes first & last name and then
//    it greets the user using his full name.
// Ans:
//         function greeting(fName, lName)
//         {
//          alert("Helo! "+ fName + " " +lName);
//         }
//         var fName =prompt("Enter First Name");
//         var lName =prompt("Enter Last Name");
//         greeting(fName, lName)

// Q   4.	Write a function that adds two numbers (input by user) and returns the sum of two numbers.
// Ans:

// function add(num1, num2){
//     var addition = num1 + num2;
//     alert("sum of " + num1 + " and " + num2 + " is " +addition);
// }
// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// add(num1, num2);

//   Q:  5.	 Calculator:
//     Write a function that takes three arguments num1, num2 & operator &
//  compute the desired operation. Return and show the desired result in your browser.
// Ans:

//     function calculator(num1,num2,operator){
//           switch (operator){
//                 case "+":
//                     var result = num1+num2;
//                     document.write ("Addition of " + num1 + " and " + num2+ " is " +result);
//                     break;

//                 case "-":
//                     var result = num1-num2;
//                     document.write ("Subtraction of " + num1 + " and " + num2+ " is " +result);
//                     break;

//                 case "*":
//                     var result = num1*num2;
//                     document.write ("Multiplication of " + num1 + " and " + num2+ " is " +result);
//                     break;
//                     case "/":
//                     var result = num1/num2;
//                     document.write ("Multiplication of " + num1 + " and " + num2+ " is " +result);
//                     break;
//                     case "%":
//                     var result = num1%num2;
//                     document.write ("Modulus of " + num1 + " and " + num2+ " is " +result);
//                     break;
//                     default:
//                         document.write("Invalid Entry");
//                         break;
//           }
//    }

//     var num1 = +prompt("Enter first number");
//     var num3 = +prompt("Enter second number");
//     var operator = prompt("Enter any operator, +, -, *, /, % ");
//     calculator(num1, num3,operator)

//    Q 6.	 Write a function that squares its argument.
// Ans:
// function square(num1)
// {
//     var squareRoot = num1*num1;
//     return squareRoot;
// }

// var input = +prompt ("Enter a number to Square ");
// var result = square(input);
// document.write ("Square of " + input + " is "+ result);

// Q    7.	 Write a function that computes factorial of a number.
// Ans:

// function factorial(n) {

//     let ans = 1;

//     for (let i = 1; i <= n; i++)
//         ans = ans * i;
//     return ans;
// }
// var n  = +prompt ("Enter a number to find it factorial");
//   var result = factorial(n);
// alert ("Factorial of " +n+ " is " +result);

// Q 8: Write a function that take start and end number as inputs &
// display counting in your browser.
// Ans:

//    function count(num1, num2){
//     document.write(num1+num2);
//    }
//    var stratNumber = +prompt("Enter start number");
//    var endNumber = +prompt("Enter start number");
//     count(stratNumber,endNumber);

// Q: 9.	Write a nested function that computes hypotenuse of a right angle triangle.
//     Hypotenuse2 = Base2 + Perpendicular2
//     Take base and perpendicular as inputs.
//     Outer function : calculateHypotenuse()
//     Inner function: calculateSquare()
// Ans:
// function hypotenus() {

//   var base = +prompt("Enter base"); // 2
//   var perpendicular = +prompt("Enter perpendicular"); // 3

//   var finalResult =  square(base *base, perpendicular*perpendicular);
//   console.log(finalResult);

//   function square (base, perpendicular) {
//     console.log(base);
//     console.log(perpendicular);
//     //    var base= +prompt("Enter base");
//     //   var perpendicular= +prompt("Enter perpendicular");
//     var obj = {
//       baseResult: base * base,
//       perpResult: perpendicular * perpendicular,
//     };

//     return obj;
//   }
// }

// hypotenus();

// var base = 2
// var perpendicular = 3

// hypotneus^2 = base^2 + perpendicular ^2
// function hypotenus ()
// {
//     var base = +prompt("Enter Base");
//     var perp = +prompt("Enter perpendicular");
//     var result=square(base, perp);

//      console.log("Hypotenus :", result);
//      alert(result.baseSquare +result.perpSquare)

//      function square(base, perp){
//         var baseSquare =  base * base;
//         var  perpSquare= perp *perp;

//           return {baseSquare: baseSquare, perpSquare: perpSquare};
//    }

// }
// hypotenus()

// Q :10.	Write a function that writes variable length arguments list in your browser.
// Ans:
// function argumentList(...argument){
//     alert(argument)
// }
//         argumentList(2,3,4,5)

// 11.	Write a function that accepts any number of arguments & find largest of the number.

// function largestnumber(num1, num2, num3){

//     var largert = Math.max(num1,num2,num3)
//    return largert;
// }
//     var num1 = +prompt("Enter number 1");
//     var num2 = +prompt("Enter number 2");
//     var num3 = +prompt("Enter number 3");
//     alert(largestnumber(num1, num2, num3))

// Q 12.	Write a function that calculates the area of a rectangle.
//      A = width * height
//       Pass width and height in following manner:
//       a.	Arguments as values
//      b.	Arguments as variables

// Ans:
//    Arguments as values  //
// function rectangle(num1, num2){
//     areaOfRectangle = num1*num2;
//     alert("Area of reactangle is " + areaOfRectangle);
// }
//     rectangle (4,6)

// Arguments as variables
// function rectangle(num1, num2){
//     areaOfRectangle = num1*num2;
//     alert("Area of reactangle is " + areaOfRectangle);
// }
//     var height = +prompt("Enter height of Rectangle");
//     var width = +prompt("Enter width of Rectangle");
//     rectangle (height,width)

// Q  13.	Write a function that receives an array & returns the sorted array.

// Q 15:   15.	Execute & monitor the output of following JS program:
// Ans:

// var param = function inner() {
//     return typeof inner;
// }
// alert(param());

// Q 16:  Write a function that computes power of a number. E.g. 2^3 is 8.
// Ans:

// function power(base,power){
//       var power = Math.pow(base, power)
//       alert (power);
//     }
//     var base = +prompt("Enter base of a number");
//     var power = +prompt("Enter power of a number");
//     power(base, power)

// Q17.	Write a function that simulates a dice & returns a random dice value.

//   function rollDice(){
//         var diceRoll  = Math.floor(Math.random() * 6) + 1;
//         alert("you have rolled " + diceRoll)

//   }
//      rollDice()

// Q :18.	Write a JavaScript function that reverse a number.
//          Example x = 32243;
//          EXPECTED OUTPUT : 34223
// Ans:

//    function reverse(num1){
//     var reverseNumber = parseInt(num1.toString().split('').reverse().join(''));
//         alert ("reverse number is " + reverseNumber)
//     }
//     reverse (1234)

// Q:  19.	Write a JavaScript function that checks whether a passed string is palindrome or not?
//         A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.AN
// Ans:
//     function palindrome(input){
//          var reverseString = input.split('').reverse().join('');
//     if (reverseString === input){
//         alert(input +" is palindrome");
//     }
//         else{

//             alert(input +" is not a palindrome");
//         }
//     }
// var input = prompt("Enter a string");
//       palindrome(input)

// Q:  20.	Write a JavaScript function that accepts a string as a parameter and
// converts the first letter of each word of the  string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// Ans:

// var string = "the quick brown fox";

// function toUpperCase(sentence) {
//   var splitSentence = sentence.split(" ");
//   var ans =splitSentence.map((word) => { 
//     return word[0].toUpperCase() + word.substring(1); 
// }).join(" ");

//  document.write(ans);
// }

// toUpperCase("the quick brown fox");

// Q:  21.	Write a JavaScript function that accepts a string as a parameter and
//  find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial' 
// EXPECTED OUTPUT : 'Development'
// Ans:     
   
// by sorting method
            // function largest (course){
            //     var splitWords = course.split(' ');
            //     var wordLongest =  splitWords.sort(function(a,b){
            //         return b.length - a.length;
            //                     })
            //     // var bb =  wordLongest[0];
            //     document.write (wordLongest[0]);
            //     }
            // largest("Web Development Tutorial")
// sorting method end

//    function longestWord(courseName){

//         var splitword = courseName.split(" ");
//         // console.log(splitword);
//         var longestWord= [''];
//         for (var i = 0; i < splitword.length; i++){
//             // console.log(splitword[i])
//         if (splitword[i].length > longestWord.length)
//         {
//             // console.log(longestWord)
//                 longestWord = splitword[i];
//                 document.write(longestWord);
            
//         }
       
//     }
// }
//     longestWord("Web Development tutorialialll")
   

// Q 22.	Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 

// EXAMPLE STRING : 'The quick brown fox' 
// EXPECTED OUTPUT : 5
// // Ans:
//     function checkVowel(character){
//         var vowel = "aeiouAEIOU";
//         var count = 0;
//         for (var i of character)
//             {
//               if (vowel.includes(i)){
//                 count +=1;  
//               } 
//             } 
//             return count;  
//     }
//     var char = prompt("Enter any string");
//     var result = checkVowel(char);
//     alert("No of vowel is: " + result);

// Q: 23.	Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
// Ans:
//         function typeCheck(charr){
         
//             alert(typeof(charr))
//         }
//         //var charr = ("Enter any number or string");
//         typeCheck(true)

// 24.	Write a JavaScript function to extract unique characters from a string. 
// EXAMPLE STRING : "thequickbrownfoxjumpsoverthelazydog"
// EXPECTED OUTPUT : "thequickbrownfxjmpsvlazydg"
// Ans:    
// var uniqueCharacters = (stringg) => {
// 	var unique_characters = "";
// 	for (var i = 0; i < stringg.length; i++) {
//         // console.log(stringg[i]);
// 		if (unique_characters.indexOf(stringg.charAt(i)) < 0) {
// 			unique_characters += stringg.charAt(i);
// 		}
// 	}
// 	return unique_characters;
// };
// alert(uniqueCharacters("thequickbrownfoxjumpsoverthelazydog"));

// Q  25.	Write a JavaScript function that accepts two arguments, a string and a 
// letter and the function will count the number of occurrences of the specified 
// letter within the string. 
// Sample arguments : 'JSResourceS.com', 'o' 
// Ans:        
    //     function occurrence(str, letter){
    //             var stringCount = 0;
    //             for (var i = 0; i < str.length; i++ ){
    //                 if (str.charAt(i) == letter){
    //                     stringCount +=1;
    //                 }
    //             }
    //             return stringCount;
    //     }

    //    document.write(occurrence('shehbaz', 'h'))

    //    26.	The Age Calculator forgot how old you are? Calculate it!
    //    •	Write a function named calculateAge that:
    //    o	takes 2 arguments: birth year, current year.
    //    o	calculates the 2 possible ages based on those years.
    //    o	outputs the result to the screen like so: "You are either NN or NN"
    //    •	Call the function three times with different sets of values.
    //    •	Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
       
    // Ans:

        // function calculateAge(birthYear, currentYear){
        // var age = currentYear - birthYear;
        // document.write("They are either "+ age +" or "+ (age+1)+" years old"+'<br>');



        //         }

        //         calculateAge (1997, 2024)
        //         calculateAge (2000, 2023)

