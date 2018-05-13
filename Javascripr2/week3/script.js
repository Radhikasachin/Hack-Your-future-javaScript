





//3.3 Please solve this problem: (free code camp)

		function repeatStringNumTimes(str, num) {
		  if (num > 0) {
		  return str.repeat(num);
		  } else
		    return "";
		}

		repeatStringNumTimes("abc", 3);




//3.4 Some practice with objects: (free code camp)

			// Let's add the properties engines and seats to the car in the same way that the property wheels has been added below. They should both be numbers.
			var Car = function() {
			  this.wheels = 4;
			  this.engines = 1;
			  this.seats = 1;
			};

			var myCar = new Car();

			// Only change code below this line.
			var MotorBike = function() {
			  this.wheels = 2;
			  this.engines = 1;
			  this.seats = 2;


			};

			var myMotorBike = new MotorBike();
			// Only change code above this line.

			(function() {return JSON.stringify(myMotorBike);})();




//3.5 Nested loops (Free code camp)

			function multiplyAll(arr) {
			  var product = 1;
			  // Only change code below this line
			  //Here I have written this but its not working! 
			      
			       for(var i=0; i<arr.length; i++)
			{
				    for(var j=0; j<arr[i].length; j++)
				    {
				        product *= arr[i][j] ;
				    }
			}
				  // Only change code above this line
				  return product;
			}

				// Modify values below to test your code
				multiplyAll([[1,2],[3,4],[5,6,7]]);




//3.6 We did some work with arrays	


			const arr = [1, 2, 3];
			const arr = new Array();
					arr[0] = "1";
					arr[1] = "2";
					arr[2] = "3";

//We can also nest arrays inside arrays like this
	 		const arr2d = 
	 				[
					  [1, 2],
					  [3, 4],
					  [5, 6]
					];
					console.log(arr2d[0][0]); // 1
					console.log(arr2d);





//3.7 Here are two functions that look like they do the something similar but they print different results. Please explain what's going on here.

		
			  const x = 9;
			  function f1(val) {
			    val = val + 1;
			    return val;
			  }
			  f1(x);
			  console.log(x);
			  console.log('function f1 does not change the value of variable x: x is passed by value');

			  const y = { x: 9 };
			  function f2(val) {
			    val.x = val.x + 1;
			    return val;
			  }
			  f2(y);
			  console.log(y);
			  console.log('function f2 changes the value of property y.x: y is passed by reference');
			}





//Write a function that would allow you to do this:
/*
Write a function that will do this
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
*/
function createBase(num){
	return function (item){
		return num+item;
	}
}

var addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

//How would you use a closure to create a private counter?
function myClosure(){
	var myC=0
	return function counter(num){
		return myC+=num;
	}
}

var test = myClosure();
test(1);
test(2);




/* Bonus Write a function takes this array 
['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'] 
and returns an array which only has unique values in it 
(so it removes the duplicate ones). 
Make it a 'smart' algorithm that could do it for every array (only strings/number). 
Try to make it as fast as possible!
*/

let array_with_duplcates = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c']

function removeDuplicates(arr){
    let unique_array = []
    for(let i = 0;i < arr.length; i++){
        if(unique_array.indexOf(arr[i]) == -1){
            unique_array.push(arr[i])
        }
    }
    return unique_array
}

console.log(removeDuplicates(array_with_duplcates)); // ['a', 'b', 'c', 'd', 'a', 'e', 'f']
