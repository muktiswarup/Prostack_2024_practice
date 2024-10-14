 //Reverse an array without using reverse method
 
 const reverseArray=(arr)=>{
    let start=0;
    let end=arr.length-1;
    while(start<end){
        [arr[start],arr[end]]=[arr[end],arr[start]];
        start++;
        end--;
    }
    return arr;
 }
 arr=['abhis','shyam']
 console.log(reverseArray(arr));