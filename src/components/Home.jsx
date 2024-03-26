import React, {useState} from 'react';
import Todos from "./Todos.jsx";
import {v4 as uuidv4} from 'uuid';
import NewTodo from "./NewTodo.jsx";

const Home = () => {
    const [todos, setTodos] = useState([]);

    const handleNewTodo = (newTodo) => {
        setTodos([...todos, newTodo])
    }

    const handleDeleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id != id);
        setTodos(newTodos);
    }

    return (<div className={`mt-5`}>
            <h1 className="text-sky-500 text-3xl text-center font-bold uppercase">Todo App</h1>
            <NewTodo onNewTodo={handleNewTodo}/>
            <Todos onDeleteTodo={handleDeleteTodo} todos={todos}/>
        </div>);
};

export default Home;