import { useState, useEffect } from 'react'
import './App.css'
import { TodoProvider } from './Context'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { ...todo }])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((val) => val.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((obj) => (obj.id === id ? { ...obj, completed: !obj.completed } : obj)))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}>
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 min-h-screen py-8 transition-colors duration-300 flex items-center justify-center">
        <div className="w-full max-w-2xl mx-4">
          <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-slate-600/30 transition-all duration-300 hover:shadow-slate-600/20">
            <div className="p-6">
              <h1 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Manage Your Todos
              </h1>
              <div className="mb-6">
                <TodoForm />
              </div>
              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                {todos.map((todo) => (
                  <div key={todo.id} className="w-full transition-all duration-200 hover:scale-[1.01]">
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