import type { Task } from "../types";

type TaskListProps = {
    tasks: Task[];
};

function TaskList( {tasks}: TaskListProps ) {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    {task.name}
                </li>
            ))}
        </ul>
    );
}

export default TaskList;