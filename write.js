const async = require('async')
const request = require('request')
const fs = require('fs')

const item = []
const q = async.queue((task, callback) =>{
    fs.writeFile('mn' + task.number + '.txt', 'this is file from process: ' + task.number, (err) =>{
        if(err){
            console.log(err)
        }
        console.log("write file" + task.number + "complete")
        callback()
    })

},1)

q.drain = () =>{
    console.log("all item have processed")
}

for(i = 1; i <= 100; i++){
    item.push({number: i})
}

q.push(item, (err) =>{
    console.log('finished process item')
})