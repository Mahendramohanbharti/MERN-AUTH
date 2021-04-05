const express=require('express')
var app=express()

const router=express.Router()
const mongoose=require('mongoose')


mongoose.connect('mongodb://localhost:27017/mernauth',{useNewUrlParser:true,useUnifiedTopology:true},function(err){
    if(err){
        console.log(err);
    }else{
        console.log('MongoDB connection Successfull');
    }
})
var userModel=mongoose.model('users',{name:String,username:String,password:String})

router.post('/registeruser',function(req,res){

    

    var newuser=new userModel({name:req.body.name,username:req.body.username,password:req.body.password})

    newuser.save(function(err){
        if(err){
            res.send('something went wrong');
        }else{
                res.send('registration successful');
        }
    })

})

module.exports=router