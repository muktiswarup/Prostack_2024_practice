
/*Q1.  Write a program to print 1 to 10 numbers using a while loop 
let i=1;
while(i<=10){
    console.log(i);
    i=i+1
} */
//..................................................................
/*Q2. Write a program to print 10 to 1 number using a while loop 
let i=10;
while(i>=1){
    console.log(i);
    i=i-1
} */
//....................................................................
/* Q3.Write a program to print 5 to 15 numbers using while Loop 
let i=5;
while(i<=15){
    console.log(i);
    i++;
}*/
//......................................................................
/*Q4. Write a program to print 1 to 10 even numbers using a while loop 

let i=1;
while(i<=20){
   if(i%2===0){
    console.log(i)
   }
   i++
}*/
//.......................................................................
/* Q5. Write a program to print a multiplication table of 6 using a while loop.
let i=1;
while(i<=10){
    console.log(6*i);
    i++
} */
//.........................................................................
/* Q6.Write a program Factors of 24 using while loop
(Factors of 24 are 1, ,3, 4, 6, 12, 24)
const factor=(num)=>{
    let arr=[];
    for(let i=1; i<=24;i++){
        if(num%i===0){
            arr.push(i)
        }
    }
    return (arr);
}
console.log(factor(24))
*/
//...........................................................................
/* Q7.Write a program to print reverse of digits of numbers 
const reverse=(num)=>{
    let rev=parseInt(num.toString().split('').reverse().join(''));
    console.log(rev);
}
reverse(1524);
reverse(1457);
reverse(547258);
reverse(69854);*/
//...........................................................................
/* Q7.Write a program to print reverse of String 

const reverse= (string)=>{
const reversed= string.split('').reverse();
return reversed
}
console.log(reverse('nji'))*/






