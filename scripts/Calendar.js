
/**
 * takes current date and assigns to variable.
 */
function currentDate() {
    let time = new Date();
    let today = time.getDate();
    setCurrentDateStyle(today)
}

/**
 * Adds current month date to date ID so it can be synced with dagar API.
 */
function setCalenderDatesIds(){ 
    let time = new Date();
    let month = time.getMonth();
    let year = time.getFullYear() 
    const dates = document.getElementsByClassName('date');
    //can't send time variables as function parameters from currentDate^, they come up as undefined???
    for(let i = 0; i < dates.length; i++){
        if(i < 9){
            dates[i].id = `${year}-${month}-0` + Number(i + 1);
        } else if (i >= 9){
            dates[i].id = `${year}-${month}-` + Number(i + 1);
        }
    }
}

  /*   function daysInMonth (month, year) {
        return new Date(year, month, 0).getDate();
    }
    
    daysInMonth(7,2009); 
    daysInMonth(2,2009);
    console.log(daysInMonth(2,2008));  */


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
            date.classList.add("active");
            clearToDoList();
            displayFromLocalStorage();
            addListIds();
            addDateToDoListNumber();
        } else {
            date.classList.remove('active');
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
 * Updates circle number based on number of items in the list. 
 * @param {string} li adds list as number to currently selected date.  
 */
function addDateToDoListNumber(li) {
    const list = document.getElementById('ul-items').children.length;
    const dates = document.getElementsByClassName('date');
    const numberOfToDo = document.createElement('p');
    
    numberOfToDo.className = "toDoCircle";
    numberOfToDo.innerHTML = list;
    //bug, when date reselected to do list numbers are set back to 1??? 
    for(const date of dates){
        if(date.classList.contains('active')){
            date.appendChild(numberOfToDo);
            if(date.children.length > 1){
                date.childNodes[1].remove();
                //send in length of array from localStorage function? 
            }
        }
    }
}



