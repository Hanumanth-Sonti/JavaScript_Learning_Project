var scores = [12,14,16]
let mappedArray = scores.map(score => score * 3)
console.log(mappedArray)

let result = mappedArray.reduce((sum,val) => sum+val,0)
console.log(result)