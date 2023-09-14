import express from "express";

const router = express.Router();

router.get('/primary/dashboard',(req,res) =>{
    res.render("primary/dashboard");
});

router.get("/primary/mentorform", (req, res) => {
  res.render("primary/mentorform");
});

router.get("/primary/quiz", (req, res) => {
    res.render("Quiz/quiz");
  });
  
  router.get("/quiz", (req, res) => {
    res.render("Quiz/quiz");
  });

export default router;