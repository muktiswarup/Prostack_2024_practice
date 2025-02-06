let arr=[];
let currentSize=arr.length;
function push (newElement){
    arr[currentSize]=newElement;
    currentSize+=1;
}
function pop(){
    deletedItem=arr[currentSize-1];
    currentSize -=1;
    arr.length=currentSize;
    return deletedItem;
}
function reverseStr(data){
    for(let i =0;i<data.length;i++){
        push(data[i]);
    }
    for (let i=0;i<data.length;i++){
        data[i]=pop();
    }
    return data
}

let str = "Amit";
str = str.split('');
console.log(reverseStr(str).join(''))

