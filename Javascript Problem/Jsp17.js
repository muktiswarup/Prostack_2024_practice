//find the maximum and minimum of an array
const maxmin=(arr)=>{
    const maximum=Math.max(...arr);
    const minimum=Math.min(...arr)
    const maxmin={max:maximum,min:minimum}
    return maxmin
}
const arr=[45,25,36,85,98,32,45]
console.log(maxmin(arr))


