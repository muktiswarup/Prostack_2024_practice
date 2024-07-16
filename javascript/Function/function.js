// function world(){
//     console.log('Hello world');
// }
// world();

///////////////////////////////////////////////////////////////

// function drive(param){
//     console.log(param);
// }
// drive('anmul');

/////////////////////////////////////////////

// const tree= function(){
//     let arr= ['banana', 'piple', 'mango'];
//     for(i=0; i<arr.length; i++);
//     console.log(arr);
// }
// tree();

/*const user = {
    name: "",
    age: 20,
    voterIDNumber: "",
  };
  
  const displayValidationError = (invalidFieldName, additionalMessage) => {
    console.log(`The user ${invalidFieldName} is not valid. ${additionalMessage}`);
  }
  
  if (!user.name) {
    displayValidationError("name", "Please provide a valid name.");
  }
  
  if (user.age >= 18 && !user.voterIDNumber) {
    displayValidationError("Voter ID Number", "Voter ID Number is required for ages 18 and above.");
  }*/

    /* const displayValidationError = (invalidFieldName, additionalMessage = "") => {    // default parameter
  console.log(`The user ${invalidFieldName} is not valid. ${additionalMessage}`);


}

displayValidationError("name"); */ 

/* const calculateSum = (number1, number2, number3, number4) => {
  const sumOfNumbers = number1 + number2 + number3 + number4;
  return sumOfNumbers;      (return statement)
}

const totalMarks1 = calculateSum(81, 90, 72, 99);
console.log(totalMarks1);

const totalMarks2 = calculateSum(72, 84, 96, 100);
console.log(totalMarks2); */

/*function calculatePercentage(value,total){
    return (value/total)*100;
}

function checkPassOrFail(markObtained,outOf){
    const result= calculatePercentage(markObtained,outOf);
    if(result >=50){
        return "pass";
    }
        else{
            return "fail";
        }
    }
const res=checkPassOrFail(200,300);
console.log(res); */

/*const user1 = {
  name: "Sam Smith",
  isAdmin: true,
};

const user2 = {
  isAdmin: false,
};

const displayGreeting = user => {
  if (!user.name) return;  (guard clause)

  console.log(`Hello ${user.name}`);
};

displayGreeting(user1);

displayGreeting(user2); */

// let eligibleUsersCount = 0;
// const displayEligibility=(user)=>{
//     if(!user.age) return;
//     if(user.age<18){
//         console.log("You  are not eligible");
//         return;
//     }
//     console.log("You are eligible");
//     eligibleUsersCount++;

// }
// const user1 = {
//     name: "Oliver Smith",
//     age: 32,
//   };
  
//   const user2 = {
//     name: "Sam Smith",
//     age: 12,
//   };
//   displayEligibility(user1);
//   displayEligibility(user2);
//   console.log(eligibleUsersCount);










// const product = (firstNumber, secondNumber) => firstNumber * secondNumber;
// product(12, 6);






// const personFirstName = "Eve";
// const personLastName = "Smith";

// const getFullName = (firstName, lastName) => {
//   return firstName + " " + lastName;
// };

// const userInformation = {
//   personFirstName,
//   personLastName,
//   getFullName
// };

// console.log(
//   userInformation.getFullName(userInformation.personFirstName, userInformation.personLastName)
// );



// const teamMembers = ["Ajith", "Vaishnavi", "Nilopher", "Ritika", "Shristi", "Manjunath"];
// const newTeamMember = "Peter";
// const displayTotalCount=(arrayOfString,stringElementAdded)=>{
//     console.log(arrayOfString.push(stringElementAdded));
//     console.log(arrayOfString);
//     console.log(stringElementAdded);
// }
// displayTotalCount(teamMembers, newTeamMember);

const nor= ()=>{
  console.log(this)
}
nor();

