import React, { useState } from "react";
import { useTodo } from "../Context";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ id: Date.now(), todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex shadow-md">
      <input
        type="text"
        placeholder="Write a todo..."
        className="w-full border-none px-4 py-2 rounded-l-xl outline-none bg-[#334155] text-white placeholder-gray-400"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-r-xl text-white font-bold transition-all duration-200"
      >
        ➕
      </button>
    </form>
  );
}

export default TodoForm;




