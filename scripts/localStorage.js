
  
let listItemArray = [];

function placeHolderArray() {//place holder array keeps adding on top of itself?
   listItemArray = JSON.parse(localStorage.getItem('todos')) || [];
   listItemArray.push([]);
   addToLocalStorage(listItemArray);
}

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
   addToLocalStorage(listItemArray)
}

function addToLocalStorage(listItemArray){
   localStorage.setItem('todos', JSON.stringify(listItemArray));
}

function displayFromLocalStorage(){
   const storedList = JSON.parse(localStorage.getItem('todos'));
   const dates = document.getElementsByClassName('date');
   const display = document.getElementById('addItem');
   const li = document.createElement("li");
   for(const dateValue of storedList){
      for (const date of dates){
         if(date.id === dateValue.datum && date.classList.contains('active')){
            console.log(dateValue.datum, dateValue.text);
            li.innerText = dateValue.text;
            populateList(li);
         }
      }
   } 
}

function populateList(li) {
   console.log(li);
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