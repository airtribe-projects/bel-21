const express = require('express');

const app = express();

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

app.get('/api/v1/courses', (req, res) => {
    console.log(req.query);
    res.send(courses);
})


// app.get("/api/v1/courses/0", (req, res) => {
//     return res.send(courses[0]);
// })


// app.get("/api/v1/courses/1", (req, res) => {
//     return res.send(courses[1]);
// })

// app.get("/api/v1/courses/2", (req, res) => {
//     return res.send(courses[2]);
// })


app.get("/api/v1/courses/:courseId", (req, res) => {
    // console.log(req.params);
    const courseId = parseInt(req.params.courseId);
    return res.send(courses[courseId]);
})







app.listen(3000, () => {
    console.log("Server Running on port 3000")
})
