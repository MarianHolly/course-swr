import useSWR from "swr";

import { Cart, Post, Product, Todo, User } from "@/types/post";
import { logger } from "@/utils/logget";
import useSWRInfinite from "swr/infinite";

// Basic Queries
export function useUser() {
  return useSWR<User>("/user");
}

// Chainer or Dependable Queries
export function useCart() {
  // if i have this data, i have authenticated user
  const { data } = useUser();

  return useSWR<Cart>(data ? "/cart" : null);
}

// Mutations (with middleware)
export function useProducts() {
  return useSWR<Product[]>("/products", { use: [logger] });
}

// Pagination
export function usePosts(pageIndex: number) {
  return useSWR<Post[]>(`/posts?_limit=3&_page=${pageIndex}`);
}

export function useTodos() {
  const getKey = (pageIndex: number, prevPageData: Todo[]) => {
    if (prevPageData && !prevPageData.length) return null;
    return `todos?_page=${pageIndex}&_limit=4`;
  };

  return useSWRInfinite<Todo[]>(getKey);
}
