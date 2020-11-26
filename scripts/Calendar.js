
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
 * takes current month and year and applies it to calendar.
 */
function setCalenderDatesIds(){ 
    let time = new Date();
    //let month = time.getMonth();
    let month = 12;
    let year = time.getFullYear() 
    const dates = document.getElementsByClassName('date');
    //can't send time variables as function parameters from currentDate^, they come up as undefined???
    if(month < 10){ month = '0' + month; }
    for(let i = 0; i < dates.length; i++){
        if(i < 9){
            dates[i].id = `${year}-${month}-0` + Number(i + 1);
        } else if (i >= 9){
            dates[i].id = `${year}-${month}-` + Number(i + 1);
        }
    }
}


/**
 * Loop that applies click event to individual date element.  
 */
function selectCalendarDate(){
    const dates = document.getElementsByClassName('date');
    for(let i = 0; i < dates.length; i++){
        dates[i].addEventListener('click',boxColorChangeActive);
    }
}

/**
 * If statements remove last 7 of the string, removing active status when other element is clicked. 
 * @param {Event} event changes color of box based on click and adds active ID.
 */
function boxColorChangeActive(event) {
    const dates = document.getElementsByClassName('date');
    for(const date of dates){
        if(date.id === event.target.id){
            date.style.backgroundColor = "rgb(255, 255, 255)";
            setTimeout(function(){date.classList.add("active");},1);
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
 * @param {Date} today applies styling to current date of the month in the calendar.
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
 */
function addDateToDoListNumber() {
    console.log()
    const list = document.getElementById('ul-items').children.length;
    const dates = document.getElementsByClassName('date');
    const numberOfToDo = document.createElement('p');
    numberOfToDo.className = "toDoCircle";
    numberOfToDo.innerHTML = list;
    for(const date of dates){
        if(date.classList.contains('active')){
            date.appendChild(numberOfToDo);
            /* if(date.children.length > 1){
                date.childNodes[2].remove();
                //apply different fix than increasing node value to 3. 
            } */
        }
    }
}

/**
 * Populates dates with to do listicles that were previously saved on the specific dates. 
 */
function populateDates(){
    const storedList = JSON.parse(localStorage.getItem('todos')) || [];
    const dates = document.getElementsByClassName('date');
    for(const dateValue of storedList){
        for (const date of dates){
           if(date.id === dateValue.datum){
                let box = document.getElementById(date.id);
                let paragraph = document.createElement('p'); 
                paragraph.className = "toDoCircle";
                paragraph.innerHTML = "!";
                box.appendChild(paragraph);   
                applyListNumbers(paragraph);  
           }
        }
    } 
}

function applyListNumbers(paragraph){
    console.log(paragraph)
}
