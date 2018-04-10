//print hello world
console.log("Hello, World!");


//find the misstake
console.log("It is working");


//variables value
a = 5;
b = 6;
c = a + b;
console.log(c);


//assign different values to String variable
var name = prompt("what is your name?");

console.log("story" name "story");



//max number
console.log(Math.max(1, 3, 2));
// expected output: 3

console.log(Math.max(-1, -3, -2));
// expected output: -1

var array1 = [1, 3, 2];

console.log(Math.max(...array1));
// expected output: 3


//Arrays

var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

for (property in person) {
  console.log(property, '= ', person[property]);
}


//all values 
console.log("Hi %s, my name is %s", 'world', 'Joe',);
// "Hi world, my name is Joe."

//check variables type
console.log(typeof 42);
// expected output: "number"

console.log(typeof 'blubber');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof declaredButUndefinedVariable);
// expected output: "undefined";



//Number division
// Assign values to x and y
let x = 20;
let y = 5;

// Divide y into x to get the quotient
let z = x / y;

console.log(z);


// Number addition and subtraction
console.log(2 + 3 - 1);
// expected output: 4

// Number multiplication and division
console.log(4 * 3 / 2); // 12 / 2
// expected output: 6

// Number remainder and exponential
console.log(11 % 3 ** 2); // 11 % 9
// expected output: 2


// Run a loop ten times
for (let i = 0; i < 10; i++) {
  console.log(i);
}



// plus mats 
a = 5;
b = 6;
c = a + b;
console.log(c);



// Number + Number -> addition
1 + 2 // 3

// Boolean + Number -> addition
true + 1 // 2

// Boolean + Boolean -> addition
false + false // 0

// Number + String -> concatenation
5 + 'foo' // "5foo"

// String + Boolean -> concatenation
'foo' + false // "foofalse"

// String + String -> concatenation
'foo' + 'bar' // "foobar"