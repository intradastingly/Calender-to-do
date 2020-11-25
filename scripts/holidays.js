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
    console.log(holidays)
    for (const day of data.dagar) {
        
        if (day.helgdag) {
            holidays.push(day);
        }
    }
    displayHolidays(holidays);
    //console.log(holidays)
}

function displayHolidays(holidays) {
    const dates = document.getElementsByClassName('date');
    const paragraph = document.createElement('p');    
    for (const day of holidays) {
        for (const date of dates) {
            if(day.datum === date.id) {
                console.log(day.datum )
                paragraph.innerText = day.helgdag;
                date.appendChild(paragraph);
            }
        }
    }
}


/*function displayFromLocalStorage(){
    const storedList = JSON.parse(localStorage.getItem('todos'));
    const dates = document.getElementsByClassName('date');
    const display = document.getElementById('addItem');
    const li = document.createElement("li");
    for(const dateValue of storedList){
       for (const date of dates){
          if(date.id === dateValue.datum && date.classList.contains('active')){
             li.innerText = dateValue.text;
             console.log(date.id + ' id')
             console.log(dateValue.text + ' test ' + dateValue.datum) 
             console.log(li);
          }
       }
    } 
 }*/