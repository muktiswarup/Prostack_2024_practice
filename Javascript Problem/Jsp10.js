const arr1= [1,2,3,4,5,6]

const doblearr1=()=>{
    return arr1.map(n=>n=n*2)      // Map HIgh Order Function
}
const arr2=doblearr1()
console.log(arr1)
console.log(arr2)


const filterwitheven=()=>{
    return arr1.filter(n=>n%2===0)       // Filter HIgh Order Function
}
console.log(filterwitheven());


const filterodd=()=>{
   return  arr1.filter(n=>n%2!==0)     //  Filter HIgh Order Function
}
console.log(filterodd());


const maximumvalue=()=>{
    return arr1.reduce((max,current)=>current>max?current:max)
}
console.log(maximumvalue())
