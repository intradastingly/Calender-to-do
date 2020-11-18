

// shows a digital clock, weekday and month

window.addEventListener('load', startClock);


/** Function that starts the clock and update it every 1s */
function startClock() {
    updateClock();
    setInterval(updateClock, 1000);

}

/** Updates time and date, and takes in a variable that fetch current date/time */
function updateClock() {
    let time = new Date();

    getTime(time);
    showWeekday(time);
    showCurrentDate(time);


}


/** Fetch time ands shows current time */
function getTime(time) {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    const timeContainer = document.getElementById('showTime');
    timeContainer.innerHTML = hours + ':' + minutes + ':' + seconds;


}

/** Shows weekday. Switch statement takes weekday index and change it to letters, Måndag, tisdag etc.*/
function showWeekday(time) {
    let weekday = time.getDay();

    const weekDayContainer = document.getElementById('showDay');
    weekDayContainer.innerHTML = weekday;

    
    switch (weekday) {
        case 1:
            weekDayContainer.innerHTML = 'Måndag';
            break;
        case 2:
            weekDayContainer.innerHTML = 'Tisdag';
            break;
        case 3:
            weekDayContainer.innerHTML = 'Onsdag';
            break;
        case 4:
            weekDayContainer.innerHTML = 'Torsdag';
            break;
        case 5:
            weekDayContainer.innerHTML = 'Fredag';
            break;
        case 6:
            weekDayContainer.innerHTML = 'Lördag';
            break;
        case 7:
            weekDayContainer.innerHTML = 'Söndag';
            break;

    }


}

/** Shows date and month. Switch statement takes month index and change it to letters, januar, februari.. etc.*/
function showCurrentDate(time) {
    let today = time.getDate();
    let month = time.getMonth();


    let todaysDate = document.getElementById('showDate');
    todaysDate.innerHTML = today + ' ' + month;

    switch (month) {
        case 0:
            todaysDate.innerHTML = today + ' ' + 'Januari';
            break;
        case 1:
            todaysDate.innerHTML = today + ' ' + 'Februari';
            break;
        case 2:
            todaysDate.innerHTML = today + ' ' + 'Mars';
            break;
        case 3:
            todaysDate.innerHTML = today + ' ' + 'April';
            break;
        case 4:
            todaysDate.innerHTML = today + ' ' + 'Maj';
            break;
        case 5:
            todaysDate.innerHTML = today + ' ' + 'Juni';
            break;
        case 6:
            todaysDate.innerHTML = today + ' ' + 'Juli';
            break;
        case 7:
            todaysDate.innerHTML = today + ' ' + 'Augusti';
            break;
        case 8:
            todaysDate.innerHTML = today + ' ' + 'September';
            break;
        case 9:
            todaysDate.innerHTML = today + ' ' + 'Oktober';
            break;
        case 10:
            todaysDate.innerHTML = today + ' ' + 'November';
            break;
        case 11:
            todaysDate.innerHTML = today + ' ' + 'December';
            break;

    }
}