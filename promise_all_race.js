const recordVideoOne = new Promise((resolve,reject) => {
    resolve('Video 1 Resolved')
})

const recordVideoTwo = new Promise((resolve,reject) => {
    resolve('Video 2 Resolved')
})

const recordVideoThree = new Promise((resolve,reject) => {
    resolve('Video 3 Resolved')
})


//Using Promise All, waits until all promises are resolved
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages)
} )

//Using Promise Race - After one of the conditions pass, Promise gets resolved
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message)
})

