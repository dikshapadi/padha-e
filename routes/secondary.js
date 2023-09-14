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

export default router;
