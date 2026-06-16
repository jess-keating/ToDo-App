import "dotenv/config";
//ESModule
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import taskRoutes from "./routes/tasks.js";
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
//use the taskRouter for all routes starting with "/"
//http://localhost:3000/
app.use("/", taskRoutes);


//the below that has been commented out is the code that was in index_express.js, which is now index.js. I have moved the routes to a separate file, which is tasks.js, and imported it here. This way, we can keep our code organized and modular.
// //http://localhost:3000/
// app.get("/", (req, res) => {
//   console.log("Hurray we're at GET method");
//   res.send("Hello World!");
// });

// //http://localhost:3000/create/task
// app.post("/create/task", (req, res) => {
//   res.send("Hello World!");
// });

// app.post("/create/potato", (req, res) => {
//   res.send("Hello World!");
// });

//Connect to MongoDB
(async () => {
  try {
    //try to connect to the database
    await mongoose.connect(process.env.MONGO_URI, { autoIndex: false });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(`Error connecting to database: ${error}`);
  }
})();

app.listen(port, () => {
  console.log(`${process.env.NAME} app started`);
  console.log(`Listening on port ${port}`);
});


// run with `node index.js`

//Running an APP
//IP -> IP address is the address to your app
//IP(Street(name))
//PORT -> which port is your app listening
//PORT(House(number))
