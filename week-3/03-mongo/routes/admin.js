const { Router } = require("express");
const express = require("express");
const app = express();
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
// app.use(express.json());
const { v4: uuidv4 } = require('uuid');

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  Admin.create({
    username: req.body.username,
    password: req.body.password,
  });
  res.json({
    msg: "Admin created successfully",
  });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  Course.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    imageLink: req.body.imageLink,
  });
  res.json({
    msg: "course created successfully",
    courseId:uuidv4,
  });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  Course.find().then((courses) => {
    res.json({ courses });
  });
});

module.exports = router;
