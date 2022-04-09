const express=require('express');
const router=express.Router();
router.route('/home').get((req,res)=>{
    res.sendFile(__dirname+'/resto/home.html');
});
router.route('/').get((req,res)=>{
    res.sendFile(__dirname+'/resto/index.html');
});
router.route('/login').get((req,res)=>{
    res.sendFile(__dirname+'/resto/login.html');
})
router.route('/register').get((req,res)=>{
    res.sendFile(__dirname+'/resto/register.html');
})
module.exports=router;