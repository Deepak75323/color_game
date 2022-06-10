const express=require('express');
const router=require('express').Router();



router.get('/',(req,res)=>{
    res.render('colorgame.ejs');
});


module.exports=router;