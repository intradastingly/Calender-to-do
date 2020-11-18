
function eventListeners(){
    const confirm = document.getElementById('confirmAddItem');
    const remove = document.getElementById('removeItem');
    confirm.onclick = takeInput;
    remove.onclick = removeLastItemFromList;
 }
 
 function takeInput(){
     const input = document.getElementById('addItem').value;
     addNewItemToList(input);
 }
 
 function addNewItemToList(input){
         const ul = document.querySelector('ul');
         const li = document.createElement('li');
         li.innerText = input;
         ul.appendChild(li)
             if (input === "") {
                 alert("please add something");  
                 li.parentNode.removeChild(li);
         }
         
 }
 
 function removeLastItemFromList(){
     const ul = document.querySelector('ul');
     for(let i = 0; i < ul.length; i++){
         console.log(ul[i]);
     }
 }
 