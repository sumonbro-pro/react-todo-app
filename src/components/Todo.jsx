import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from '@fortawesome/free-solid-svg-icons';

const Todo = (props) => {
    const {id, title, desc} = props.todo;

    const handleClick = () => {
        props.onDeleteTodo(id);
    }

    return (<div className={`p-3 bg-slate-100 mb-3 rounded-xl flex items-center justify-between`}>
            <div>
                <h2 className="text-xl">{title}</h2>
                <p className="text-sky-400">{desc}</p>
            </div>
            <div>
                <button onClick={handleClick}><FontAwesomeIcon className={`text-red-500`} size={`xl`} icon={faTrash} />
                </button>
            </div>
        </div>
    );
};

export default Todo;