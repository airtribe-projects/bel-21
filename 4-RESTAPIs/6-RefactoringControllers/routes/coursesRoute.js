const express = require('express');

const {getAllCourses, getCourseById, createCourse} = require('../controllers/coursesController');
const router = express.Router()

// getAllCourse = (req, res) => {
//     res.send(courses);
// }

// route.get('/', getAllCourse);


router.get('/', (req, res) => {
    console.log(req.query);    
    const allCoursesDetails = getAllCourses();
    res.send(allCoursesDetails);
})

// router.get("/:courseId",["Logger", "Logger2", "BusinessLogic", "ResponseFormatter"] (req, res, next) => {
//     const id = parseInt(req.params.courseId);
//     const course = getCourseById(id);
//     next(course);
// })



router.get("/:courseId", (req, res) => {
    const id = parseInt(req.params.courseId);
    const course = getCourseById(id);
    // next(course);
    return res.send(course);
})

router.post('/', (req, res) => {
    const course = req.body;
    console.log(course);
    const createdCourse = createACourse(course);
    res.send(course);
})

module.exports =  router;