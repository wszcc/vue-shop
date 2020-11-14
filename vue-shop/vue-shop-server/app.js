const express=require('express')
const compression = require('compression')

const app=express()
app.use(compression())
app.use(express.static('./dist'))

app.listen(80,()=>{
    console.log('the server is runing!')
})