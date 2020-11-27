/** Fetch all days from the API for year 2020 */
async function fetchAllDays() {
    try {
        const url = 'https://api.dryg.net/dagar/v2.1/2020';
        const result = await fetch(url);
        const data = await result.json();
        getDates(data);
    }
     catch (error) {
        console.error(error);
    }   
}
/**
 * Takes date from API and 
 * @param {Object} data 
 */
function getDates(data) {
    const weekdays = [];
    const holidays = [];
    for (const day of data.dagar) {
         if(day.veckodag){weekdays.push(day);}
         if(day.helgdag) {holidays.push(day);}
    }
    displayWeekdays(weekdays)
    displayHolidays(holidays);
}
/**
 * Assigns holidays text to the date of the holiday.
 * @param {Object} holidays 
 */
function displayHolidays(holidays) {
    const dates = document.getElementsByClassName('date');
    for (const day of holidays) {
        for (const date of dates) {
            if(day.datum === date.id) {
                let box = document.getElementById(date.id);
                let paragraph = document.createElement('p'); 
                paragraph.className = "helgdag";
                paragraph.innerText = day.helgdag;
                box.appendChild(paragraph); 
            }
        }
    }
}
/**
 * Assigns weekday text to all dates
 * @param {Object} weekdays
 */
function displayWeekdays(weekdays) {
    const dates = document.getElementsByClassName('date');
    for (const weekday of weekdays) {
        for (const date of dates) {
            if(weekday.datum === date.id) {
                let box = document.getElementById(date.id);
                let paragraph = document.createElement('p'); 
                paragraph.className = "veckodag";
                paragraph.innerText = weekday.veckodag;
                box.appendChild(paragraph); 
            }
        }
    }
}


