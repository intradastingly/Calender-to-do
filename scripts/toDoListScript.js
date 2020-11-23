/**
* Add eventlisteners to Buttons.
*/
function eventListenersButtons(){
   const confirm = document.getElementById('confirmAddItem'); 
   confirm.onclick = takeInput; 

   const clear = document.getElementById('clear');
   clear.onclick = clearToDoList;
}

/**
* takes input text as value.
*/
function takeInput(){
   let input = document.getElementById('addItem').value;
   addNewItemToList(input);
}

/**
 * @param {string} input takes user text input from input box and sends it to list. 
 */
function addNewItemToList(input){
   const ul = document.getElementById("ul-items");
   const li = document.createElement("li");
   const clearInput = document.getElementById('addItem');

   li.setAttribute("id", input);
   li.appendChild(document.createTextNode(input)); // gives all li differents textNodes with input text.
   ul.appendChild(li);
   li.className = "listItem";
   clearInput.value = '';

   addListItemsToArray(li)
   addListIds(input)

   if (input === "") {
      li.parentNode.removeChild(li);
   }
}

/** 
* ads different ids to each list item
* @param {string} input
*/
function addListIds(input){
   const ul = document.querySelectorAll("#ul-items li");
   for(let i = 0; i < ul.length; i++){
      ul[i].addEventListener('click', selectFromList); 
      ul[i].id += i;
   }
}



/**loops trough all list items and checks wich list item is clicked
 * @param {click} event  and turns it white and adds a class
 */
function selectFromList(event){
   const ul = document.querySelectorAll("li");
   for (let list of ul) {
      if (event.target.id === list.id){
         list.style.color = "red";
         list.className = "focus";
         list.onclick = showListItemX(list); 
        
      } else { 
         list.style.color = "black";
         list.className = " ";
         
         removeParagraphStyles("x");
      }
   } 
} 

/**
 * shows X when pressed specifik list
 * @param {*} list 
 * @param {*} event 
 */
function showListItemX(list) {
   
   let paragraph = document.createElement("p");
   paragraph.className = "x";
   paragraph.id = "x"
   paragraph.innerText = "X";
   list.appendChild(paragraph);
   

   paragraph.onclick = removeListContent; //removeListItemWithX(paragraph, list);
}


// should remove css style
function removeParagraphStyles() {
   let element = document.getElementById("x");
   console.log(element);


   setTimeout (function(){
      element.style.display = "none";
   }, 3000)
   
      
   // GET THIS TO WORK PROPERLY THEN IM DONE


}
/**
 * removes the list item with the class name ".focus" on it.  
 */
function removeListContent(){
   const remove = document.getElementsByClassName('focus');
   while (remove.length > 0) remove[0].remove();
}

/**
 * clears entire to do list
 */
function clearToDoList(){
   const listItem = document.getElementsByClassName('listItem');
   while (listItem.length > 0) listItem[0].remove();
}

function clearItem(){
   const listItem = document.getElementsByClassName('listItem');
   while (listItem.length > 0) listItem[0].remove();
}


// remove "ta bort" button - DONE -
// style ".focus" - DONE -
// make only one ".focus" adds not multiple each click
// remove ".focus" when u choose another list
// setTimeOut on how long ".focus" will show


