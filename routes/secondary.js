import express from "express";
const router = express.Router();

router.get('/secondary/dashboard',(req,res) =>{
    res.render("secondary/dashboard");
});


export default router;