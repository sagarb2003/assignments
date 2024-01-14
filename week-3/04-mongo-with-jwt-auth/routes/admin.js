const { Router } = require("express");
const jwt = require("jsonwebtoken");
// const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const { v4: uuidv4 } = require("uuid");
const jwtPassword = "secret";

// Admin Routes
<<<<<<< HEAD
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

router.post("/signin", (req, res) => {
  Admin.findOne({ username: req.body.username }).then((user) => {
    if (user) {
      const token = jwt.sign(
        { username: req.body.username, password: req.body.password },
        jwtPassword
      );
      res.json({ token });
    } else {
      res.json({ msg: "user not found" });
    }
  });
});

router.post("/courses", (req, res) => {
  // Implement course creation logic
  const token = req.headers.authorization;
  try {
    const decode = jwt.verify(token, jwtPassword, { ignoreExpiration: false });
    Course.create({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      imageLink: req.body.imageLink,
    });
    res.json({
      msg: "course created successfully",
      courseId: uuidv4,
    });
  } catch (error) {
    res.json({ msg: "invalid token" });
  }
});

router.get("/courses", (req, res) => {
  const token = req.headers.authorization;
  console.log(token);
  try {
    const decode = jwt.verify(token, jwtPassword, { ignoreExpiration: false });
    // Assuming Course is your mongoose model for courses
    Course.find().then((courses) => {
      res.json({ courses });
    });
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
=======
router.post('/signup', (req, res) => {
    // Implement admin signup logic
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
>>>>>>> c428b9699bf630c5f3d6b445655d9717a893fd4c
});

module.exports = router;
