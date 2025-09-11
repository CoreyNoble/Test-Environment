import React, { useState, useEffect } from 'react';
import './Test.scss';

function Test() {
    const [todos, setTodos] = useState<{ text: string; completed: boolean }[]>([]);
    const [input, setInput] = useState('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        console.log('[todos]: ', todos);
    }, [todos]);

    const addTodo = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (input.trim() === '') {
            setError('Todo cannot be empty');
        };
        setTodos([...todos, { text: input.trim(), completed: false }]);
        setInput('');
        setError(null);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value && error) {
            setError(null);
        }
        setInput(e.target.value);
    }

    const toggleTodo = (idx: number) => {
        setTodos(todos =>
            todos.map((todo, i) =>
                i === idx ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <div>
            <input type="text" placeholder='Add todo...' value={input} onChange={handleInputChange} />
            {error && <p className='error'>{error}</p>}
            <button onClick={addTodo}>Submit</button>
            <ul>
                {todos.map((todo, idx) => (
                    <li key={idx} onClick={() => { toggleTodo(idx) }} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Test;