import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const NewTodo = (props) => {
    const [todo, setTodo] = useState({id: uuidv4(), title: '', desc: ''});

    const {id, title, desc} = todo;

    const handleChange = (e) => {
        setTodo({...todo, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewTodo(todo);
        setTodo({title: '', desc: ''})
    }

    return (
        <div className={`container mx-5 w-6/12 mx-auto`}>
            <form>
                <div>
                    <label htmlFor="title">Title</label>
                    <input onChange={handleChange} name='title' className={`px-3 py-2 border rounded size-full`}
                           type="text" placeholder='Enter todo title' value={title}/>
                </div>
                <div>
                    <label htmlFor="desc">Description</label>
                    <textarea onChange={handleChange} name='desc' className={`px-3 py-2 border rounded size-full`}
                              type="text" placeholder='Enter todo description' value={desc}/>
                </div>
                <input disabled={(title === '' && desc === '')} onClick={handleSubmit}
                       className={`px-3 py-2 bg-sky-400 rounded text-center mx-auto text-slate-200 size-full mt-2 cursor-pointer`} type='submit' value='Add  Todo'/>
            </form>
        </div>
    );
};

export default NewTodo;