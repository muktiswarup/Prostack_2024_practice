new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName:'muktiswarup',email:'muktiswarup@gmail.com',password:'123456'}) // By passing object as an parameter
    },2000)
})
.then(function(user){
    console.log(user.userName)
})