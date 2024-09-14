//Reverse the string;
const str= "Hello World";

const reverseString= (str)=>{
let reversed= str.split("").reverse().join("");
return reversed;
}

console.log(reverseString(str));