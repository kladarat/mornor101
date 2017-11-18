const async = require('async')
const request = require('request')
const fs = require('fs')

const item = []
const q = async.queue((task, callback) =>{
    request.get('http://apptitude.co.th')
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