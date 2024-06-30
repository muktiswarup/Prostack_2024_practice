new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({userName:'muktiswarup',email:'muktiswarup@gmail.com',password:'123456'})
        }else{
            reject('error:Something went wrong');
        }
    },1000)
})
.then(function(user){
    console.log(user);
    return user.userName
})
.then(function(userName){
    console.log(userName)
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log('either it resolved or rejected')
})