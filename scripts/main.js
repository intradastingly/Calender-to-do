window.addEventListener('load',main);

function main() {
    getDate()
    selectCalendarDate();
    eventListenersButtons();
    currentDate();
    startClock();
    addListIds();
    setCalenderDatesIds();
    populateDates();
    fetchAllDays();
    daysInMonth();
}