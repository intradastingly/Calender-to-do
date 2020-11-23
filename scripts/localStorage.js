let listItemArray = [];

function addListItemsToArray(li){
   listItemArray = JSON.parse(localStorage.getItem('todos')) || [];
   listItemArray.push(li);
   addArrayToSelectedDate(listItemArray)
   addToLocalStorage(listItemArray);
}

function addArrayToSelectedDate(listItemArray){
   const ul = document.getElementById("ul-items");
   console.log('test');
   console.log(listItemArray)
}

function clearArray(){

}
//add list items to global array
//select date 
//add array to selected date
//clear global array for next list 



