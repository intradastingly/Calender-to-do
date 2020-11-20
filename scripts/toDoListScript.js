// Add eventlisteners to Buttons.
function eventListenersButtons(){
   const confirm = document.getElementById('confirmAddItem'); 
   confirm.onclick = takeInput; 

   const remove = document.getElementById('removeItem'); 
   remove.onclick = removeButton;
   //remove.onclick = removeItemFromList;

}

function addListIds(input){
   const ul = document.querySelectorAll("#ul-items li");
   for(let i = 0; i < ul.length; i++){
      ul[i].addEventListener('click', removeButton); 
      ul[i].id = input;
   }
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


   /* listItemArray.push(li);
   console.log(listItemArray) */






   clearInput.value = '';
   addListIds(input)
}

//let listItemArray = [];

// removes li wich has the input text value.
function removeItemFromList() {
   let input = document.getElementById('addItem').value;
   const clearInput = document.getElementById('addItem');
   const item = document.getElementById(addItem.value);
   ul.removeChild(item, input);

   clearInput.value = '';
   
   const ul = document.getElementById("ul-items");
   
   for(const list of ul){
      console.log(list);
   }
   
   
  /*  for (let i = 0; i < listItemArray.length; i++) {
      let liIndex = listItemArray[i];
      console.log("loop works")
      liIndex.addEventListener('click', removeLiItemOnclick);
      break;
   } */
}

function removeButton(event, input){
   const ul = document.querySelectorAll("li");
    if (event.target.id === input){
      ul.classList.add("red");
   } else {
      
   }  
}

