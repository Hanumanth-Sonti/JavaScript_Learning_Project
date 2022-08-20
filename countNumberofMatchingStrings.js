let strValue = 'Tuesday is Funday and then comes Friday and Saturday'
let count = 0
let index = strValue.indexOf('day')
while(index != -1){
    count++
    index = strValue.indexOf('day',index+1)
}
console.log(count)