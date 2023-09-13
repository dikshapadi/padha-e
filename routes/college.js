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

router.get('/login',(req,res) =>{
    res.render("login/index");
});

router.get('/secondary/dashboard',(req,res) =>{
    res.render("secondary/dashboard");
});

router.get('/user_input',(req,res) =>{
    res.render("login/user_input");
});

router.get('/primary_dashboard',(req,res) =>{
    res.render("primary/dashboard");
});
router.get('/secondary_dashboard',(req,res) =>{
    res.render("secondary/dashboard");
});
router.get('/college_dashboard',(req,res) =>{
    res.render("college/dashboard");
});




export default router;