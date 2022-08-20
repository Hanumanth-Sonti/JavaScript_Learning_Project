//var - Global/Block Level 
//Var can be declared multiple times
//Var will throw error if printed outside block without declaring as global
var greet = 'Evening'
//var greet = 'Afternoon'

function welcome(){
    var greet = 'Morning'
    console.log(greet)
}
console.log(greet)

//let - Global/Block Level 
//let can't be declared multiple times
//let will throw error if printed outside the block without declaring at global level
let wish = 'Morning'
//let wish = 'evening'

function greetings(){
    let wish = 'Evening'
    console.log(wish)
}
console.log(wish)