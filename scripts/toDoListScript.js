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
 * @param {click} event  and turns it orange and adds a class
 */
function selectFromList(event){
   const ul = document.querySelectorAll("li");
   console.log(event)
   event.preventDefault()
   for (let list of ul) {
      if (event.target.id === list.id){
         list.style.color = "white";
         list.className = "active";
         
         //call function that shows X
         list.onclick = showListItemX(list); 
        
      } else { 
         list.style.color = "black";
         list.className = " ";
      }
   } 
} 
function showListItemX(list) {
   console.log("show X function")
   let paragraph = document.createElement("p");
         paragraph.innerText = "X"
         list.appendChild(paragraph);
         paragraph.className = "paragraph";
         console.log(paragraph)
         //calls function that removes X and List
         paragraph.onclick = removeListItemWithX(paragraph, list);
}
/**
 * removes the X after 3s on selected list item if no action called.
 * Removes list and X when X is clicked. 
 * @param {element} paragraph 
 * @param {string} list 
 */
function removeListItemWithX(paragraph, list) {
   console.log("remove X function")
  // const ul = document.getElementById("ul-items");
  // ul.removeChild(list)
   
   // paragraph.className = "paragraph";
   setTimeout(function() {
      list.removeChild(paragraph)
   }, 3000);
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
}



// select item on list
// add X under as paragraph. 
// paragraph child to li item. 
// paragraph onclick remove paragraph
// paragraph onlick remove paragraph
// remove ta bort button




// create DOM alert if input field is empty.