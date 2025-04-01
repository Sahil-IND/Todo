import { useState, useEffect } from 'react'
import './App.css'
import { TodoProvider } from './Context'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'

function App() {
  // ... (keep all your existing state and effect hooks)

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}>
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 min-h-screen py-4 transition-colors duration-300 flex items-start justify-center px-3">
        <div className="w-full max-w-md">
          <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-slate-600/30">
            <div className="p-4">
              <h1 className="text-xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Manage Your Todos
              </h1>
              <div className="mb-4">
                <TodoForm />
              </div>
              <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
                {todos.map((todo) => (
                  <div key={todo.id} className="w-full transition-all duration-200">
                    <TodoItem todo={todo} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App