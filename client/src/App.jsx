import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Load todos
  const loadTodos = async () => {
    const res = await axios.get("http://localhost:5000/api/todos");
    setTodos(res.data);
  };

  // Add todo
  const addTodo = async () => {
    if (!input.trim()) return;

    const res = await axios.post("http://localhost:5000/api/todos", {
      text: input,
    });

    setTodos([...todos, res.data]);
    setInput("");
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    loadTodos();
  }, []);

  // 🎨 Vintage Styles
  const styles = {
    container: {
      padding: "40px",
      fontFamily: "'Georgia', serif",
      background: "#f7f2e7",
      minHeight: "100vh",
      color: "#4b3d32",
    },
    card: {
      maxWidth: "500px",
      margin: "0 auto",
      padding: "30px",
      background: "#fff8e8",
      borderRadius: "12px",
      border: "2px solid #d4c4a8",
      boxShadow: "4px 4px 0px #b39b72",
    },
    heading: {
      textAlign: "center",
      fontSize: "28px",
      marginBottom: "25px",
      color: "#3c2f23",
      letterSpacing: "1px",
    },
    inputRow: {
      display: "flex",
      gap: "10px",
      marginBottom: "20px",
    },
    input: {
      flex: 1,
      padding: "12px",
      borderRadius: "8px",
      border: "2px solid #c2b090",
      background: "#fbf6ec",
      outline: "none",
      fontSize: "16px",
      color: "#4b3d32",
    },
    button: {
      padding: "12px 18px",
      background: "#c9a36b",
      border: "none",
      borderRadius: "8px",
      fontWeight: "bold",
      color: "white",
      cursor: "pointer",
      boxShadow: "2px 2px 0px #8b6b3f",
    },
    buttonHover: {
      background: "#b38852",
    },
    listItem: {
      padding: "12px",
      background: "#fffdf8",
      borderRadius: "8px",
      border: "2px solid #e2d5c0",
      marginBottom: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "2px 2px 0px #c0a782",
    },
    deleteBtn: {
      background: "#e07a5f",
      padding: "6px 10px",
      border: "none",
      borderRadius: "6px",
      color: "white",
      cursor: "pointer",
      fontSize: "14px",
      boxShadow: "2px 2px 0px #a45b47",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>📝 Vintage Todo List</h2>

        <div style={styles.inputRow}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write a task..."
            style={styles.input}
          />
          <button style={styles.button} onClick={addTodo}>
            Add
          </button>
        </div>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {todos.map((todo) => (
            <li key={todo.id} style={styles.listItem}>
              {todo.text}
              <button
                style={styles.deleteBtn}
                onClick={() => deleteTodo(todo.id)}
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
