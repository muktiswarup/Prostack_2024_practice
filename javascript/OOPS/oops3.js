class Account{
    accountBalance=0;
    depositeAmount(amount){
        this.accountBalance=this.accountBalance+amount;   // this refers to current object ..to access class member inside a class we use this keywords.....
    }
};

const am1=new Account();
const am2= new Account();

console.log(am1);
console.log(am2);

am1.depositeAmount(50000);
am2.depositeAmount(4510000);
console.log(am1);
console.log(am2);