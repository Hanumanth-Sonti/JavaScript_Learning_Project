let fruits = ['apples','oranges','grapes','mangoes']
fruits.sort()
console.log(fruits)

//reverse order
console.log(fruits.reverse())

let scores = [11,3,15,6]
//let newscore = scores.sort()
//console.log(newscore)

scores.sort(function(a,b){
    return a-b
})
console.log(scores)


let scores1 = [111,33,125,6]

//sort in ascending order
scores1.sort((a,b) => a-b)
console.log('Ascending order: '+scores1)

//sort in descending order
scores1.sort((a,b) => b-a)
console.log('Descending Order: '+scores1)

