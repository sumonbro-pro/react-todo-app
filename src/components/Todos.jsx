import React from 'react';
import Todo from "./Todo.jsx";

const Todos = ({todos, onDeleteTodo}) => {
    return (<div className={`mt-5 mx-5`}>
        {todos.map((todo) => {
            return <Todo onDeleteTodo={onDeleteTodo} key={todo.id} todo={todo} />;
        })}
    </div>);
};

export default Todos;