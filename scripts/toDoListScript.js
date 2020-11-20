
/**
 * 
remove active list item todo. 

type in wich list item todo to remove. 

remove list item todo.

add list items to empty array. 



 */

 /**
  * selects remove and add buttons and calls functions when they are clicked.
  */
function eventListenersButtons(){
    const confirm = document.getElementById('confirmAddItem');
    const remove = document.getElementById('removeItem');
    confirm.onclick = takeInput;
    remove.onclick = removeLastItemFromList;
 }
 
 /**
  * takes value from the input field and sends it to another function
  */
 function takeInput(){
     const input = document.getElementById('addItem').value;
     addNewItemToList(input);
 }
 
 
 /**
  * 
  * @param {value} input creates the inner list elements to be displayed in the browser 
  */
 function addNewItemToList(input){
         const ul = document.querySelector('ul');
         const li = document.createElement('li');
         const clearInput = document.getElementById('addItem');
         li.innerText = input;
         ul.appendChild(li)
         clearInput.value = '';//added this to clear the input field after text is submitted
             if (input === "") {
                 alert("please add something");  
                 li.parentNode.removeChild(li);
         } 
        
         addDateToDoListNumber(li) //sends list items to calendar function.
 }
 
 function removeLastItemFromList(){
     const ul = document.querySelector('ul');
     for(let i = 0; i < ul.length; i++){
         console.log(ul[i]);
     }
 }
 