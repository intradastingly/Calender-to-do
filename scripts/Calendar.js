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
            date.classList.add("active");
            clearToDoList()
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

    for(const date of dates){
        if(date.classList.contains('active')){
            date.appendChild(numberOfToDo);
            console.log(numberOfToDo);
            if(date.children.length > 1){
                date.childNodes[1].remove();
            }
        }
    }
}



