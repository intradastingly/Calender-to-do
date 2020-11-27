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

   if (input === "") {
      li.parentNode.removeChild(li);
   }
   
   clearInput.value = '';
  
   addItemsToArray(li);
   addListIds()
   addDateToDoListNumber(li)
}

/** 
* adds different ids to each list item
* @param {string} 
*/
function addListIds(){
   const ul = document.querySelectorAll("#ul-items li");
   for(let i = 0; i < ul.length; i++){
      ul[i].addEventListener('click', selectFromList); 
      ul[i].id = i + 'l';
   }
}



/**loops trough all list items and checks which list item is clicked
 * @param {click} event  and turns it white and adds a class
 */
function selectFromList(event){
   const ul = document.querySelectorAll("li");
   for (let list of ul) {
      if (event.target.id === list.id){
         list.style.color = "black";
         list.className = "focus";
         list.onclick = showListItemX(list); 
         removeParagraphStyles(list);
        

         list.style.color = "red";
         list.className = "focus";
      } else { 
         list.style.color = "black";
         list.className = " ";
         
      }
   } 
} 



/**
 * shows X when pressed specific list
 * @param {string} list 
 */

function showListItemX(list) {
   let paragraph = document.createElement("p");
   paragraph.className = "x";
   paragraph.id = "x"
   paragraph.innerText = "X";
   list.appendChild(paragraph);
   
   
   paragraph.onclick = removeListContent;
}


/**
 * removes selected list child after 1s
 * @param {string} list 
 */
function removeParagraphStyles(list) {
   setTimeout(function() {
      while (list.children[0]) {
         list.removeChild(list.children[0])
      }
   }, 1000);
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
   listItemArray = [];
   returnedList = [];
}



