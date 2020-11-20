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
    const ul = document.getElementById("ul");
    const li = document.createElement("li");
    li.setAttribute("id", input);
    li.appendChild(document.createTextNode(input)); // gives all li differents textNodes with input text.
    ul.appendChild(li);

 }

 // removes li wich has the input text value.
function removeItemFromList() {
    const ul = document.getElementById("ul");
    const item = document.getElementById(addItem.value);
    ul.removeChild(item);
}
