const express=require('express');
const router=express.Router();
router.route('/').get((req,res)=>{
    res.sendFile(__dirname+'/resto/index.html');
});
module.exports=router;