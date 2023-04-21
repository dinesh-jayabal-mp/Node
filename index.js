const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    console.log(req.query)
    res.send("Hello World")
})

app.listen(8000, ()=>{
    console.log("App connected port 8000")
})