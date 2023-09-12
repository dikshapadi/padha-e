
import express from "express";

const router = express.Router();

router.get('/college/dashboard',(req,res) =>{
    res.render("college/dashboard");
});

router.get('/college/study',(req,res) =>{
    res.render("college/study");
});

router.get('/college/profile',(req,res) =>{
    res.render("college/profile");
});

export default router;