let arr= [5,1,8,3,9,4,2,-1,100,78,25];
function selectionSort(arr){
    for(let i =0;i<arr.length;i++){
        for (let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[i]){
                let temp = arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr ;
}
console.log(selectionSort(arr));