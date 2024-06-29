let name=document.querySelector('#name');

const fun=()=>{
    name.innerHTML='CHANDRA SEKHAR JENA';
    console.log('chandra sekhar jena')
}
const change=setTimeout(fun,2000);
function click(){
    clearTimeout(change)
    console.log('Succesfully stopped');
}

const stop =document.querySelector('#stop').addEventListener('click',click);









