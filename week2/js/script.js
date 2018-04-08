
//var marks;
//var name;
//var phone;

//multipal variable declaration 
//var marks, name, phone

var marks= 10;
var name="Radhika"
alert(marks);

//string 

var msg = "Hello all of you"
alert(msg);

// if we use double cots outside then inside we use single cots
var msg = "Hello 'hi' all of you"
alert(msg);

//How to chacke variable type

var msg = "Hello all of you"
alert(typeof msg); //string

var salary= 10000;
alert(typeof salary); //number

// how to work two datatype together
var sum = 10+ "10"; //here 10 is in double cots so that means string  
alert (sum);

//check value

var sum = 10+10+10+ "10"; //here 10 is in double cots so that means string  
alert (typeof sum);

// data type null

var sum = null;
alert (typeof sum);

// If else statement in javascript
if (5==5) {
	alert("values are equal");
}

else {
	alert("values are not equal");
}

// we change condition and see how run else block
if (5==6) {
	alert("values are equal");
}

else {
	alert("values are not equal");
}

//now we use var 
var a = 10;
var b = 10;

if (a==b) {
	alert("values are equal");
}

else {
	alert("values are not equal");
}

//if we change value
var a = 10;
var b = 11;

if (a==b) {
	alert("values are equal");
}

else {
	alert("values are not equal");
}

// javascript operators 
// asthmatic operator 
var answer = 10 + 15;
alert(answer);


var answer = 10 - 5;
alert(answer);

var answer = 10 * 10;
alert(answer);

var answer = 10 / 10;
alert(answer);

var answer = 12 % 15;
alert(answer);

var answer = 5 + 5 * 10;
alert(answer);

var answer = (5 + 5) * 10;
alert(answer);

var answer = 9; // increment
answer++;
alert(answer);

var answer = 9; // decrement 
answer--
alert(answer);

// comparison operator

var a = 10, b = 10;
if (a==b){
	alert("Both values are same");
}

var a = 10, b = 10;
if (a===b){
	alert("Both values are same");
}


var a = 10, b = "10";
if (a==b){
	alert("Both values are same");
}

var a = 10, b = "10"; //values are not same because === check value and datatype as well 
if (a===b){
	alert("Both values are same");
}
else{
	alert("Values are not same")
}

var a = 10, b = 5;
if(a!=b)
{
	alert("Numbers are not equal"); 
}

var a = 10, b = 5;
if(a>b)
{
	alert("a is greater"); 
}

var a = 10, b = 5;
if(a<b)
{
	alert("a is small"); 
}


var cAge = 18;
if(cAge >=18)
{
	alert("You are eligible for voting")
}


var cAge = 17;
if(cAge >=18)
{
	alert("You are eligible for voting")
}
else{
	alert("You are not eligible for voting");
}

var enployeeAge = 59;
if(employeeAge<=60)
{
	alert("ou should work");
}
else{
	alert("You are eligible for retirement");
}


var enployeeAge = 62;
if(employeeAge<=60)
{
	alert("You should work");
}
else{
	alert("You are eligible for retirement");
}

// Logical operators && || !

// logical and && 'we use this operator for age limit criteria or equivalent'
var candidateAge = 25;
if ( candidateAge >= 20 && candidateAge <= 30) 
{
	alert ("you are eligible for bank exams");
	
}
else {
	alert ("You are not eligible");
}

// 2nd eg

var candidateAge = 31;
if ( candidateAge >= 20 && candidateAge <= 30) 
{
	alert ("you are eligible for bank exams");
	
}
else {
	alert ("You are not eligible");
}

// logical or operator 'not nassesory that both condition true'

 var dressColor = "blue";
 
 if (dressColor=="black" || dressColor== "blue")
 {
	 alert("You can attend the party")
 }
else{
	alert("Please check your dress color")
}

// Logical not operator !
var a = 10;
var b = 5;

alert(a==b); // answer false

// now we use not operator sign 
var a = 10;
var b = 5;

alert(!(a==b));// not equal to sign give us oposit answer in this case a and b is not equal but because of not equal to sign it print true
 //one more example
 var a = 10;
var b = 5;

alert(!(a>b)); //see again he give us opposite answer (false) 

//document. write fungtion
document.write("Hello to all");
// here we can use html tag as well
document.write("<h1>Hello to all</h1>");
// here we can use multiple tag also
document.write("<h1>Hello to all<h1><p>Good to see <br> Hope everything is going good </p>");

// we can use instead of alert Document.write
var a = 10, b = 10
if(a==b){
	document.write("Both values are equal")
}
else {
	document.write ("Both values are not equal")
}

// there are many diffrant fictions Suppose we want to create date and time
document.write(Date());

//Confirm box in javascript
var result = confirm("Are you sure you want to visit that website");
document.write(result);

//Second eg
var result = confirm("Are you sure you want to visit that website");
if(result==true){
document.write("You have selected OK");
}
else{
	document.write("You have not selected");
}
// now we write condition for false value.

var result = confirm("Are you sure you want to visit that website");
if(result == false){
	window.location = "https://www.google.com";
}
