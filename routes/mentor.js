import express from "express";

const router = express.Router();

router.get("/mentor/dashboard", (req, res) => {
  res.render("mentor/dashboard");
});
router.get("/mentor/dashboardold", (req, res) => {
  res.render("mentor/dashboardold");
});
router.get("/mentor/Research", (req, res) => {
  res.render("mentor/Research");
});

export default router;
