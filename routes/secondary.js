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

router.get("/login", (req, res) => {
  res.render("login/index");
});

router.get("/user_input", (req, res) => {
  res.render("login/user_input");
});

router.get("/primary_dashboard", (req, res) => {
  res.render("primary/dashboard");
});
router.get("/secondary_dashboard", (req, res) => {
  res.render("secondary/dashboard");
});
router.get("/college_dashboard", (req, res) => {
  res.render("college/dashboard");
});

export default router;
