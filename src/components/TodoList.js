import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      time: new Date(),
      text: "Doctor Appointment",
      completed: true,
    },
    {
      id: 2,
      time: new Date(),
      text: "Meeting at School",
      completed: false,
    },
  ]);

  const [text, setText] = useState("");
  function addTask(text) {
    const newTask = {
      id: Date.now(),
      time: new Date(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  }
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }
  return (
    <div className="todo-list">
      <div className="top-add">
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <div>
          <button>Sort</button>
          <button onClick={() => addTask(text)}>Add</button>
        </div>
      </div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  );
}
export default TodoList;
