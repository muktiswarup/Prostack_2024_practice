/*let abc=10;
console.log(String(abc));
const numberOfPeople = 15;                      (String method to convert number)
console.log(String(numberOfPeople));*/ 



let abc = "10";
console.log(Number(abc));                                   // number method to convert string to number

let emptyString = "";
emptyString = Number(emptyString);                  // empty string converted into 0
console.log(emptyString);


let invalidNumberString = "2abc";
invalidNumberString = Number(invalidNumberString)           // invalid string will get nan as out put
console.log(invalidNumberString);

let booleanTrue = true;
booleanTrue = Number(booleanTrue);                                  // true will give 1 as output
console.log(booleanTrue);

let booleanFalse = false;
booleanFalse = Number(booleanFalse);                                // false will give 0 ass output
console.log(booleanFalse);


console.log(Number(null));                      //0
console.log(Number(undefined));                 //NAN



/*const greeting = "Good Morning!";
console.log(greeting, isNaN(greeting));

const string = "Hello!";
console.log(string, isNaN(string));                      (isNaN() method checks whether a value is NaN when converted to number.)                 

console.log(`"2"`, isNaN("2"));

console.log(`false`, isNaN(false));

console.log(`0`, isNaN(0));

console.log(`""`, isNaN(""));*/