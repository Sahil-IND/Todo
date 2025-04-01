import { useState, useEffect, useContext } from 'react'
import { TodoProvider, TodoContext, useTodo } from './Context'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }])
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
    const storedTodos = JSON.parse(localStorage.getItem("todos"))
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}>
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 min-h-screen p-4 flex items-start justify-center md:items-center">
        <div className="w-full max-w-md">
          <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl shadow-lg border border-slate-600/30 p-4">
            <h1 className="text-xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Tasks To Perform
            </h1>
            <div className="mb-4">
              <TodoForm />
            </div>
            <div className="space-y-2 max-h-[60vh] overflow-y-auto">
              {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App