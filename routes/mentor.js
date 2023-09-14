import express from "express";

const router = express.Router();

router.get("/mentor/dashboard", (req, res) => {
  res.render("mentor/dashboard");
});
router.get("/mentor/dashboardold", (req, res) => {
  res.render("mentor/dashboardold");
});

export default router;
