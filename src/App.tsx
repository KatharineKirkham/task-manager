import {useState} from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import type { Task } from "./types";
import './App.css'



function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  
  function addTask(name:string) {
    const newTask: Task = {
      id: Date.now(),
      name: name,
      completed: false
    };

    setTasks(previousTasks => [
      ...previousTasks,
      newTask
    ]);
  }

  return (
    <>
      <Header />
      <TaskForm onAddTask={addTask}/>
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
