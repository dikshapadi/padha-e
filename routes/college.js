import express from "express";
const router = express.Router();

router.get('/college/dashboard',(req,res) =>{
    res.render("college/dashboard");
});

router.get('/college/study',(req,res) =>{
    res.render("college/study");
});

router.get('/college/coding',(req,res) =>{
    res.render("college/coding");
});

router.get('/college/mentorform',(req,res) =>{
    res.render("college/mentorform");
});

router.get('/college/profile',(req,res) =>{
    res.render("college/profile");
});

export default router;