const express = require('express');
const dotenv = require('dotenv');
const collegeRoutes = require("./routes/college.js");

dotenv.config({path: './config/config.env'})
const app = express()
app.use("/assets", express.static(__dirname + "/assets"));
app.set("view engine", "ejs");
// Routes
app.use(collegeRoutes);

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Sever running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`))