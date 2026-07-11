require('dotenv').config();

const express = require('express');
const {logger, logger2} = require('./middlewares/loggerMiddleware');
const coursesRoute = require('./routes/coursesRoute');
const usersRoute = require('./routes/usersRoute');

// Driver
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;



// // Kafka, Redis, MongoDB
// // bootstrap(StartKafka StartRedis, StartMongoDB)
// // StartServer
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } catch (err) {
//     console.log(err);
//   }
// }
// run()



const app = express();
app.use(express.json());
app.use(logger);
app.use(logger2);

app.get('/', (req, res) => {
    res.send('Hello World!');
})
// Mounting of routers
app.use("/api/v1/courses", coursesRoute);

app.use("/api/v1/users", usersRoute);

const PORT = process.env.PORT || 8080;


mongoose.connect(MONGODB_URI).then(() => {
    console.log("Mongoose connected")
    app.listen(PORT, () => {
        console.log(`Server Running on port ${PORT}`);
    })
})

