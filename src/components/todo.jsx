import { useState } from "react";
import "./todo.css"; 

export default function Todo() {
  const [newTask, setNewTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  function handleAddTask() {
    if (!newTask) {
      return alert("enter a task");
    }
    if (editIndex === -1) {
      setTodo([...todo, newTask]);
    } else {
      const updateTodo = [...todo];
      updateTodo[editIndex] = newTask;
      setTodo(updateTodo);
      setEditIndex(-1);
    }
    setNewTask("");
  }

  function handleDelete(index) {
    const deleteTodo = [...todo];
    deleteTodo.splice(index, 1);
    setTodo(deleteTodo);
  }

  function handleEdit(index) {
    setNewTask(todo[index]);
    setEditIndex(index);
  }

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo List</h1>
      <div className="todo-input-section">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={handleAddTask} className="add-btn">
          {editIndex === -1 ? "Add" : "Update"}
        </button>
      </div>

      <ul className="todo-list">
        {todo.map((task, index) => (
          <li key={index} className="todo-item">
            <span>{task}</span>
            <div className="btn-group">
              <button onClick={() => handleEdit(index)} className="edit-btn">
                Edit
              </button>
              <button onClick={() => handleDelete(index)} className="delete-btn">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
