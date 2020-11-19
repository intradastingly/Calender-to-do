/** Start the script */
window.addEventListener('load', getDate);

/** Get the current date */
function getDate() {
    let date = new Date();

    fetchMonth(date);
}

/** Get the current month and display the current month */
function fetchMonth(date) {
    
    let month = date.getMonth();
    let displayMonth = document.getElementById('currentMonth');
    
    currentMonth.innerHTML = month;

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
}