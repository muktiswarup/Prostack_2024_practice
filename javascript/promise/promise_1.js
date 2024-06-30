const promiseOne= new Promise(function(resolve,reject){         // with  storing in a variable....
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    },1000)
})
promiseOne.then(function(){
    console.log('promise consumed');
})
