import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "", id: uuidv4() }
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos([...todos, { task: newTodo, id: uuidv4() }]);
    setNewTodo("");
  };


  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };
  let deleteTodo = (id) => {
  setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id !== id));
};

  return (
    <div>
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br /><br />
      <button onClick={addNewTask}>Add Task</button>

      <br /><br /><br /><br />
      <hr />
<h4>Tasks Todo</h4>
<hr />
<ul>
  {
  todos.map((todo) => (
    <li key={todo.id}>
      <span>{todo.task}</span>
      &nbsp;&nbsp;&nbsp;
      <button onClick={() => deleteTodo(todo.id)}>delete</button>
      
    </li>
  ))
}

</ul>
    </div>
  );
}
