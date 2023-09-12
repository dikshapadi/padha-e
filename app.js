import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from "express";
import { config } from "dotenv";
import collegeRoutes from "./routes/college.js";
import primaryRoutes from "./routes/primary.js";
import path from 'path';

config({ path: "./config/config.env" });
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();


app.use(express.static(__dirname + '/assets'));
app.use('/config', express.static(path.join(__dirname, 'config')));
app.set("view engine", "ejs");



// Routes
app.use(collegeRoutes);
app.use(primaryRoutes);
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Sever running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`
  )
);
