let hour=document.querySelector(".hour");
let minute=document.querySelector(".minute");
let second=document.querySelector(".Second");


function Digital(){
    let date = new Date();
    hour.innerText=date.getHours();
    minute.innerText=date.getMinutes();
    second.innerText=date.getSeconds();
    
    requestAnimationFrame(Digital)
}
requestAnimationFrame(Digital)
Digital();