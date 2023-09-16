import express from "express";

const router = express.Router();

router.get('/primary/dashboard',(req,res) =>{
    res.render("primary/dashboard");
});

router.get('/primary/profile',(req,res) =>{
  res.render("primary/profile");
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

  router.get('/primary/study',(req,res) =>{
    res.render("primary/study");
  });

  router.get('/primary/aid',(req,res) =>{
    res.render("primary/aid");
  });

  router.get('/primary/schedule',(req,res) =>{
    res.render("primary/schedule");
  });

  router.get("/home", (req,res) => {
    res.render("home/main");
  });

  router.get("/primary/mentor", (req,res) => {
    res.render("primary/mentor");
  });

export default router;