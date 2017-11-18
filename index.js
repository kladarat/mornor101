const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user',(req, res) =>{
    res.status(200).json({
        name: "Ladarat",
        Nickname: "Mangkabie"
    })
})

app.listen(3450, () => {
    console.log('Example app listening on port 3450!')
})