import React, { useState } from 'react'
import { useTodo } from '../Context';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault();
        if (!todo) return
        addTodo({ id: Date.now(), todo, completed: false })
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex gap-2 w-full">
            <input
                type="text"
                placeholder="Write Todo..."
                className="flex-1 border border-slate-600 rounded-lg px-3 py-2 outline-none bg-slate-700/50 text-slate-200 focus:border-cyan-500/50 placeholder-slate-500 text-sm"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button 
                type="submit" 
                className="px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium active:scale-95 text-sm whitespace-nowrap"
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;