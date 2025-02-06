function BinarySearch(arr,element){
    let start =0;
    let end=arr.length-1;
   
    let index= undefined
    while(start<=end){
        let mid = Math.floor( start + (end-start)/2);
        if(arr[mid]==element){
            index =mid
            return index
        }else if (arr[mid]>element){
            end= mid-1 ;
        }else{
            start =mid+1 ;
        }
    }
    return index ;
}
let arr = [1,2,3,4,5,6,7,8,9];
let element = 7
console.log(BinarySearch(arr,element));