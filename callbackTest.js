const userLeft = false
const userWatchingMeme = true
const userWatching = true

function testCallBack(callBack,errorCallBack){
    if(userLeft){
        errorCallBack({
            name: 'userLeft',
            message:':('
        })
    }else if(userWatchingMeme){
        errorCallBack({
            name: 'userWatchingMeme',
            message:':()'
        })
    }else{
        callBack({
            name: 'userWatching',
            message: ':)'
        })
    }
}


testCallBack((message) => {
    console.log('Success '+message)
}, (error) => {
    console.log('Failure '+error)
}
)
