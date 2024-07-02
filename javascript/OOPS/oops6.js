class Test{
    constructor(name){
        console.log(`${name} special method`)
    }
    getBalance(){
        console.log('normal method')
    }
}
let obj1= new Test('rahul');
obj1.getBalance();
