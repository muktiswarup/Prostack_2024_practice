function searchArray(arr,target){
    let index=undefined;
    for (let i=0;i<arr.length;i++){
        if(arr[i]==target){
            index= i;
        }
    }
    return index ;
}
let arr = [45,85,69,25,78,21];
let target= 21;
let check = searchArray(arr,target);
console.log(`The targeted element is present at ${check}`)