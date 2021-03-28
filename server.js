const express = require('express')

const app=express()

const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const userroute=require('./routes/userroute')



app.use('/api/user',userroute)

app.get('/',function(req,res){
    res.send('this is backend')
})

app.listen(5000,function(){
    console.log('server started at port 5000')
})