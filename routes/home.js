import express from "express";
const router = express.Router();


router.get("/", (req,res) => {
	res.render("home/main");
});

router.get('/home/contact', (req,res) => {
	res.render("home/contact");
});

router.get('/home/aboutus', (req,res) => {
	res.render("home/aboutus");
});

router.get('/home/mentor', (req,res) => {
	res.render("home/mentor");
});

router.get('/login',(req,res) =>{
    res.render("login/index");
});

router.get('/user_input',(req,res) =>{
    res.render("login/user_input");
});

export default router;