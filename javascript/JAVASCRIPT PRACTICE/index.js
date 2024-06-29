// const div= document.getElementById('div');
// const explanation= document.createElement('p');
// explanation.textContent="Dog's are so adorable. I love to keep dog in my home";
// div.appendChild(explanation);

//2nd assignment
// let firstCompliment = document.getElementById('first-compliment');
// let secondCompliment =document.getElementById('second-compliment'); ;
// let thirdCompliment =document.getElementById('third-compliment'); ;
// firstCompliment.style.cssText = "color: tomato; font-weight: 700; text-decoration: line-through; text-transform: capitalize";
// secondCompliment.style.cssText = "color: gold; font-weight: 700; text-decoration: overline";
// thirdCompliment.style.cssText = "color: teal; font-weight: 700; text-transform: uppercase; text-decoration: underline";

// 3rd assignment

// let allDivs = Array.from(document.getElementsByTagName('div'));

// allDivs.forEach(divv => {
//   divv.style.width = "100px";
//   divv.innerText = "Look here";
//   divv.style.color="pink";
// });


// 4th assaignment

// let allSquares = Array.from(document.getElementsByTagName('div'));
// for (let square of allSquares) {
//   square.style.backgroundColor = "teal";
// }
// allSquares[7].style.backgroundColor = "olive";

// 5th assaignment

// const star= Array.from(document.getElementsByClassName('star'));
// const moon= document.getElementsByClassName('full-moon');
// star.forEach(star=>{
//   star.style.textShadow= '0px 0px 25px  cyan';
// });
// for(let fullmoon of moon){
//   fullmoon.style.textShadow="0px 0px 25px orange";
// }
// 6th assaignment
// let secureLinks = document.getElementsByClassName('external-link');
// for (let link of secureLinks) {
//   link.style.color = "green";
// }
// secureLinks[1].style.color = "tomato";

//7th assaignment

// let firstParagraph = document.querySelector('p');
// let secondParagraph = document.querySelector('.interesting-paragraph');
// let thirdParagraph = document.querySelector('#brutal-paragraph');
// firstParagraph.style.fontSize = "16px";
// secondParagraph.style.fontSize = "32px";
// thirdParagraph.style.fontSize = "24px";

// let inspirationConfirmation = document.querySelector('#brutal-paragraph>span');
// inspirationConfirmation.textContent = "does";
// inspirationConfirmation.style.color = "blue";

// 8th assaignment

const div=document.querySelector('div');
const clas=document.querySelector('.div-class');
const idd=document.querySelector('#div-id');
div.style.backgroundColor='darkOrange';
clas.style.backgroundColor='salmon';
idd.style.backgroundColor='thistle'