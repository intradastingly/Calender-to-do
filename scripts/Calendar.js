
/**
 * takes current date and assigns to variable.
 */
function currentDate() {
    let time = new Date();
    let today = time.getDate();
    setCurrentDateStyle(today)
}

function sendCalendarTabs() { 
    const dates = document.getElementsByClassName('date');
    for(const date of dates){
        return date;
    }
    //send variables down in one functioN as params??????
}

function tabs() {

}

/**
 * loops through all calendar dates and applies on click to individual box which calls two functions
 */
function selectCalendarDate(){
    const dates = document.getElementsByClassName('date');
    for(let i = 0; i < dates.length; i++){
        
        dates[i].addEventListener('click',boxColorChangeActive);
    }
}

/**
 * 
 * @param {click} event changes color of box based on click.
 */
function boxColorChangeActive(event) {
    const dates = document.getElementsByClassName('date');
    for(const date of dates){
        if(date.innerText === event.target.innerText){
            date.style.backgroundColor = "rgb(255, 255, 255)";
        } else {
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

/**
 * 
 * @param {string} li applies styling to current date of the month in the calendar.
 */
function addDateToDoListNumber(li) {
    //takes list from to do list.
    const list = document.getElementById('ul-items').children.length;
    const dates = document.getElementsByClassName('date');
    const numberOfToDo = document.createElement('p');

    numberOfToDo.className = "toDoCircle";
    numberOfToDo.innerText = list;

    for(const date of dates){
        if(date.innerText === event.target.innerText){
            date.appendChild(numberOfToDo);
            //adds list to selected day as numbers. 
        }
    }
}
    
    //add to do list to localstorage.
    //display today list on day it was selected on. 


//show current list items if any(use array)
//couple to add list functions
//make it so holidays have red box color with API call
//add li with red days to td append etc...
