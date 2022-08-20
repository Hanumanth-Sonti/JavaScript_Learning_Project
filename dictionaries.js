
var dict = {}
var str = 'aaabbbdabecece'

for(let i=0;i < str.length;i++){
    var count = 0
    var ch = str.charAt(i)
    for(let j=0;j<str.length;j++){
        if(ch == str.charAt(j)){
            count++
            dict[ch] = count
        }
    }
}
//console.log(dict)

var dict = {
    Name: "Eric",
    Age : 23,
    Job: "Freelancer",
    Skills : "JavaScript"
  };

  for(let key in dict){
        console.log(dict[key])
  }
