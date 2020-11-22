/**
* Add eventlisteners to Buttons.
*/
function eventListenersButtons(){
   const confirm = document.getElementById('confirmAddItem'); 
   confirm.onclick = takeInput; 

   const remove = document.getElementById('removeItem'); 
   remove.onclick = removeButton;

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
 * @param {click} event  and turns it orange and adds a class
 */
function selectFromList(event){
   const ul = document.querySelectorAll("li");
   for (let list of ul) {
      if (event.target.id === list.id){
         list.style.color = "white";
         list.className = "active";
      } else { 
         list.style.color = "black";
         list.className = " ";
      }
   } 
} 

/**
 * removes the list item with the class name active on it.  
 */
function removeButton(){
   const remove = document.getElementsByClassName('active');
   while (remove.length > 0) remove[0].remove();
}

/**
 * clears entire to do list
 */
function clearToDoList(){
   const listItem = document.getElementsByClassName('listItem');
   while (listItem.length > 0) listItem[0].remove();
   removeNumberListFromDate()
}
