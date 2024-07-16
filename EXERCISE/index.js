/*Question no-1:// Write a program to check if a number is divisible by 7 or not?

const number= 189;

console.log(number%7===0 ? 'divisible by 7': 'not divisible by 7');

...........using function......................

const number= (number)=>{

    return number%7===0 ? 'divisible by 7': 'not divisible by 7'    // 
}
console.log(number(700));           */


/* Question no-2: Write a program to check if a number is multiple of 3 or not? 

const number= 158;
const remainder= number%3;

if(number%3===0){
    console.log(`The remainder of the number is ${remainder} so it is multiple of 3`);
}else {
    console.log(`The remainder of the number is ${remainder} so it is not multiple of 3`);
}
     */


/* Question no.-3 -Write a program to check if a number is positive or not? 

const number= -7;

console.log(number>=0 ? 'positive number' : 'Negative number');

*/  

/*Question no -4 Write a program to check if a number is 3-digit numbers or not 

const number= (num)=>{
    string=num.toString();      // convert it into first string 
    return( string.length===3 && !string.includes('.') ? 'its a 3 digit number': 'not a 3 digit number') 

}
console.log(number(454.5));

*/

/*  Question no 5:-   Write a program to print even or odd for a given number?  

const number= (num) =>{
    return num%2==0 ? 'even': 'odd';
}
console.log(number(454));
console.log(number(451));
console.log(number(455));

*/

/* Question no 6:-. Write a program to print the greatest number in given two numbers? 

const number= (a,b)=>{
    if(a>b){
        console.log(`${a} is greater than  ${b}`)
    }else{
        console.log(`${b} is greater than  ${a}`)
    }
}
number(45,65);
*/

/* Question no-7: Write a program to print the greatest number in given three numbers? 

const number= (a,b,c)=>{
    if(a>b && a>c){
        console.log(`${a} is greater than  ${b} and  ${c}`)
    }else if(b>a && b>c ) {
        console.log(`${b} is greater than  ${a} and  ${c}`)
    }else{
        console.log(`${c} is greater than  ${a} and  ${b}`)
    }
}
number(124,58,856);
number(145,456,47);
number(300,200,100);

*/

/* Question no-4 Write a program to print the given 3 numbers in ascending orders? */

const number= (a,b,c)=>{

}






