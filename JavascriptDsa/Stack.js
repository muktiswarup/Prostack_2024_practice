let arr=[];
let currentSize =arr.length ;
let max=5;

function display (){
    for(let i =0;i<arr.length;i++){
        console.log(arr[i])
    }
 }
 display ();

function push(newEle){
    if(currentSize<=max){

        arr[currentSize]=newEle;
        currentSize+=1;
    }else {
        console.warn("maxium pushed ")
    }
}

 
 push(45);
 push(5);
 push(78)
 display();

 function pop(){
    currentSize -=1;
   arr.length=currentSize;
 }
 pop();
 pop();
 display();


 

