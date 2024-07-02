class Employee{
    constructor(){
        console.log('Constructor will execute automatically');
    }
    getDetails(){
        console.log('Normal method');
    }
}
let o1=new Employee();
o1.getDetails();
let o2=new Employee();