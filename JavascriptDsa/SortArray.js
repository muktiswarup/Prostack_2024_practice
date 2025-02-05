let arr = [1,5,9,4,8,7,6];

let i =0;
let temp;
for (let j=1;j<arr.length;j++){
    if(arr[i]>arr[j]){
        temp=arr[j]
        arr[j]=arr[i]
        arr[i]=temp
    }
    i++;
}
console.log(arr);