//Leap year 

const leapYear=(num)=>{
    if((num%4==0 && num%100 !==0) || num%400==0){
        return "Its a leap year"
    }
    else{
        return "It's not a leap year."
    }
}
console.log(leapYear(1525));
console.log(leapYear(4000));
console.log(leapYear(2024));