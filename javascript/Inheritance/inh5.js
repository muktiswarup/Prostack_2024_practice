class Account{
    acc_name;
    email;
    constructor(name,email){
        this.acc_name= name;
        this.email=email;
    }
}
class SavingAccount extends Account{
    acc_id;
    acc_balance=0;
    min_balance=500;
constructor(id,name,email,amount){
    super(name,email);
    this.acc_id=id;
    this.acc_balance=amount;
   
}
}
class currentAcount extends Account{
    acc_id;
    acc_balance=0;
    min_balance=5000;
    constructor(id,name,email,amount){
        super(name,email);
this.acc_id=id;
    this.acc_balance=amount;
    
    }

}

let obj1= new currentAcount(1,'Rahul Gandhi','rahul@gmail.com',50000);
let obj2= new SavingAccount(2,'Rahul Gandhi','Rhul@gmail.com',450000);
console.log(obj1);
console.log(obj2);