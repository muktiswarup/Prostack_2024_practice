// Check it even or odd

/* const checkevenodd=(num)=>{
    if(num%2==0){
        console.log(`${num} is a even number`)
    }else{
        console.log("This number is not a even number")
    }
}
checkevenodd(45);
checkevenodd(44)
 */

const checkevenodd= (num)=>{

   return  num%2==0?"Even":"Odd"
}

console.log(checkevenodd(5))
console.log(checkevenodd(4))