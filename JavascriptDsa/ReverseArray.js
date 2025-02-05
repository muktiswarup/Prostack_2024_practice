function ReverseArray(){
    let arr =[8,9,6,3,2,5,41]
    let start =0;
    let end = arr.length-1;
    let temp;
    while(start<end){
        temp=arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
        start++;
        end--;
    }
    console.log(arr) ;
}
ReverseArray();