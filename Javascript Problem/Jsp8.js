// Factorial

let product= 1;

const factorial=(num)=>{
    for(i=1;i<=num;i++){
        product*=i;
    }
console.log(`The factorial of the number ${num} is ${product}`);
}

factorial(5);