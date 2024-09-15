//0,1,1,2,3,5,8,13  nth term fibonanci

/* let number =10
let a=0;
let b=1
sum=0;
console.log(a);
console.log(b);
for(let i=1;i<=number;i++){
    sum=a+b;
    console.log(sum)
    a=b;
    b=sum;
}
console.log(sum) */

const fibonanci= (n)=>{
 if(n<=1){
    return n
 }
 else{
    return fibonanci(n-1)+fibonanci(n-2)
 }
}
console.log(fibonanci(8))