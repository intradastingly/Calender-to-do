

let listItemArray = [];
let returnedList = [];

/**
 * 
 * @param {String} li 
 */
function addItemsToArray(li){
   
   listItemArray = JSON.parse(localStorage.getItem('todos')) || [];
   const dates = document.getElementsByClassName('date');
   for(let date of dates){
      if(date.classList.contains('active')){
         date = date.id;
         listItemArray.push({"text":li.innerText, "datum": date});
         if(li.innerText === ""){
            listItemArray.pop();
         }
      }   
   }
   addToLocalStorage(listItemArray);
   //removeButton(listItemArray);
}
/**
 * 
 * @param {Array} listItemArray 
 */
function addToLocalStorage(){
   localStorage.setItem('todos', JSON.stringify(listItemArray));
}
function displayFromLocalStorage(){
   
   const storedList = JSON.parse(localStorage.getItem('todos')) || [];
   const dates = document.getElementsByClassName('date');
   for(const dateValue of storedList){
      for (const date of dates){
         if(date.id === dateValue.datum && date.classList.contains('active')){
            const text = dateValue.text;
            populateList(text)
         }
      }
   } 
}
/**
 * 
 * @param {String} text 
 */
function populateList(text) {
   const toDoUl = document.getElementById('ul-items');
   let li = document.createElement('li');
   returnedList.push(text)
   for(const listItem of returnedList){
      li.appendChild(document.createTextNode(text)); 
      toDoUl.appendChild(li);
      li.className = "listItem";
      returnedList = [];
   } 
}

//rensa and ta bort buttons need to work.
//set limit on month number.

