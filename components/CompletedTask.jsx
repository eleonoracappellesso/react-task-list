import tasks from "../models/tasks";
import TaskTag from "./TaskTag";

function CompletedTask() {
    let tasksCompleted = [];
    tasksCompleted = tasks.filter((task) => {
        return task.state.includes("completed");
    }).map((task) => {
        return (
            <li key={task.id}>
                <h4>{task.title} <TaskTag task={task} /></h4>
                <p>Priority: {task.priority}</p>
                <p>Est time {task.estimatedTime}</p>
            </li>
        )
    });
    return tasksCompleted;
}

export default CompletedTask;
