import React, { useState } from 'react'
import { useTodo } from '../Context'

function TodoForm() {
    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!todo.trim()) return
        addTodo({ todo, completed: false })
        setTodo("")
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full">
            <input
                type="text"
                placeholder="Write Todo..."
                className="flex-1 border border-slate-600 rounded-lg px-3 py-2 bg-slate-700/50 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button 
                type="submit" 
                className="sm:w-auto w-full px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium text-sm whitespace-nowrap"
            >
                Add
            </button>
        </form>
    )
}

export default TodoForm