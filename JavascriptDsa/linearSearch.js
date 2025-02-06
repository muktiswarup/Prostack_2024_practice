function linearsearch(arr,item){
    let index =undefined;
    for(let i =0;i<arr.length;i++){
        if(arr[i]==item){
            index =i;
        }
    }
    return index ;
    
}
let arr = [1,2,3,4,5,6]
    let ele= 7;
    console.log(linearsearch(arr,ele))