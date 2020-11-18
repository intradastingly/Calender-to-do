function currentDate() {
    let time = new Date();
    let today = time.getDate();
    selectCalendarDate(today);
    setCurrentDateStyle(today)
}

function selectCalendarDate(){
    const date = document.getElementsByClassName('date');
    for(let i = 0; i < date.length; i++){
        date[i].addEventListener('click',checkToDoList);
        date[i].addEventListener('click',boxColorChangeActive);
    }
}

function boxColorChangeActive(event) {
    const calendarDates = document.getElementsByClassName('date');
    for(const dates of calendarDates){
        if(dates.innerText === event.target.innerText){
            dates.style.backgroundColor = "rgb(255, 255, 255)";
        } else {
            dates.style.backgroundColor = "";
        }
    }
}

//find a way to get current date highlighted 
function setCurrentDateStyle(today){
    console.log(today);
    const date = document.getElementsByClassName('date');
    for(let i = 0; i < date.length; i++){
        if(date[i].innerText === today) {
            console.log('test')
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
