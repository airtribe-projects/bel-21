require('dotenv').config();

const express = require('express');
const {logger, logger2} = require('./middlewares/loggerMiddleware');
const coursesRoute = require('./routes/coursesRoute');

const app = express();
app.use(express.json());
app.use(logger);
app.use(logger2);


app.get('/', (req, res) => {
    res.send('Hello World!');
})
// Mounting of routers
app.use("/api/v1/courses", coursesRoute);

// app.use("/api/v2/courses", coursesRouteV2);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
})
