import React, { useState } from 'react'
import { useTodo } from '../Context';

function TodoItem({ todo }) {
    const [isTodoEditable, setisTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const { deleteTodo, toggleComplete, updateTodo } = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg });
        setisTodoEditable(false);
    };

    const toggle = () => {
        toggleComplete(todo.id);
    };

    return (
        <div
            className={`flex items-center border border-slate-600/50 rounded-lg px-4 py-3 gap-x-3 transition-all duration-200 ${
                todo.completed ? "bg-slate-700/30" : "bg-slate-700/70"
            }`}
        >
            <input
                type="checkbox"
                className="w-5 h-5 rounded border-slate-600 bg-slate-800 text-cyan-500 focus:ring-cyan-500 cursor-pointer transition-all"
                checked={todo.completed}
                onChange={toggle}
            />
            <input
                type="text"
                className={`flex-1 outline-none bg-transparent rounded-lg px-2 py-1 text-slate-200 border ${
                    isTodoEditable 
                        ? "border-slate-500/50 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30" 
                        : "border-transparent"
                } ${todo.completed ? "line-through text-slate-500" : ""}
                transition-all duration-200`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            <button
                className={`p-2 rounded-lg text-sm flex items-center justify-center transition-all duration-200 ${
                    todo.completed 
                        ? "text-slate-500 cursor-not-allowed" 
                        : isTodoEditable 
                            ? "bg-cyan-600/20 text-cyan-400 hover:bg-cyan-600/30" 
                            : "bg-slate-600/30 text-slate-300 hover:bg-slate-600/50"
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
                {isTodoEditable ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                )}
            </button>
            <button
                className="p-2 rounded-lg text-sm bg-rose-600/20 text-rose-400 hover:bg-rose-600/30 transition-all duration-200"
                onClick={() => deleteTodo(todo.id)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    );
}

export default TodoItem;