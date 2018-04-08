
/ function in javascript
// how to create a function
function alertMsg() {
	alert ("Hello to everyone");
}
 
alertMsg(); // if we want to alert fuction then we should create alert Messege for generate the fuction. so simpaly create the name and one emty braket and semicolon.
alertMsg(); // if we call two times then two times alert message generate.

//function with arguments or parameters

function addNum(){
	var a = 10, b= 10;
	alert(a+b)
}  

addNum();

// but we want more functions

function addNum(a,b){
	alert (a+b);
}

addNum(10,10);
addNum(20,10);

// same fuction we can use there document.write

function addNum(a,b){
	document.write(a+b+"<br/>");
}

addNum(10,10);
addNum(20,10);

// we can use more value as well

function addNum(a,b,c){
	document.write(a+b+"<br/>");
}

addNum(10,10,10);
addNum(20,10,5);

// fuctions with return values

function addNum(a,b,c){
	return (a+b-c);
}

var result 1 = addNum(10,10,5);
document.write(result1);

// one more eg.
function addNum(a,b,c){
	return (a+b-c);
}

var result1 = addNum(10,10,5);
var newVal = 10;
document.write(result1+newVal);

//How to create function and how to use it
function alertmsg (){
	alert("Hello friends");
}
	alertMsg();
	alertMsg();

function addNum(){
	var a= 10, b= 10;
	alert (a+b);
}
addNum();

// What is object?
// Object means any kind of things eg. person
// Properties means caractory sticks eg. hair color, hands legs..etc
// methods means how he/ she walk, talk..etc

var person ={
	fristName: "Radhika",//property
	      age: 32;       //property
		fulldata : function(){ //Method
			return "person.fulldata + person.age";
		}
     };
	 alert(person.fulldata());
	 
// second type
 var person ={
	fristName: "Radhika",//property
	      age: 32;       //property
		fulldata : function(){ //Method
			return "person Name is"+ person.Name +" and age is "+ person.age;
		}
     };
	 alert(person.fulldata());
	 
	 // use this
	 
	 var person ={
	fristName: "Radhika",//property
	      age: 32;       //property
		fulldata : function(){ //Method
			return "person Name is"+ this.Name +" and age is "+ this.age;
		}
     };
	 alert(person.fulldata());
	 
	 // we can use String, bullion .. as an object
	 
	 var msg ="Hello all"
	 document.write (msg.lenth); // mdg.lenth is in built property
	 

	var msg ="Hello all"
	 document.write (msg.toUpperCase()) ;// mdg.lenth is in built methods
	 
//Javascript arrays
var students= ["Radhika", "Sachin", Kiyaan, Sharvri];
     document.write(students);
	 
	 //only print Radhika
	 
var students= ["Radhika", "Sachin", "Kiyaan", "Sharvri"];
	console.write(students); // we will know what is the place of radhika
	document.write(student[0]);
	
	// undefine position
	var students= ["Radhika", "Sachin", "Kiyaan", "Sharvri"];
	console.write(students); // we will know what is the place of radhika
	document.write(student[7]); //answer is undefine because nothing is on 7th position
	

// if we want to add some one
var students= ["Radhika", "Sachin", "Kiyaan", "Sharvri"];
	students[4]= "Aradhya"
	document.write(student[0]);

	// if we want to add any element on begining 
	students.unshipt ("xyz");
	// end 
	students.push("abc");
	//DELET
	students.pop("abc");
	
	// How to concatenation
	var students1=["Radhika", "Sachin"];
	var students2= ["Sharvari", "kiyaan"];
	
	document.write(students1.concat(students2));
	
	// how to create arrays inside arrays
	var students= ["Radhika", "Sachin", [1,2,3,4,5],"Kiyaan", "Sharvri"];
	document.write(student[2][3]);
	console.log(students [2][3]);
	
	
	//if else statement
	var a = 10; //if statement
	var b = 10;
	if (a==b){
		document.write("Both values are same");
	}
	
	var a = 10;
	var b = 9;
	if (a==b){
		document.write("Both values are same");
	}
	else {
		document.write("Valies are not same");
	}
	
	// nested if statement
	
	var dressColor = "blue";
	var vipPass = "yes";
	var simplepass = "no";
	
	if (dressColor== "blue"){
		if(vipPass==yes);
		{
			document.write("You can sit on golden chair")
		}
		else {
			if (simplepass== "yes"){
				document.write("You can sit on the red chairs")
		}
		else {
			document.write("you can't attend the party")
		}
	}
	else {
		document.write("You can't enter the party");
		
		// while loop
		var radhika = 1;
		while (radhika < 11);
		{
			document.write(rdhika+<br/>);
			radhika++;
		}
		
	//do while loop
	var radhika=1;
	
	do{
		document.write(radhika+"<br/>");
		radhika++;
	}
	
	while (radhika<12);
	
	// for loop
	
	for(var i=0; i<11; i++)
	{
		document.write(i+"<br/>");
	}
	
	// arrays print withh the help of arrays
	
	var name = ["Radha","Radhika","Radhu"];
	console.log(name);
	
	for(var i =0 ; i<name.length; i++);
	{
		document.write(name[i] + "<br/>");
	}
	
	//Events in Javascript 
	//(first made one button in html document 
	// HTML <input type=button" onclick="alertMsg();" value="Click Me" /)
	
	function alertMsg(){  //onclick
		alert("Your Event");
	}
	
	// HTML <input type=button" onmouseover="alertMsg();" value="Click Me" /)
	
	
	function alertMsg(){  //onmouseover
		alert("Your Event");
	}
	
	//HTML <input type=button" onmouseout="alertMsg();" value="Click Me" /)
	
	function alertMsg(){  //onmouseover
		alert("Your Event");
	}
	
	//Select id,class and tags in Javascript
	document.getElementById("first").innerHTML= "Hello all" ;// first type
	
	// second type
	
	var first =
	document.getElementById("first");
	first.innerHTML = "Hello all";
	
	// If we want to select only tag (make within html p tag or ant kind of tag)
	document.getElementByTagName ("p")[0].innerHTML ="Hello all";
	// we use after p tag [0] becausewithin html there are many p tags bu we want to write on spesific one so you can select position of p tag within html it starts from Zero. 
    	
	// Select Class 
	//Make within html class 
	document.getElementByClassName ("write class name")[0].innerHTML ="Hello all";
	
	//Select by id
	document.querySelector("# id name with the hatch key").innerHTML= "Hello All";
	
	//Select p tag <p></p>
	document.querySelector ("p").innerHTML = "Hello All"; //in that case only first p tag they select
	
	// Any specific p tag
	document.querySelectorAll ("p")[1].innerHTML = "Hello All";
	
	// suppose div tag in html <div> <h1></h1> <p></p> </div>
	
	document.querySelector ("div>h1").innerHTML = "Hello All"; // select h1
	document.querySelector ("div>p").innerHTML = "Hello All"; //select p
	
	// select with class name '
	document.querySelector (". class name but dot is important because we select class name with the help of dot sign ").innerHTML = "Hello All";
	
	//suppose there are two h1 tag and we want to select a specific one with the help of class
	// html <div><h1 class = myClass></h1> <h1></h1></div>
	document.querySelector (".h1.myClass").innerHTML = "Hello All";
	
	// Changing css with the help of Javascript
	// There are two types
	//first method
	document.getElementById("Id Name").style,color="red";
	
	//Second type
	
	var header = document.getElementById("ID name");
	header.style.color="red";
	header.style.fontsize="30px";
	
	
	// we can create click function
	// in html <div id="header" onmousedover= "changeStyling();"> This is Header </div>
	// in that case when your mouse go over the sentence styling will apply
	function changeStyling(){
	var header = document.getElementById("ID name");
	header.style.color="red";
	header.style.fontsize="30px";
	}
	
	//We can make two bottons in html and then change the color of body with the help of bottons
	// in html <input type = "button" value= "blue" onclick="function Name (blue)"/><input type = "button" value ="green" onclick = "green"/>
	//in browser there we create two button blue and green if we press blue background color will blue and if we press green background color will green with the help of javascript
    	function blue () {
			document.body.style.backgroundColor = "blue";
		}
		
		function green() {
			document.body.style.backgroundColor = "green";
		}
		
		//Event-listener Java-script
		// We can make event with the help of input ID 
		// Within HTML we can make tag eg. <input type="button" value="Click me" id="btn"/>
		// Here we can make on click or mouse ove .. function with the help of input id
		
		document.getElementById("btn").addEventListener("mouseover", function(){
			alert("Hello world");})
			
		//with the help of Function 
		function alertMsg(){
			alert("Hello World");
		}
		 
		 document.gerElementById("btn").addEventListener ("mouseover", alertMsg );
		 
		 // <input type="text" id="txt"/>		
		 // we can use event focus, focuson and focusout
		 
		 function yellowcolor() {
			 document.getElementByID("btn").style.backgroundcolor ="yellow";
			 
		 }
		 functions whitecolor(){
			 document.getElementByID("btn").style.backgroundcolor ="white";
		 }
		 document.getElementByID("btn").addEventListener("focus", yellowcolor);
		 document.getElementById("btn").addEventListener("focusout",alertMsg);
		
		// How we can do div hide and show with the help of button 
		//<input type="button" value="Click me" id="btn"/> Hello all<div id ="box"></div> end of box
		// css : <style type ="text/css">#box{background:blue; height:200 px; width:250px; margin-top: 25px; color: #fff;}</style>
		
		document.gerElementById("btn").addEventListener("click",function(){
		var box= document.gerElementById("box");
		 if (box.style.display= "none";)
		 {
			 box.style.display= "block";
		 }
		 else{
			 box.style.display="none";		
			 }
		});
		
		// form validation
		// <form action= "thanks.html"(Make html page thanks.html)><//form>
		
	 /*<form action="thanks.html" method ="post" onsubmit= "return validation();">
      <label for="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name..">
      <label for="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name..">
      <label for="country">Country</label>
      <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
      </select>
     <label for="subject">Subject</label>
     <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
      <input type="submit" value="Submit">
      </form>*/
	  
	  function validation () {
		  var fname= document.getElementById("fname").value;
		  var lname= document.getElementById("lname").value;
		  var country= document.getElementById("country").value;
		  var subject= document.getElementById("subject").value;
		  
		  alert (fname, lname, country, subject);
		  
		  if (fname== ""){
			  alert("Please enter your name");
			  return false;
		  }
		  else if (lname == ""){
			  alert("Please enter your lame");
		  return false;
		  }
		   else if (country == ""){
			  alert("Please enter your country");
			 return false;
		  }
		   else if (subject == ""){
			  alert("Please enter your subject");
			  return false;
		  }
		  
		  else {
			  return true;
		  }
		  
		 }
		 
		 // if in the form we want email validation then we can creat on javascript var valideEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	     /* else if (valideEmail.test(email)== false){
		  alert("please check your email");
		  return false;
		 }*/
		 
		 // how to redirect page in javascript
		 // <input type="button" value="Click me" id="btn" onclick= "redirectPage();"/>
		 
		 function redirectPage() {
			 window.location ="http://www.google.com";
			 
		 }
		 //or
		 function redirectPage() {
			 document.location ="http://www.google.com";
			 }
			 
	     // javascript mat function
		 
		 var data= math.round(5.6); // if here value 5.5 or more than 5 it will show us 6 and less than 5.4 or 5.3 or something like that then they show us 5
		  document.write(data);
		  
		  // squre root function
		  
		  var data= math.sqrt(64);  
		  document.write(data);
		 
	 // min or max
	 
	var data= math.min(1, 5, 6, 7, 3);  // show min value 1
		  document.write(data);
		 
		 var data= math.max(1, 5, 6, 7, 3);  // show max value 7
		  document.write(data);

       // power of value
     	var data= math.pow( 2,5);  
		  document.write(data);
		  
		// Mat.floor
		var data= Math.floor(5.1);  // show only 5 
		  document.write(data);
		 
		  
		 // Mat.random
			var data= Mat.floor(Math.random()*1000);  // generate number
		  document.write(data);
		 
		 }
	
	
