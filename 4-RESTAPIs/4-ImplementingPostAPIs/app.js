require('dotenv').config();

const express = require('express');

const app = express();
// In older code you may have body-parser
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
})

const courses = [
    {
        id: 1,
        name: 'node.js',
        rating: 4.5,
        description: "Learn node js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    },
    {
        id: 2,
        name: 'React.js',
        rating: 4.5,
        description: "Learn React js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    },
    {
        id: 3,
        name: 'node.js',
        rating: 4.5,
        description: "Learn node js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    }
];

const logger = (req, res, next) => {
    console.log(`[Logger 1]: ${req.method} request received on ${req.url}`);   
    next();
}


const logger2 = (req, res, next) => {
    console.log(`[Logger 2]: ${req.method} request received on ${req.url}`);   
    next();
}

app.use(logger);
app.use(logger2);

app.get('/api/v1/courses', (req, res) => {
    console.log(req.query);
    res.send(courses);
})

app.get("/api/v1/courses/:courseId", (req, res) => {
    const courseId = parseInt(req.params.courseId);
    return res.send(courses[courseId]);
})


app.post('/api/v1/courses', (req, res) => {
    const course = req.body;
    console.log(course);
    course.id = courses.length;
    courses.push(course);
    res.send(course);
})


const PORT = process.env.PORT || 8080;

// console.log(process.env);


app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
})
