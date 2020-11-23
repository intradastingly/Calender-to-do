
function addListToCalendarDate(){
   const add = document.getElementById('save');
   //add.onclick = addArrayToSelectedDate;
   add.addEventListener('click', addItemsToArray);
}

let listItemArray = [];

function addItemsToArray(li){
   listItemArray = JSON.parse(localStorage.getItem('todos')) || [];
   addToLocalStorage(listItemArray);
   const dates = document.getElementsByClassName('date');
   for(let date of dates){
      if(date.classList.contains('active')){
         date = date.id;
         listItemArray.push({"title":li.innerText, "date": date});
      } //when input value undefiend is implemented problem will be sovled when adding empty string. 
   }// items being added when date clicked.
   addToLocalStorage(listItemArray)
}

function addToLocalStorage(listItemArray) {
   localStorage.setItem('todos', JSON.stringify(listItemArray));
}

function saveToLocalStorage(){
   
}


//select date 
//add array to selected date
//figure out why button ID is going into date.
//add splice array of selected indexof???
//create DOM alert if input field is empty.

//display today list on day it was selected on. 
//show current list items if any(use array in local storage with dates)
//to change dates use ${} to change date of API url that updates calendar.
//populate calendar tr innerHTML with getdate() instead of text. 
//Remove old to do list from date with rensa button. 