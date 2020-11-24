
let listItemArray = [];

function addItemsToArray(li){
   const dates = document.getElementsByClassName('date');
   for(let date of dates){
      if(date.classList.contains('active')){
         date = date.id;
         listItemArray.push({"text":li.innerText, "datum": date});
         if(li.innerText === ""){
            listItemArray.pop();
         }
         addToLocalStorage(listItemArray)
      }  
   }
}

function addToLocalStorage(listItemArray){
   localStorage.setItem('todos', JSON.stringify(listItemArray));
}

function removeFromLocalStorage(){
   const storedList = JSON.parse(localStorage.getItem('todos'));
   const dates = document.getElementsByClassName('date');
   for (const toDo of storedList){
      for(const date of dates){
         console.log(toDo);
         console.log(date.id);
      }
   }
   //takes array with correct date id
   //appends all array items to do list
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