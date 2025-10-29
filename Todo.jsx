import { useState } from "react";

export default function Todo() {
    const [newTask, setNewTask] = useState("");
    const [todo, setTodo] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);

    function handleAddTask() {
        if (!newTask) {
            return alert("enter a task")
        }
        if (editIndex === -1) {
            setTodo([...todo, newTask])
        } else {
            const updateTodo = [...todo]
            updateTodo[editIndex] = newTask
            setTodo(updateTodo)
            setEditIndex(-1)
        }
        setNewTask("")
    }
    function handleDelete(index) {
        const deleteTodo = [...todo]
        deleteTodo.splice(index, 1)
        setTodo(deleteTodo)
    }
    function handleEdit(index) {
        setNewTask([todo[index]])
        setEditIndex(index)

    }

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                minHeight: "100vh",
                backgroundColor: "#f5f0ff",
                fontFamily: "Poppins, sans-serif",
            }}
        >
            <div
                style={{
                    backgroundColor: "#fff",
                    padding: "30px",
                    borderRadius: "15px",
                    boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
                    width: "350px",
                    textAlign: "center",
                }}
            >
                <h1 style={{ color: "#6a0dad", marginBottom: "20px" }}>📝 Todo App</h1>

                <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Enter task..."
                        style={{
                            flex: 1,
                            padding: "10px",
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                            outline: "none",
                        }}
                    />
                    <button
                        onClick={handleAddTask}
                        style={{
                            padding: "10px 15px",
                            backgroundColor: "#6a0dad",
                            color: "white",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            fontWeight: "bold",
                        }}
                    >
                        {editIndex === -1 ? "Add" : "Update"}
                    </button>
                </div>

                <ul
                    style={{
                        listStyleType: "none",
                        padding: 0,
                        margin: 0,
                        maxHeight: "250px",
                        overflowY: "auto",
                    }}
                >
                    {todo.map((task, index) => (
                        <li
                            key={index}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "10px",
                                marginBottom: "10px",
                                backgroundColor: "#f9f5ff",
                                borderRadius: "8px",
                                border: "1px solid #ddd",
                            }}
                        >
                            <span style={{ color: "#333", fontWeight: "500" }}>{task}</span>
                            <div style={{ display: "flex", gap: "8px" }}>
                                <button
                                    onClick={() => handleEdit(index)}
                                    style={{
                                        backgroundColor: "#9370db",
                                        color: "white",
                                        border: "none",
                                        padding: "6px 10px",
                                        borderRadius: "6px",
                                        cursor: "pointer",
                                    }}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(index)}
                                    style={{
                                        backgroundColor: "#d9534f",
                                        color: "white",
                                        border: "none",
                                        padding: "6px 10px",
                                        borderRadius: "6px",
                                        cursor: "pointer",
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
