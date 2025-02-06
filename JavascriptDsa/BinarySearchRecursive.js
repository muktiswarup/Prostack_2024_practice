
function recursive(arr,element,start,end){
    if(start >end){
        return false
    }
    let mid = Math.floor(start+(end-start)/2);
    if(arr[mid]===element){
        return true;
    }
    if(arr[mid]>element){
       return  recursive(arr,element,start,end-1)
    }else{
       return  recursive(arr,element,start+1,end)
    }
    
    
}
let arr = [1,2,3,4,5,6]
let start =0;
let end = arr.length-1
console.log(recursive(arr,5,start,end))