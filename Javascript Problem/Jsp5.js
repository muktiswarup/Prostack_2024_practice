// Sum of all element 
/* 
let number =3;
let sum=0;
for(let i=1;i<=number;i++){
    sum= sum+i;
}
console.log(sum); */



/* let sum=0;
const sumofallnum=(num)=>{
    for(let i=1;i<=num;i++){
         sum=sum+i
    }
    return sum;
}
console.log(sumofallnum(5)) */





/* const arr= [50,25,85,65,36,75,48]
let sum=0;
for(let i=0;i<=6;i++){
    sum=sum+arr[i]
}
console.table(sum); */

const arr= [45,65,89,45]
let summ=0;
const arr1=()=>{
    for(i=0;i<arr.length;i++){
        summ=summ+ arr[i];
    }
    console.log(summ)
}
arr1();