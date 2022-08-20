
//Brute force approach
var evenScores = []
for(let i=0;i<scores.length;i++){
    if(scores[i]%2 == 0){
        evenScores.push(scores[i])
    }
} 
console.log(evenScores)

var scores = [11,12,17,16,23,80,9,13]
let newTotalScore = scores.filter(score => score % 2 ==0)
console.log(newTotalScore)