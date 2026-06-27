require('dotenv').config();

const express = require('express');
const {logger, logger2} = require('./middlewares/loggerMiddleware');
const coursesRoute = require('./routes/coursesRoute');

// Driver
const { MongoClient, ServerApiVersion } = require('mongodb');

const MONGODB_URI = process.env.MONGODB_URI;
const client = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


// Kafka, Redis, MongoDB
// bootstrap(StartKafka StartRedis, StartMongoDB)
// StartServer
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    app.listen(PORT, () => {
        console.log(`Server Running on port ${PORT}`);
    })
  } catch (err) {
    console.log(err);
  }
}
run()



const app = express();
app.use(express.json());
app.use(logger);
app.use(logger2);


app.get('/', (req, res) => {
    res.send('Hello World!');
})
// Mounting of routers
app.use("/api/v1/courses", coursesRoute);

const PORT = process.env.PORT || 8080;


