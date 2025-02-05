let money =100;
let apple =0;
function buyApple(x){
    console.log(x)
    if (x >0){
        buymore(x);
    }else {
        console.log("I dont have money ",apple);
    }
}
function buymore(x){
    buyApple(x-10);
    console.log(x)
}
buyApple(money)