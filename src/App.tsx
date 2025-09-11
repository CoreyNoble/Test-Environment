import React, { useState } from 'react';
import './App.css';


// Create a checklist component where we would have an input and a submit button. 
// Whenever clicked on the submit button, the text of the input field would be added as a task on the list. 
// Below the input and the submit, there would be a list of items with a check mark that when clicked would strike through the task and mark it as completed.
 
// Step 1:
// Create an input field and submit button. Add validations for blank field.
 
// Step 2:
// Create a list of tasks entered by users and update it dynamically when users submit a new task.
// Display the list of tasks under the input and submit button.
 
// Step 3:
// Allow users to mark the task as done by strike through when clicked on the task.

function App() {
  const [todos, setTodos] = useState<{ id: string, completed: boolean, name: string }[]>([]);
  const [input, setInput] = useState('');
  const count = todos.length;

  const addTodo = () => {
    if (input.trim() === '') alert('Input must be populated');
    setTodos([
      ...todos,
      { id: `${count + 1}`, completed: false, name: input },
    ]);
  };

  const typeInput = (e) => {
    setInput(e.target.value);
  }

  const toggleTodo = (id: string) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    setInput('');
    setTodos(newTodos);
  }

  return (
    <div>
      <input type="text" placeholder="Add todo..." value={input} onChange={typeInput} />
      <button onClick={addTodo}>Submit</button>
      <ul>
        {todos.map((todo, idx) => (
          <>
            <span onClick={() => { toggleTodo(todo.id) }}>Check</span>{" "}
            <li key={idx} style={{ textDecoration: todo.completed ? 'underline' : ''}}>{todo.name}</li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default App;
