const express = require('express')

const app=express();

app.get('/',function(req,res){
    res.end('this is backend')
})

app.listen(5000,function(){
    console.log('server started at port 5000')
})