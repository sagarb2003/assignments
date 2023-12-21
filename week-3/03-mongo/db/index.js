const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://sagarb2003:Sagar1505@cluster0.ak0eh8h.mongodb.net/courseSelling"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  title: String,
  description: String,
  price: Number,
  imageLink: String,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);
// app.use(bodyParser.json());

module.exports = {
    Admin,
    User,
    Course,
};
// app.listen(3001);
