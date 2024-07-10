// print all the even no of the array...

let numbers= [10,41,24,56,55,58,75,86,89];
// for(num of numbers){

//     if(num%2==0){
//         console.log(num)         (using for of loop)
//     }
// }  

//...................................................

// for (let i=0;i<=numbers.length-1;i++){
//     if(numbers[i]%2===0){                       // using for loop
//         console.log(numbers[i]);
//     }
// }



//....................................................
let i=0;
while(i<=numbers.length-1){
        if(numbers[i]%2===0){
            console.log(numbers[i]);
        }
        i++;
   
}
