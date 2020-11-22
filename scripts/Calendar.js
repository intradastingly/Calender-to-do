/**
 * takes current date and assigns to variable.
 */
function currentDate() {
    let time = new Date();
    let today = time.getDate();
    setCurrentDateStyle(today)
}

function setCalenderDatesIds(){
    const dates = document.getElementsByClassName('date');
    for(let i = 0; i < dates.length; i++){
        dates[i].id =  i + 1;
    }
}
/**
 * loops through all calendar dates and applies on click active.
 */
function selectCalendarDate(){
    const dates = document.getElementsByClassName('date');
    for(let i = 0; i < dates.length; i++){
        dates[i].addEventListener('click',boxColorChangeActive);
    }
}

/**
 * If statements remove last 7 of the string, removing active status when other element is clicked. 
 * @param {click} event changes color of box based on click and adds active ID.
 */
function boxColorChangeActive(event) {
    const dates = document.getElementsByClassName('date');
    for(const date of dates){
        if(date.id === event.target.id){
            date.style.backgroundColor = "rgb(255, 255, 255)";
            date.id = date.id + '-active';
        } else if (date.id.length === 8){
            const str = date.id.slice(0,-7);
            date.id = str;
            date.style.backgroundColor = ""; 
        } else if(date.id.length === 9){
            const str = date.id.slice(0,-7);
            date.id = str;
            date.style.backgroundColor = ""; 
        }
    }
}

/**
 * 
 * @param {number} today applies styling to current date of the month in the calendar.
 */
function setCurrentDateStyle(today){
    const dates = document.getElementsByClassName('date');
    for(const date of dates){
        if(today === parseFloat(date.innerText)) {
            date.style.border = "2px solid black";
        }
    }
}

function addListToCalendarDate(){
    const add = document.getElementById('add');
    add.onclick = addArrayToSelectedDate;
    add.onclick = addDateToDoListNumber;
}

/**
 * 
 * @param {string} li adds list as number to currently selected date.
 */
function addDateToDoListNumber(event) {
    const list = document.getElementById('ul-items').children.length;
    const dates = document.getElementsByClassName('date');
    const numberOfToDo = document.createElement('p');
    numberOfToDo.className = "toDoCircle";
    numberOfToDo.innerText = list;
    for(const date of dates){
        if(date.id.length > 3){
            date.appendChild(numberOfToDo);
        } 
    }
}
  
    
//add to do list to localstorage.
//display today list on day it was selected on. 
//show current list items if any(use array)
//add list items to an array and display array into list.

//to change dates use ${} to change date of API url that updates calendar.

//populate calendar tr innerHTML with getdate() instead of text. 


var text = 'abcde';
var substring = text.slice(0, -3);

console.log(substring);

