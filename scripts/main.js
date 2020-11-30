window.addEventListener('load', main);

/**
 * Calls all functions on window load. 
 */
function main() {
    getDate()
    selectCalendarDate();
    eventListenersButtons();
    currentDate();
    startClock();
    addListIds();
    populateDates();
    fetchAllDays();
    daysInMonth();
}