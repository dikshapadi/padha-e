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


export default router;