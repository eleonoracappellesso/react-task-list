import tasks from "../models/tasks";
import TaskTag from "./TaskTag";

function NotCompletedTask() {
    let tasksNotCompleted = [];
    tasksNotCompleted = tasks.filter((task) => {
        return task.state.includes("backlog") || task.state.includes("in_progress");
    }).map((task) => {
        return (
            <li key={task.id}>
                <h4>{task.title} <TaskTag /></h4>
                <p>Priority: {task.priority}</p>
                <p>Est time {task.estimatedTime}</p>
            </li>
        )
    });
    return tasksNotCompleted;
}

export default NotCompletedTask;