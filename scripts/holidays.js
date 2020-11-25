// Starta programmet
// Hämta dagar
// Filtrera ut helgdagar

/** Starts the program */
window.addEventListener('load',fetchAllDays);

/** Fetch all days from the API for year 2020 */
async function fetchAllDays() {
    try {
        const url = 'https://api.dryg.net/dagar/v2.1/2020';
        const result = await fetch(url);
        const data = await result.json();

        getHolidays(data);
    }
        
     catch (error) {
        console.error(error);
    }
    
}
/** Filter out holidays and push them to an array  */
function getHolidays (data) {
    
    const holidays = [];

    for (const day of data.dagar) {
        
        if (day.helgdag) {
            holidays.push(day);
             /*console.log(day.datum);*/
        }
        
        /*console.log(holidays);*/ 
    }

}



