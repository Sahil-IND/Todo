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
                className="flex-1 border border-slate-600 rounded-lg px-3 md:px-4 py-2 md:py-3 outline-none duration-200 bg-slate-700/50 text-slate-200 focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/50 placeholder-slate-500 transition-all text-sm md:text-base"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button 
                type="submit" 
                className="px-3 md:px-5 py-2 md:py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95 text-sm md:text-base whitespace-nowrap"
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;