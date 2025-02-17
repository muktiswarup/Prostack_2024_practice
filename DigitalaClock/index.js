const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const second= document.querySelector(".second")
const ampm = document.querySelector(".ampm");
setInterval(()=>{
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampmm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    hour.innerHTML = (hours < 10 ? "0" : "") + hours;
    minute.innerHTML = (minutes < 10 ? "0" : "") + minutes;
    second.innerHTML = (seconds < 10 ? "0" : "") + seconds;
    ampm.innerHTML = ampmm; // Update the period element with AM/PM
},1000)

