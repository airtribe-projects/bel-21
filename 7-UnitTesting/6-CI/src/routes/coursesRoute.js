const express = require('express');

const {getAllCourses, getCourseById, createCourse} = require('../controllers/coursesController');
const router = express.Router()
const {isAuthorized} = require('../middlewares/authenticationMiddleware');
router.use(isAuthorized);

router.get('/',  (req, res) => {
    console.log(req.query);    
    const allCoursesDetails = getAllCourses();
    res.send(allCoursesDetails);
})

router.get("/:courseId", (req, res) => {
    const id = parseInt(req.params.courseId);
    const course = getCourseById(id);
    return res.send(course);
})

router.post('/',  (req, res) => {
    const course = req.body;
    console.log(course);
    const createdCourse = createCourse(course);
    res.send(course);
})

module.exports =  router;