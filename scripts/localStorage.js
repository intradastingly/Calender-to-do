
let currentToDoList = [];

function addListToCalendarDate(){
   const add = document.getElementById('save');
   //add.onclick = addArrayToSelectedDate;
   add.addEventListener('click', saveToLocalStorage);
}

function addListItemsToArray(li){
   const dates = document.getElementsByClassName('date');
   for(let date of dates){
      if(date.classList.contains('active')){
         date = date.id;
         currentToDoList.push({"title":li.innerText, "date": date});
      } //when input value undefiend is implemented problem will be sovled when adding empty string. 
   }// make it so that number count goes up as you add items to list. remove addera button
   
   console.log(currentToDoList); 
}

function saveToLocalStorage(){
   
}


//select date 
//add array to selected date
//figure out why button ID is going into date.
//add splice array of selected indexof???
//create DOM alert if input field is empty.
//add to do list to localstorage.
//display today list on day it was selected on. 
//show current list items if any(use array)
//add list items to an array and display array into list.
//to change dates use ${} to change date of API url that updates calendar.
//populate calendar tr innerHTML with getdate() instead of text. 
//Remove old to do list from date. 