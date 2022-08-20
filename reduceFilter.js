
//Calculate sum using for loop _ Brute Force
var sum = 0
for(let i=0;i<marks.length;i++){
    console.log(marks[i])
    sum += marks[i]
}
console.log('Sum: '+sum) 

//Calculate sum using reduce filter map
let total = marks.reduce((sum,mark) => sum + mark,0)
console.log('Total; '+total)
