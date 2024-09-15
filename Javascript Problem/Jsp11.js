// remove the repeated element all ocurence


const removefromarray= (arr,target)=>{
    return arr.filter(item=>item!==target)
}
const arr=[10,45,25,36,78,25,10,10]
const target=10
console.log(removefromarray(arr,target))