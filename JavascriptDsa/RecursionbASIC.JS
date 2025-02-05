// Factorial 
function factorial(x){
    if(x==0 || x ==1){
        return 1;
    }
    return x * factorial(x-1);
}
console.log(factorial(5));
//Fibonanci
function Fibonanci(x){
    if(x <=1){
        return x ;
    }
    return Fibonanci(x-1) + Fibonanci(x-2);
}
let x =10;
console.log(Fibonanci(x));