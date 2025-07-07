import "./App.css";
import { useState } from 'react'

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const addTask = () => {
    const task = 
    {
      id: tasks.length === 0 ? 0 : (tasks.length -1) + 1,
      name: input,
      completed: false,
    };
    setTasks([...tasks, task])
    setInput("")
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks)
  };
  
  return (
    <div className="App">
      <div>
        <input value={input} onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {tasks.map((task, key) => {
          return(
            <div key={task.id}>
              {task.completed === true ? <h1 className="task-completed">{task.name}</h1> : <h1>{task.name}</h1>}
              <button onClick={() => completeTask(task.id)}>Complete</button>
              <button className="button-red" onClick={() => removeTask(task.id)}>X</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
