/* class Account{
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
console.log(am2); */

class Account{
    acc_bal=0;
    min_bal=500;
    deposite_Amount(amount){
        this.acc_bal=this.acc_bal+amount
    }
    withdrawl(cash){
        this.acc_bal=this.acc_bal-cash
    }

}
let pg= new Account();
pg.deposite_Amount(15000);
let rg= new Account();
rg.deposite_Amount(50000);
console.log(pg);
console.log(rg);
pg.withdrawl(2000);
console.log(pg)