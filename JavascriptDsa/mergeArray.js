/* arr1 =[1,5,6,8,9];
arr2=[7,2,9,6,3];
arr3= [...arr1,...arr2];
console.log(arr3); */


//Merging two array 
function mergeArray(arr1,arr2){
    let arr3 =[];
    for (let i=0;i<arr1.length;i++){
        arr3[i]=arr1[i];
    }
    for (let i=0;i<arr2.length;i++){
        arr3[arr1.length+i]=arr2[i];
    }
    return arr3;
}
let arr1=[1,2,3,4,5,6];
let arr2= [7,8,9];
let check=mergeArray(arr1,arr2);
console.log(typeof(check))
console.log(`The merged array is ${check}`)