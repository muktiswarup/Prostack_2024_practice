// //1. write a javascript function that reverse the number ;
// // input= 123456  output= 654321

// const revs= (n)=>{          

//     n= n + " "; // convert the number into the string, we can use also tostring() method as well n= n.toString();

//     console.log( n.split("").reverse().join("")); //  The split() method in JavaScript is used to split a string into an array of substrings.
//     // The reverse method will reverse the string and the join method will join all the elements of an array into a string
// }
// revs(1234);

// //2. Reverse a string 
// const app = (str)=>{
//     return str.split("").reverse().join("");

// }
// console.log(app("Hello World"));


//3.check a word that either palindrom or not input= madam output= madam

const pdrm= (str)=>{

if((str.split(" ").reverse().join(""))=== str)
        console.log("it is a pallindrom");
    else{
        console.log(" it is not a pallindrom")
    }

}
pdrm("Mukti");