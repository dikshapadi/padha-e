import express from "express";
const router = express.Router();

router.get("/secondary/dashboard", (req, res) => {
  res.render("secondary/dashboard");
});

router.get("/secondary/study", (req, res) => {
  res.render("secondary/study");
});

router.get("/secondary/mentorform", (req, res) => {
  res.render("secondary/mentorform");
});

router.get('/secondary/aid',(req,res) =>{
  res.render("secondary/aid");
});

router.get("/secondary/profile", (req, res) => {
  res.render("secondary/profile");
});

router.get("/secondary/quiz", (req, res) => {
  res.render("Quiz/quiz");
});

router.get("/quiz", (req, res) => {
  res.render("Quiz/quiz");
});

router.get("/home", (req,res) => {
	res.render("home/main");
});
export default router;
