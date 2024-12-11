import tasks from "../models/tasks";

function TaskTag() {
    let tag = tasks.forEach((task) => {
        if (task.state === 'completed') {
            return (
                <span
                    style={{
                        backgroundColor: 'green',
                        color: 'white',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        fontWeight: 'bold',
                    }}
                >
                    Completed
                </span>
            );
        } else if (task.state === 'in_progress') {
            return (
                <span
                    style={{
                        backgroundColor: 'blue',
                        color: 'white',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        fontWeight: 'bold',
                    }}
                >
                    In progress
                </span>
            );
        } else if (task.state === 'backlog') {
            return (
                <span
                    style={{
                        backgroundColor: 'red',
                        color: 'white',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        fontWeight: 'bold',
                    }}
                >
                    Backlog
                </span>
            );
        } else {
            return (
                <span
                    style={{
                        backgroundColor: 'grey',
                        color: 'white',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        fontWeight: 'bold',
                    }}
                >
                    Undefined State
                </span>
            );
        }
    })
    return tag;
}

export default TaskTag;