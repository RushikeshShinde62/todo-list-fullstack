const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// In-memory todo list
let todos = [];
let idCounter = 1;

// Get all todos
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// Add a new todo
app.post("/api/todos", (req, res) => {
  const { text } = req.body;
  const newTodo = {
    id: idCounter++,
    text,
  };

  todos.push(newTodo);
  res.json(newTodo);
});

// Delete a todo
app.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id != id);
  res.json({ message: "Todo deleted" });
});

app.get('/',(req,res)=>{
  res.send("hello from express")
})

app.listen(5000, () => console.log("Server running at localhost:5000"));
