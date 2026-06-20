const express = require('express');
const {courses} = require('../models/coursesModel');

const router = express.Router()

router.get('/', (req, res) => {
    console.log(req.query);
    res.send(courses);
})

router.get("/:courseId", (req, res) => {
    const courseId = parseInt(req.params.courseId);
    return res.send(courses[courseId]);
})

router.post('/', (req, res) => {
    const course = req.body;
    console.log(course);
    course.id = courses.length;
    courses.push(course);
    res.send(course);
})

module.exports =  router;