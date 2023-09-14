import express from "express";
const router = express.Router();

router.get("/secondary/dashboard", (req, res) => {
  res.render("secondary/dashboard");
});

router.get("/secondary/studymaterials", (req, res) => {
  res.render("secondary/studymaterials");
});

router.get("/secondary/mentorform", (req, res) => {
  res.render("secondary/mentorform");
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
