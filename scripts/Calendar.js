/**
 * takes current date and assigns to variable.
 */
function currentDate() {
    let time = new Date();
    let today = time.getDate();
    setCurrentDateStyle(today)
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
 * 
 * @param {click} event changes color of box based on click and adds active ID.
 */
function boxColorChangeActive(event) {
    const dates = document.getElementsByClassName('date');
    for(const date of dates){
        if(date.innerText === event.target.innerText){
            date.style.backgroundColor = "rgb(255, 255, 255)";
            date.id = "active";
        } else {
            date.style.backgroundColor = "";
            date.id = "";
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
function addDateToDoListNumber(li) {
    const list = document.getElementById('ul-items').children.length;
    const dates = document.getElementsByClassName('date');
    const numberOfToDo = document.createElement('p');
    numberOfToDo.className = "toDoCircle";
    numberOfToDo.innerText = list;
    for(const date of dates){
        if(date.id === 'active'){
            date.appendChild(numberOfToDo);
        } 
    }
}  
    
//add to do list to localstorage.
//display today list on day it was selected on. 
//show current list items if any(use array)
//add list items to an array and display array into list.

//to change dates use ${} to change date of API url that updates calendar.