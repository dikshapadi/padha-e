const express = require("express");
const router = express.Router();

router.get('/college/dashboard',(req,res) =>{
    res.render("college/dashboard");
});

router.get('/college/profile',(req,res) =>{
    res.render("college/profile");
});

module.exports = router;