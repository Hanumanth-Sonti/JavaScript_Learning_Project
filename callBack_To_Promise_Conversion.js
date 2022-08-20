const usetLeft = false
const userWatchingCatMeme = true

function promiseConversion(){
    return new Promise((resolve,reject) => {
        if(userLeft){
            reject({
                name: 'User Left',
                message : ':('
            })
        }else if(userWatchingCatMeme){
            reject({
                name: 'User watching Cat Meme',
                message: ':()' 
            })
        }else{
            resolve('User Watching')
        }
    })
}

promiseConversion().then((message) => {
    console.log('Success: '+message)
}).catch((error) => {
    console.log(error.message+' '+error.name)
})

