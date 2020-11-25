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
            li.innerText = dateValue.text;
            console.log(date.id + ' id')
            console.log(dateValue.text + ' test ' + dateValue.datum) 
            console.log(li);
         }
      }
   } 
}

function populateList(li) {
   
}


//can't send date() vars as function paramteres???
//bug, when date reselected to do list numbers are set back to 1??? \
//place holder array keeps adding on top of itself?

//display today list on day it was selected on. 
//show current list items if any(use array in local storage with dates)
//populate calendar tr innerHTML with getdate() instead of text. 
//Remove old to do list from date with rensa button. 