

// Add eventlisteners to Buttons.
function eventListenersButtons(){
   const confirm = document.getElementById('confirmAddItem'); 
   confirm.onclick = takeInput; 

   const remove = document.getElementById('removeItem'); 
   remove.onclick = removeItemFromList;

}


// takes input text as value.
function takeInput(){
   let input = document.getElementById('addItem').value;
   addNewItemToList(input);
   
}

// adds value to new li as textNode. 
function addNewItemToList(input){
   const ul = document.getElementById("ul-items");
   const li = document.createElement("li");
   const clearInput = document.getElementById('addItem');
   li.setAttribute("id", input);
   li.appendChild(document.createTextNode(input)); // gives all li differents textNodes with input text.
   ul.appendChild(li);

   
   clearInput.value = '';
}

listItemArray = [];

// removes li wich has the input text value.
function removeItemFromList() {
   let input = document.getElementById('addItem').value;
   const clearInput = document.getElementById('addItem');
   const ul = document.getElementById("ul-items");
   const item = document.getElementById(addItem.value);
   ul.removeChild(item, input);

   clearInput.value = '';

   for (let index = 0; index < array.length; index++) {
      const element = array[index];
      
   }
}
