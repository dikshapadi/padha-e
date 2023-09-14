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
router.get("/college/quiz", (req, res) => {
    res.render("Quiz/quiz");
  });
  
  router.get("/quiz", (req, res) => {
    res.render("Quiz/quiz");
  });

  router.get("/home", (req,res) => {
	res.render("home/main");
});
export default router;