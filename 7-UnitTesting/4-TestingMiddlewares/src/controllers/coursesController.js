const courses = require('../models/coursesModel');

const getAllCourses = () => {
    // let response;
    // for (let i=0; i< 100; i++) {
    //     response = courses.find();
    // }
    
    // return response;
    return courses.find();
}

const getCourseById = (courseId) => {
    return courses.findById(courseId);
}

const createCourse = (course) => {
    course.id = courses.length + 1;
    return courses.create(course);
}

module.exports = {getAllCourses, getCourseById, createCourse}