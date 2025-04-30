import mongoose from "mongoose";
const TaskSchema = new mongoose.Schema({
    task:{type:String, required:true}
})
const Task = mongoose.model("MyTask",TaskSchema);
export default Task;