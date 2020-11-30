
//empty array for user UI input todos.
let listItemArray = [];

//returned array of locally stored todos.
let returnedList = [];

/**
 * push todo item to array
 * @param {String} li 
 */
function addItemsToArray(li) {
   listItemArray = JSON.parse(localStorage.getItem('todos')) || [];
   const dates = document.getElementsByClassName('date');
   for (let date of dates) {
      if (date.classList.contains('active')) {
         date = date.id;
         listItemArray.push({ "text": li.innerText, "datum": date });
         if (li.innerText === "") {
            listItemArray.pop();
         }
      }
   }
   addToLocalStorage();
}

/**
 * Saves array to localstorage.
 */
function addToLocalStorage() {
   localStorage.setItem('todos', JSON.stringify(listItemArray));
}

/**
 * Takes data in local storage and saves to a string.
 */
function displayFromLocalStorage() {
   const storedList = JSON.parse(localStorage.getItem('todos')) || [];
   const dates = document.getElementsByClassName('date');
   for (const dateValue of storedList) {
      for (const date of dates) {
         if (date.id === dateValue.datum && date.classList.contains('active')) {
            const text = dateValue.text;
            populateList(text)
         }
      }
   }
}

/**
 * Displays text string in the to do list tray in the sidebar.
 * @param {String} text 
 */
function populateList(text) {
   const toDoUl = document.getElementById('ul-items');
   let li = document.createElement('li');
   returnedList.push(text)
   for (const listItem of returnedList) {
      li.appendChild(document.createTextNode(text));
      toDoUl.appendChild(li);
      li.className = "listItem";
      returnedList = [];
   }
}
