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

router.get('/college/aid',(req,res) =>{
    res.render("college/aid");
  });

router.get('/college/profile',(req,res) =>{
    res.render("college/profile");
});
router.get("/college/quiz", (req, res) => {
    res.render("Quiz/quiz");
  });
  
  router.get("/quiz", (req, res) => {
    res.render("Quiz/quiz");
  });

  router.get("/home", (req,res) => {
	res.render("home/main");
});

router.get("/college/mentor", (req,res) => {
	res.render("college/mentor");
});

router.get("/college/image", (req,res) => {
	res.render("college/image");
});

router.get("/college/punc", (req,res) => {
	res.render("college/punc");
});

router.get("/college/road", (req,res) => {
	res.render("college/road");
});

export default router;