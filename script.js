

var input = document.querySelector('#userinput');
var button = document.querySelector('#enter');
var ul = document.querySelector('ul');
var lis = document.querySelectorAll('li');
var deleteButtons = document.querySelectorAll("button");
var body = document.querySelector('body');

// body.addEventListener('mouseleave', function(){
// 	alert("Annoying popup: don't leave the body!");
// });


function inputLength(){
	return input.value.length;
}

function strikeThrough(li){
	li.addEventListener('click', function(){
		li.classList.toggle('done');
	});
}

lis.forEach(function(li, i){
	addDeleteButton(li);
	strikeThrough(li);
})

function addDeleteButton(li){
	var deletebtn = document.createElement('button');
	deletebtn.appendChild(document.createTextNode('delete'));
	li.appendChild(deletebtn);
	deletebtn.addEventListener('click', function(){
		deletebtn.parentNode.parentNode.removeChild(deletebtn.parentNode);
	});

}

function createListElement(){
	var li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
	addDeleteButton(li);
	strikeThrough(li);
	
}

function addListAfterClick(){
	if( inputLength() > 0){
		createListElement();
		
	}
}

function addListafterKeypress(event){
	if(inputLength() > 0 && event.which === 13){
		createListElement();
	}
}

button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListafterKeypress);