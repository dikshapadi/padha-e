import express from "express";

const router = express.Router();

router.get('/mentor/dashboard',(req,res) =>{
    res.render("mentor/dashboard");
});


export default router;