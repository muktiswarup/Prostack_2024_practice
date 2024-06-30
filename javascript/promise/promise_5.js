const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({userName:'muktiswarup',email:'muktiswarup@gmail.com',password:'123456'})
        }else{
            reject('Error: Javascript went wrong')
        }
    },1000)
})
async function consumePromiseFive(){
    try{
        const response=await promiseFive;
    console.log(response)
    }
    catch(error){
        console.log(error)
    }
}
consumePromiseFive();