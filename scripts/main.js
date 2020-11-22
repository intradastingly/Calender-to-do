window.addEventListener('load',main);



const toDosStateAlternative = {
   '2020-11-01': ['get', '']
}


//paragraph.innerHTML = todo.title; 
function main() {
    selectCalendarDate();
    eventListenersButtons();
    currentDate();
    startClock();
    addListIds();
    addListToCalendarDate();
    setCalenderDatesIds();
}