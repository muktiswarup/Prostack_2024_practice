// Remove duplicate from an array

/* function duplicate(arr){
    const removeduplicate=[...new Set(arr)]
    return removeduplicate
}
console.log(duplicate([45,45,65,25,58,45])) */

//Return duplicate value from the array


const array=[15,25,65,35,85,45,25,85]
const duplica=array.filter((ele,index,arr)=>(
 arr.indexOf(ele) !==index
)
)
console.log(duplica)
