import React, { useState } from 'react'
import { useTodo } from '../Context';

function TodoItem({ todo }) {
    // ... (keep all your existing state and handler functions)

    return (
        <div
            className={`flex items-center border border-slate-600/50 rounded-lg px-3 py-2 gap-x-2 ${
                todo.completed ? "bg-slate-700/30" : "bg-slate-700/70"
            }`}
        >
            <input
                type="checkbox"
                className="w-4 h-4 rounded border-slate-600 bg-slate-800 text-cyan-500 cursor-pointer"
                checked={todo.completed}
                onChange={toggle}
            />
            <input
                type="text"
                className={`flex-1 outline-none bg-transparent rounded-lg px-1 text-slate-200 border text-sm ${
                    isTodoEditable 
                        ? "border-slate-500/50" 
                        : "border-transparent"
                } ${todo.completed ? "line-through text-slate-500" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            <button
                className={`p-1 rounded-lg text-sm ${
                    todo.completed 
                        ? "text-slate-500 cursor-not-allowed" 
                        : isTodoEditable 
                            ? "bg-cyan-600/20 text-cyan-400" 
                            : "bg-slate-600/30 text-slate-300"
                }`}
                onClick={() => {
                    if (todo.completed) return;
                    if (isTodoEditable) {
                        editTodo();
                    } else {
                        setisTodoEditable(true);
                    }
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "✓" : "✎"}
            </button>
            <button
                className="p-1 rounded-lg text-sm bg-rose-600/20 text-rose-400"
                onClick={() => deleteTodo(todo.id)}
            >
                ×
            </button>
        </div>
    );
}

export default TodoItem;