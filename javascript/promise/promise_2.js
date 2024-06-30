new Promise(function(resolve,reject){               // without storing in a variable
    setTimeout(function(){
        console.log('Async task 2');
        resolve();
    },2000)
})
.then(function(){
    console.log('Async two is resolved');
})