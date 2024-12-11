import tasks from "../models/tasks";

function TaskTag() {
    let tag = tasks.map((task) => {
        if (task.state === 'completed') {
            return (
                <span
                    key={task.id}
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
                    key={task.id}
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
                    key={task.id}
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
                    key={task.id}
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
    return <div>{tag}</div>;
}

export default TaskTag;