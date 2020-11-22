window.addEventListener('load',main);

const toDosState = [{
    title: 'get',
    date: 12
}]

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
}