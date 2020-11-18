
function eventListenersButtons(){
    const confirm = document.getElementById('confirmAddItem'); // LÄGG TILL KNAPP
    const remove = document.getElementById('removeItem'); // TA BORT KNAPP
    confirm.onclick = takeInput; // ANROPA takeInput FUNKTION NÄR KLICK HÄNDER
    remove.onclick = removeLastItemFromList; // ANROPA removeLastItemFromList FUNKTION NÄR KLICK HÄNDER
 }
 // Lägger till 
 function takeInput(){
     const input = document.getElementById('addItem').value; // Tar texten från input
     console.log("hej")
     addNewItemToList(input); // skickar input texten i en const input variabel.
 }
 
 function addNewItemToList(input){ 
         const ul = document.querySelector('ul'); // selects all ul list in document
         const li = document.createElement('li'); // Creates li elements
         li.innerText = input; // Sets input text to appear in text inside of li element
         ul.appendChild(li) // choose child to unordered list
             if (input === "") { 
                 alert("please add something");  
                 li.parentNode.removeChild(li);
         }
         
 }

function removeLastItemFromList() {
    const input = document.getElementById('addItem').value; //const or let
    removeNewItemFromList(input);
}

// Input is what the user writes in the box

function removeNewItemFromList(input){
        const ul = document.querySelector('ul');
        const li = document.removeElement('li');
        li.innerText = input;
        ul.removeChild(li) 
        if (input === "") {
            li.parentNode.removeChild(li)
        }

}


 // 
 // const Input = document.getElementById('addItem').value;
 // If li.innerText = input; 
 // 
 
//  function removeLastItemFromList(){
//      const ul = document.querySelector('ul');
//      for(let i = 0; i < ul.length; i++){
//          console.log(ul[i]);
//      }
//  }
 