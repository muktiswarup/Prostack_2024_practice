const evenArray= [2,4,6];
const oddElement=(number)=>{
  return number+1;
}
const oddArray=evenArray.map(abc=>oddElement(abc));
console.log(oddArray);


const evenNumbers = [2, 4, 6];
const oddNumbers = evenNumbers.map((number) => number + 1); //using anonymous function
console.log(oddNumbers);