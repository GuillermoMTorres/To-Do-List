
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.

  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);

  var clearButton = document.getElementById('clear-button');
  clearButton.addEventListener('click', clearList, false);

  var clearDoneButton = document.getElementById('cleardone-button');
  clearDoneButton.addEventListener('click', clearListDone, false);

  document.addEventListener("keydown", addToDoItemKey, false);

  //Parameter1: Event (KeyDown)
  //Brief: Read they Key event. If the Key pressed is "Enter" it calls the function addToDoItem (See documentation).
  //Return: Nothing
  function addToDoItemKey(e){

  		console.log(e);
  		var keyCode = e.keyCode;

  		if(keyCode !== 13){
  			return;
  		}else{
  			e.preventDefault(); //Remove the submit event
  			addToDoItem();
		}
  }

  //Parameters: None
  //Brief: Read the value inside the INPUT "#todo-input" and create a new list item inside the first UL of the document
  //	   with the innerHTML as value of the input and class "todo-list"
  //Return: None - Creates a new LI in the first UL
  function addToDoItem() {;
	var li = document.createElement("li");
	li.className = "todo-list";
	li.innerHTML = document.getElementById("todo-input").value;
	document.getElementsByTagName("ul")[0].appendChild(li);
  }

  //Parameters: None;
  //Brief: Set the class of any LI inside the first UL of the document to "todo-list done" if the innerHTML of that LI
  //	   is the same as the INPUT's value of "#todo-input"
  //Return: None - Change class of those LI with their relative css.
  function markAsDone() {
  	var parent = document.getElementsByTagName("ul")[0];
  	var task = document.getElementById("todo-input").value;

  	for(var i = 0; i<document.getElementsByTagName("ul")[0].children.length; i++){
  		if(task==document.getElementsByTagName("ul")[0].children[i].innerHTML){
  			document.getElementsByTagName("ul")[0].children[i].className = "todo-list done";
  		}
  	}
    
  } 

  //Parameters: None;
  //Brief: Delete all the childs in the first UL
  //Return: None;
  function clearList() {

  	var list = document.getElementsByTagName("ul")[0];
	while (list.firstChild) {
	    list.removeChild(list.firstChild);
	}
  }
  //Parameters: None;
  //Brief: Delete all the childs in the first UL as long as they have the class "todo-list done"
  //Return: None; 
  //TO FIX - IT DOESN'T DELETE EVERY ITEM IF THE LIST IS FULL OF "todo-list done"; Deletes ALL except one.
  function clearListDone(){
  	if(document.getElementsByTagName("ul")[0].children.length!==0){
	  	var list = document.getElementsByTagName("ul")[0];
	  	for(var i = 0; i<document.getElementsByTagName("ul")[0].children.length; i++){
	  		if("todo-list done"===document.getElementsByTagName("ul")[0].children[i].className){
	  			list.children[i].parentNode.removeChild(list.children[i]);
	  			i--; //Since you delete a item, you must start again from index-1 so you don't skip any element.
	  			console.log(document.getElementsByTagName("ul")[0].children.length);
	  		}
	  	}
  	}
  	
  } 
}





// window.onload = function() {
//   //init();
//   //ESCUCHAS DE BOTONES CUANDO HACEN CLICK EJECUTAN FUNCIÓN

//   var saveButton = document.getElementById('add-button');
//   saveButton.addEventListener('click', addToDoItem, false);

//   //OTRAS ESCUCHAS DE BOTONES CUANDO HACEN CLICK EJECUTAN FUNCIÓN 
 
//   //doSomethingElse();
//   // LAS FUNCIONES DE AÑADIR BORRAR .....
//   function addToDoItem() {
//     //LO QUE SEA
//     console.log("ADD BUTTON CLICKED!");
//   }

//   function markAsDone() {
//     //LO QUE SEA
//     console.log("DONE BUTTON CLICKED!");
//   }
//  };




