import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // Add a new task
  const addNewTask = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { id: uuidv4(), task: newTodo, isCompleted: false, isEditing: false }]);
    setNewTodo("");
  };

  // Delete a task
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle complete/incomplete
  const toggleComplete = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ));
  };

  // Start editing
  const startEdit = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: true } : todo
    ));
  };

  // Save edited task
  const saveEdit = (id, updatedTask) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, task: updatedTask, isEditing: false } : todo
    ));
  };

  // Cancel editing
  const cancelEdit = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: false } : todo
    ));
  };

  // Separate tasks
  const pendingTasks = todos.filter((todo) => !todo.isCompleted);
  const completedTasks = todos.filter((todo) => todo.isCompleted);

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>To-Do App</h2>
      <input
        placeholder="Add a task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addNewTask}>Add Task</button>

      <br /><br />
      <hr />
      <h4>Pending Tasks</h4>
      <hr />
      <ul>
        {pendingTasks.map((todo) => (
          <li key={todo.id}>
            {todo.isEditing ? (
              <>
                <input
                  type="text"
                  defaultValue={todo.task}
                  onChange={(e) => todo.task = e.target.value}
                />
                <button onClick={() => saveEdit(todo.id, todo.task)}>Save</button>
                <button onClick={() => cancelEdit(todo.id)}>Cancel</button>
              </>
            ) : (
              <>
                <span>{todo.task}</span>
                &nbsp;&nbsp;
                <button onClick={() => toggleComplete(todo.id)}>Mark Done</button>
                <button onClick={() => startEdit(todo.id)}>Edit</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>

      <hr />
      <h4>Completed Tasks</h4>
      <hr />
      <ul>
        {completedTasks.map((todo) => (
          <li key={todo.id}>
            <span style={{ textDecoration: "line-through" }}>{todo.task}</span>
            &nbsp;&nbsp;
            <button onClick={() => toggleComplete(todo.id)}>Mark Incomplete</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
