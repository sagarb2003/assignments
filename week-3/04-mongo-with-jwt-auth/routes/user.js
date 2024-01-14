const { Router } = require("express");
const jwt = require("jsonwebtoken");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwtPassword = "secret";
const jwtOptions = { expiresIn: "1h" }; 

// User Routes
<<<<<<< HEAD
router.post("/signup", (req, res) => {
  // Implement user signup logic
  User.create({
    username: req.body.username,
    password: req.body.password,
  });
  res.json({
    msg: "user created successfully",
  });
});

router.post("/signin", (req, res) => {
  User.findOne({ username: req.body.username }).then((user) => {
    if (user) {
      const token = jwt.sign(
        { username: req.body.username, password: req.body.password },
        jwtPassword,jwtOptions
      );
      res.json({token});
    } else {
      res.json({ msg: "user not found" });
    }
  });
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
  Course.find().then((courses) => {
    res.json({ courses });
  });
});

router.post("/courses/:courseId", (req, res) => {
  // Implement course purchase logic
  const token = req.headers.authorization;
  const selectCourseId = req.params.courseId;

  try {
    const decode = jwt.verify(token, jwtPassword);
    Course.findOne({ _id: selectCourseId })
      .then((selectCourse) => {
        if (selectCourse) {
          res.json({ selectCourse });
        } else {
          res.status(404).json({ msg: "Course not found" });
        }
      })
      .catch((error) => {
        // console.error("Error during course retrieval:", error);
        res.status(500).json({ msg: "Internal server error" });
      });
  } catch (error) {
    // console.error("Error during token verification:", error);
    res.status(401).json({ msg: "Invalid token" });
  }
});

// router.get("/purchasedCourses", userMiddleware, (req, res) => {
//   // Implement fetching purchased courses logic
//   Course.findOne({ __v: 1 }).then((selectCourse) => {
//     if (selectCourse) {
//       res.json({ selectCourse });
//     } else {
//       res.json({ msg: "No courses purchased" });
//     }
//   });
// });

module.exports = router;
=======
router.post('/signup', (req, res) => {
    // Implement user signup logic
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router
>>>>>>> c428b9699bf630c5f3d6b445655d9717a893fd4c
