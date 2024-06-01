"use client";

import { useState } from "react";
import Posts from "./Posts";

export default function PostsWrapper() {
  const [pageIndex, setPageIndex] = useState(1);

  return (
    <div>
      <Posts pageIndex={pageIndex} />
      <div style={{ display: "none" }}>
        {/* We can pre-render next page so loading would not take place! */}
        <Posts pageIndex={pageIndex + 1} />
      </div>
      <button
        onClick={() => setPageIndex(pageIndex - 1)}
        className="py-1 px-4 m-2 border border-slate-400 rounded-md hover:bg-slate-200 disabled:opacity-30"
      >
        Prev
      </button>
      <button
        onClick={() => setPageIndex(pageIndex + 1)}
        className="py-1 px-4 m-2 border border-slate-400 rounded-md hover:bg-slate-200"
      >
        Next
      </button>
    </div>
  );
}
