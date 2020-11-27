/**
* Add eventlisteners to Buttons.
*/
function eventListenersButtons(){
   const confirm = document.getElementById('confirmAddItem'); 
   confirm.onclick = takeInput; 

   const clear = document.getElementById('clear');
   clear.onclick = clearToDoList;

   const remove = document.getElementById('removeItem'); 
   remove.onclick = removeButton;
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
function selectFromList(event){
   const ul = document.querySelectorAll("li");
   for (let list of ul) {
      if (event.target.id === list.id){
         list.style.color = "orange";
         list.className = "focus";
      } else if (event.target.id != list.id){ // makes the non selected list item back to black.
         list.style.color = "black";
         list.className = " ";
      }
   } 
} 

function removeButton(){
   const remove = document.getElementsByClassName('focus');
   while (remove.length > 0) remove[0].remove();
}

function clearToDoList(){
   const listItem = document.getElementsByClassName('listItem');
   while (listItem.length > 0) listItem[0].remove();
   listItemArray = [];
   returnedList = [];
}
// PARAGRAPH RED X CODE 
/**loops trough all list items and checks which list item is clicked
 * @param {click} event  and turns it white and adds a class
 */
// function selectFromList(event){
//    const ul = document.querySelectorAll("li");
//    for (let list of ul) {
//       if (event.target.id === list.id){
//          list.style.color = "black";
//          list.className = "focus";
//          list.id = "focus";
//          // list.onclick = showListItemX(list); 
//          // removeParagraphStyles(list);
        

//          // list.style.color = "red";
//          // list.className = "focus";
//       } else { 
//          list.style.color = "black";
//          list.className = " ";
//          // list.id = " ";

//       }
//    } 
// } 


/**
 * shows X when pressed specific list
 * @param {string} list 
 */

// function showListItemX(list) {
//    let paragraph = document.createElement("p");
//    paragraph.className = "x";
//    paragraph.id = "x"
//    paragraph.innerText = "X";
//    list.appendChild(paragraph);
   
   
//    paragraph.onclick = removeListContent;
// }


/**
 * removes selected list child after 1s
 * @param {string} list 
 */
// function removeParagraphStyles(list) {
//    setTimeout(function() {
//       while (list.children[0]) {
//          list.removeChild(list.children[0])
//       }
//    }, 1000);
// }

/**
 * removes the list item with the class name ".focus" on it.  
 */


function removeListContent(listItemArray){
   const remove = document.getElementsByClassName('focus');
   while (remove.length > 0) remove[0].remove();
   //addToLocalStorage(listItemArray)
}


/**
 * clears entire to do list
 */



