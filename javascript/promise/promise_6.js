const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({userName:'muktiswarup',email:'muktiswarup@gmail.com',password:'123456'})
        }else{
            reject('Error: Javascript went wrong')
        }
    },1000)
})
// async function getAllUsers(){
//    try{
//     const response=await fetch('https://jsonplaceholder.typicode.com/users');
//     // console.log(response)
//     const data= await response.json();
//     console.log(data);
//    }
//    catch(error){
//         console(error)
//    }
// }
// getAllUsers();
// then catch method..................//

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error);
})