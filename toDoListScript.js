
function eventListenersButtons(){
    const confirm = document.getElementById('confirmAddItem'); // LÄGG TILL KNAPP
    const remove = document.getElementById('removeItem'); // TA BORT KNAPP
    confirm.onclick = takeInput; // ANROPA takeInput FUNKTION NÄR KLICK HÄNDER
    remove.onclick = removeLastItemFromList; // ANROPA removeLastItemFromList FUNKTION NÄR KLICK HÄNDER
 }
 // Lägger till 
 // Array till vad användaren skriver som input som sedan visas på sidan
 let inputArray = []; 

 function takeInput(){
     console.log("klickade på Lägg Till")
    let input = document.getElementById('addItem').value;   // Tar texten från input
    inputArray.push(input);
    console.log(inputArray);
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
// Ta bort det som står i input med samma som står som ett list item.
// ta bort just det list itemet
// 
function removeLastItemFromList() {
    console.log("Klickade på Ta Bort")
    const input = document.getElementById('addItem').value; //const or let

    for (i=0; i < inputArray.length; i++){
        if (inputArray[i] === input) {
            console.log("Remove Li Child element with this input name");
            inputArray.p // här skall jag ta bort input valuet ur inputarray för jag tryckte nyss på ta bort.
            // sedan får jag försöka hitta ett sätt att presentera en array på en sida så är de löst.
            console.log(inputArray);
        } else {
            alert("Det finns ingen todo med detta namn! prova igen")
        }

    }
    // removeNewItemFromList(input); First attempt. read more below.
}












// Input is what the user writes in the box
//  First  attempt to reverse the add style to it. but did now work
// function removeNewItemFromList(input){
//         const ul = document.querySelector('ul');
//         const li = document.removeElement('li');
//         if (li.innerText = input) {
//             console.log("JA")
//             ul.removeChild(li) 
//         }
//         li.innerText = input;
//         ul.removeChild(li) 
//         if (input === "") {
//             li.parentNode.removeChild(li)
//         }

// }


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
 