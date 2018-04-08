// how to set image in javascript in inner html
document.getElementById('image').innerHTML=<img src='1.jpg'></img>

//remove child
var image= document.getElementById('im');
image.parentNode.removeChild(image);

//onclick remove img
function image(){
	var image=document.getElementById('im');
	image.parentNode.removeChild(image);
}

//appendChild

