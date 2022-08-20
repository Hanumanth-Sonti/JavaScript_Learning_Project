
//original functions
function sum(a,b){
    return a+b
}

function isPositive(number){
    return number >= 0
}

function randomNumber(){
    return Math.random
}

/* document.addEventListener('click',function(){
    console.log('Clicked')
}) */

//Modified to Arrow Functions

//First technique:
let sum2 = (a,b) => { 
    return a + b
}
console.log(sum2(20,30))

//Second technique:
let sum3 = (a,b) => a + b
console.log(sum3(50,30))

let isPositive2 = (number) => number >= 0

let random2 = () => Math.random

//document.addEventListener('click',() => console.log('Clicked'))