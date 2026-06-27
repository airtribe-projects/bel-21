const {courses} = require('../models/coursesModel');

const getAllCourses = () => {
    return courses;
}

const getCourseById = (courseId) => {

    return courses[courseId];
}

const createCourse = (course) => {
    course.id = courses.length + 1;
    courses.push(course);
    return course;
}

module.exports = {getAllCourses, getCourseById, createCourse}