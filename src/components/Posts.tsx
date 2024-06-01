"use client";

import { usePosts } from "@/services/queries";

// Pagination
export default function Posts({pageIndex} : {pageIndex: number}) {
  const { data, isLoading, error } = usePosts(pageIndex);

  if (isLoading)
    return <p className="text-center my-12 text-3xl font-semibold text-slate-600">Loading...</p>;
  
  if (error) return <p className="text-center my-12 text-3xl font-semibold text-rose-600">Error</p>;

  return (
    <div>
      {data?.map((post) => (
        <div key={post.id}>
          <p>
            Title: <span className="font-medium">{post.title}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
