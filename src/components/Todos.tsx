"use client";

import { useTodos } from "@/services/queries";

export default function Todos() {
  const { data, setSize, size } = useTodos();

  if (!data) return "Loading...";

  return (
    <div>
      {data.map((todos) => {
        return todos.map((todo) => <div key={todo.id}>{todo.title}</div>);
      })}
      <button
        onClick={() => setSize(size + 1)}
        className="py-1 px-4 m-2 border border-slate-400 rounded-md hover:bg-slate-200 disabled:opacity-30"
      >
        Load More
      </button>
    </div>
  );
}
