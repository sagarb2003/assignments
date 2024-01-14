const { Router } = require("express");
const express = require("express");
const app = express();
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
// app.use(express.json())

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    User.create({
        username:req.body.username,
        password:req.body.password,
    })
    res.json({
        msg:"user created successfully"
    })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find().then(courses =>{
        res.json({courses})
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const selectCourseId=req.params.courseId;
    Course.findOne({ "_id": selectCourseId }).then((selectCourse) => {
      if (selectCourse) {
        selectCourse.__v=1;
        selectCourse.save().then(()=>{
            res.json({selectCourse})
        })
      } else {
        res.status(404).json({ msg: "Course not found" });
      }
    });
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    Course.findOne({"__v":1}).then((selectCourse)=>{
        if(selectCourse){
            res.json({selectCourse})
        } 
        else{
            res.json({msg:"No courses purchased"})
        } 
    })
});

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router
>>>>>>> c428b9699bf630c5f3d6b445655d9717a893fd4c
