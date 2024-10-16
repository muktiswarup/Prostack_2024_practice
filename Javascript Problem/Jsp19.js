// write a function if a number is palindrom or not 
//level madam

const checkPalindrom=(str)=>{
    str=str.toLowerCase();
   return str===str.split("").reverse().join("")
}
console.log(checkPalindrom("mada"))
