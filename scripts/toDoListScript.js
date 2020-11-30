/**
* Add eventlisteners to Buttons.
*/
function eventListenersButtons() {
   const confirm = document.getElementById('confirmAddItem');
   confirm.onclick = takeInput;

   const remove = document.getElementById('removeItem');
   remove.onclick = removeButton;
}
/**
* takes input text as value.
*/
function takeInput() {
   let input = document.getElementById('addItem').value;
   addNewItemToList(input);
}
/**
 * @param {string} input takes user text input from input box and sends it to list. 
 */
function addNewItemToList(input) {
   const ul = document.getElementById("ul-items");
   const li = document.createElement("li");
   const clearInput = document.getElementById('addItem');
   li.setAttribute("id", input);
   li.appendChild(document.createTextNode(input));
   ul.appendChild(li);
   clearInput.value = '';
   li.className = "listItem";
   if (input === "") {
      li.parentNode.removeChild(li);
   }
   addItemsToArray(li);
   addListIds()
   addDateToDoListNumber(li)
}

/** 
* adds IDs to each list item based on length of list. 
*/
function addListIds() {
   const ul = document.querySelectorAll("#ul-items li");
   for (let i = 0; i < ul.length; i++) {
      ul[i].addEventListener('click', selectFromList);
      ul[i].id = i + 'l';
   }
}

/**
 * Adds focus class to clicked list item in the sidebar. 
 * also turns selected text red. 
 * @param {click} event
 */
function selectFromList(event) {
   const ul = document.querySelectorAll("li");
   for (let list of ul) {
      if (event.target.id === list.id) {
         list.style.color = "red";
         list.className = "focus";
      } else if (event.target.id != list.id) { // makes the non selected list item back to black.
         list.style.color = "black";
         list.className = " ";
      }
   }
}
/**
 * Clears selected todo from DOM list and from local storage.
 */
function removeButton() {
   const remove = document.getElementsByClassName('focus');
   const items = JSON.parse(localStorage.getItem("todos"));
   for (let i = 0; i < items.length; i++) {
      for (const removedItem of remove) {
         if (removedItem.innerText === items[i].text) {
            items.splice(i, 1);
         }
      }
   }
   localStorage.setItem("todos", JSON.stringify(items));
   while (remove.length > 0) remove[0].remove();
   addDateToDoListNumber();
}
/**
 * Clears todolist
 */
function clearToDoList() {
   const listItem = document.getElementsByClassName('listItem');
   while (listItem.length > 0) listItem[0].remove();
}