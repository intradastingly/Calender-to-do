
/**
 * takes current date and assigns to variable.
 */
function currentDate() {
    let time = new Date();
    let today = time.getDate();
    setCurrentDateStyle(today)
}

/**
 * loops through all calendar dates and applies on click to individual box which calls two functions
 */
function selectCalendarDate(){
    const dates = document.getElementsByClassName('date');
    for(let i = 0; i < dates.length; i++){
        dates[i].addEventListener('click',checkToDoList);
        dates[i].addEventListener('click',boxColorChangeActive);
    }
}

/**
 * 
 * @param {mouse click} event changes color of box based on click.
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
 * @param {current date} today applies styling to current date of the month in the calendar.
 */
function setCurrentDateStyle(today){
    const dates = document.getElementsByClassName('date');
    for(const date of dates){
        if(today === parseFloat(date.innerText)) {
            date.style.border = "2px solid black";
        }
    }
}

function checkToDoList(event) {
   
}

//show current list items if any(use array)
//couple to add list functions
//make it so holidays have red box color with API call
//Add current date highlight on current day in calendar
//add li with red days to td append etc...
