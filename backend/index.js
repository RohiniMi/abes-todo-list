import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Task from "./models/task.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.post("/task", async (req, res) => {    
    try {
        await Task.create(req.body);
        res.status(200).json({ "message": "Task has been created successfully" })
    } catch (error) {
        res.status(500).json({ "message": "Unable to add task" });
    }
})
app.get("/task", async (req, res) => {
    try {
        const data = await Task.find();
        console.log(data);
        
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ "data": data });
    }
})
app.put('/task/:id', async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const updatedTask = await Task.findByIdAndUpdate(id, updates);
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(updatedTask);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});
app.delete("/task/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedtask = await Task.findByIdAndDelete(id);
        if (!deletedtask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(deletedtask);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
})
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));