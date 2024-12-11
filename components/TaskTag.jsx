import tasks from "../models/tasks";

function TaskTag({ task }) {

    if (tasks.state === 'completed') {
        return (
            <span
                key={tasks.id}
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
    } else if (tasks.state === 'in_progress') {
        return (
            <span
                key={tasks.id}
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
    } else if (tasks.state === 'backlog') {
        return (
            <span
                key={tasks.id}
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
                key={tasks.id}
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
}

export default TaskTag;