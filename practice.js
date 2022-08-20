var array = [ 1,2,3,4,5]

const under_five = x => x < 5

if(array.every(under_five)){
    console.log('All numbers less than 5')
}else{
    console.log('Some numbers greater than 5')
}