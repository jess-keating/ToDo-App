import express from "express";
const router = express.Router();
import Task from "../models/Task.js";

/**
 * 3 main things to pay attention when using thunderClient
 * 1) Method: GET, POST, PUT, PATCH
 * 2) URL subpath: what's after the http://localhost:3000/
 * 3) Depending on the method you need to send a body
 * 
 * PARAMS: JUST NEED THE URL
 * BODY: YOU NEED TO SEND THE BODY
 */

//GET REQUEST http://localhost:3000/tasks?name=Max
//Retrieve the tasks from the database and send them to the frontend
router.get("/tasks", async (req, res) => {
    //req -> is the request so the payload you're receiving in case the user is sending you data
    //res -> the response you will send from your route
try {
    console.log("ROUTER GET TEST");
    const filter = {};
    if (req.query.completed === "true") filter.completed = true;
    if (req.query.completed === "false") filter.completed = false;
    let query = Task.find(filter);
    if (req.query.sort === "dueDate") query = query.sort({ dueDate: 1 });

    const tasks = await query;
    res.json({ message: "Tasks retrieved successfully", tasks: tasks});
    
} catch (error) {
    //if anything fails, please lets handle it by logging the error and sending a response to the frontend with the status code 500 (internal server error) and a message
    console.log(`router.get /tasks is failing: ${error}`);
    res.status(500).json({ message: "Failed to fetch tasks" });
}
});

//create tasks
router.post("/tasks/new", async (req, res) => {
try {
    const { title, dueDate } = req.body;
    console.log(`title: ${title}, dueDate: ${dueDate}`);
    // const title = req.body.title;
    // const dueDate = req.body.dueDate;
    const newTask = await Task.create({
    title: title,
    dueDate: dueDate,
    });

    res.status(201).json({ message: "Task created", task: newTask });
} catch (error) {
    console.log(`Failed to create tasks: ${error}`);
    res.status(500).json({ message: "Failed to create tasks" });
}
});


//PUT -> Override everything you have with your update
//PATCH -> you're just going to update the properties you want


//http://localhost:3000/tasks/complete/1
//the number 1 is the id of the task we want to mark as complete
router.patch("/tasks/complete/:id", async (req, res) => {
try {
    const taskID = req.params.id;
    const task = await Task.findByIdAndUpdate(
    taskID,
    { completed: true },
    { returnDocument: "after" },
    );

    if (!task) {
    return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task marked as complete", task: task });
} catch (error) {
    console.log(`Failed to complete the task: ${error}`);
    res.status(500).json({ message: "Failed to complete the task" });
}
});

router.patch("/tasks/incomplete/:id", async (req, res) => {
try {
    const taskID = req.params.id;
    const task = await Task.findByIdAndUpdate(
    taskID,
    { completed: false },
    { returnDocument: "after" },
    );

    if (!task) {
    return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task marked as incomplete", task: task });
} catch (error) {
    console.log(`Failed to set the task as incomplete: ${error}`);
    res.status(500).json({ message: "Failed to set the task as incomplete" });
}
});


//DELETE
//CREATE

router.delete("/tasks/delete/:id", async (req, res) => {
try {
    const taskID = req.params.id;
    const task = await Task.findByIdAndDelete(taskID);
    if (!task) {
    return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted", task: task });
} catch (error) {
    console.log(`Failed to delete the task: ${error}`);
    res.status(500).json({ message: "Failed to delete the task" });
}
});

router.put("/tasks/edit/:id", async (req, res) => {
try {
    const taskID = req.params.id;
    const { title, dueDate } = req.body;

    const updatedTask = {
    title: title,
    dueDate: dueDate,
    };
    const task = await Task.findByIdAndUpdate(taskID, updatedTask, {
    returnDocument: "after",
    });

    if (!task) {
    return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task updated", task: task });
} catch (error) {
    console.log(`Failed to update the task: ${error}`);
    res.status(500).json({ message: "Failed to update the task" });
}
});

export default router;
