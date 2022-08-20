
var marks = new Array(10,20,30,40,50,100) 

 //Get a section of elements
 let subArray = marks.slice(2,5)
 console.log(subArray)
 
//Append new elements to end of the array
marks.push(65)
console.log(marks)

//Remove last element from the array
marks.pop()
console.log(marks)

//Insert at the start of the array
marks.unshift(76)
console.log(marks)

//find index of element
console.log(marks.indexOf(76))

//Search for element in the array
console.log(marks.includes(100))
console.log(marks.includes(160))

 