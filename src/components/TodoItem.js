const TodoItem = ({ task, deleteTask, toggleCompleted }) => {
  function handleChange() {
    toggleCompleted(task.id);
  }

  return (
    <div className="todo-item">
      <div style={{ display: "flex" }}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleChange}
        />
        {task.completed ? (
          <p className="crossed-text">
            {task.text} - {task.time.toString()}
          </p>
        ) : (
          <p>
            {task.text} - {task.time.toString()}
          </p>
        )}
      </div>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
