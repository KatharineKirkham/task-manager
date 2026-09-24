import {useState} from "react"

type TaskFormProps = {
    onAddTask: (name: string) => void;
}

function TaskForm({onAddTask}: TaskFormProps) {
    const[name, setName] = useState("");
    
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        if (name.trim() === ""){
            return;
        }

        onAddTask(name);

        setName("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={event => setName(event.target.value)}
                placeholder="Enter a task"
            />
            <button type="submit">
                Add Task
                </button>
        </form>
    );
}

export default TaskForm;