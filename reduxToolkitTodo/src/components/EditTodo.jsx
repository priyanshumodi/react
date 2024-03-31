import React, { useState } from "react";
import {useDispatch,useSelector} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'
function EditTodo() {
    const [input,setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    const id = useSelector(state => state.id)
    const text = useSelector(state => state.text)
    const editAvailable = useSelector(state => state.edit)

    return (
        <form onSubmit={addTodoHandler} className={`space-x-3 mt-12 ${editAvailable?"":"hidden"}`}>
          <input
            type="text"
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Edit your Todo..."
            value={text}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Edit Todo
          </button>
        </form>
      )
}

export default EditTodo;