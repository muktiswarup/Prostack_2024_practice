let input=require('prompt-sync')();
let num = parseInt(input('enter a no.'))
if(num>=100 && num <=999){
    console.log('the no is a 3 digit no.')
}else {
    console.log ('the no is not a 3 digit no...')
}