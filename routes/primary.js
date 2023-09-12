
import express from "express";

const router = express.Router();

router.get('/primary/dashboard',(req,res) =>{
    res.render("primary/dashboard");
});


export default router;