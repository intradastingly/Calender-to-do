/** Get the current date */
function getDate() {
    
    const date = new Date();
    
    getMonth(date)
}  

/** Get the current month
 * @param {date} currentDate
 */
function getMonth(date) {
    let month = date.getMonth();
    changeMonth(month);
}

/** Get the eventlisteners for the arrowkeys to switch between months in the calendar */
function changeMonth(month) {
    
    const arrowLeft = document.getElementById('arrowLeft');
    const arrowRight = document.getElementById('arrowRight');
    
    arrowLeft.addEventListener('click',() =>{month--; fetchMonth(month); fetchAllDays(); populateDates();})
    arrowRight.addEventListener('click',() =>{month++;fetchMonth(month); fetchAllDays(); populateDates();})
    
    fetchMonth(month)  
}

/** Fetch the current month and display the current month in calendar.
 * @param {Month} month 
 * */
function fetchMonth(month) {
    let time = new Date();
    let year = time.getFullYear()
    let displayMonth = document.getElementById('currentMonth');
    month = month % 12;     
    switch (month) {
        case 0:
            displayMonth.innerHTML = 'Januari';
            break;
        case 1:
            displayMonth.innerHTML = 'Februari';
            break;
        case 2:
            displayMonth.innerHTML = 'Mars';
            break;
        case 3:
            displayMonth.innerHTML = 'April';
            break;
        case 4:
            displayMonth.innerHTML = 'Maj';
            break;
        case 5:
            displayMonth.innerHTML = 'Juni';
            break;
        case 6:
            currentMonth.innerHTML = 'Juli';
            break;
        case 7:
            displayMonth.innerHTML = 'Augusti';
            break;
        case 8:
            displayMonth.innerHTML = 'September';
            break;
        case 9:
            displayMonth.innerHTML = 'Oktober';
            break;
        case 10:
            displayMonth.innerHTML = 'November';
            break;
        case 11:
            displayMonth.innerHTML = 'December';
            break;        
     }      
    setCalenderDatesIds(month);//not working properly returns NaN
    populateCellsWithCurrentMonthDates(month,year);//does display correct dates 
}
