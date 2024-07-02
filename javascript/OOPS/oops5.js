class Account{
    accId;
    accName;
    accBalance;
    constructor(id,name,balance){
        this.accId=id
        this.accName=name
        this.accBalance=balance

    }
    depositeAmount(amount){
        this.accBalance=this.accBalance+amount;

    }
}
let o1= new Account(101,'ashish',50000);
let o2=new Account(102,'sonia',450000);
console.log(o1);
console.log(o2)
o1.depositeAmount(45000);
console.log(o1)
