const start=document.querySelector('#START');
const stop=document.querySelector('#STOP');

const randomColor=()=>{
    let hex='0123456789ABCDEF';
    let color='#';
    for(i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}

let intervalId;
const startChangingcolor=()=>{
   intervalId= setInterval(changeBgColor,1000)
 
}

function changeBgColor(){
document.body.style.backgroundColor= randomColor();
console.log('color changed');
}
function stopChangeColor(){
    clearInterval(intervalId);
    console.log('clor change stopped')
}
start.addEventListener('click',changeBgColor);
stop.addEventListener('click',stopChangeColor);

