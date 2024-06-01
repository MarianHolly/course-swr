// fetching with useEffect
import Old from "@/components/Old";
// chained fetching with SWR
import Cart from "@/components/Cart";
// mutations with SWR
import Products from "@/components/Products";
// pagination
import Posts from "@/components/Posts";
import PostsWrapper from "@/components/PostsWrapper";
// infinite scroll
import Todos from "@/components/Todos";

export default function Home() {
  return (
    <div>
      <h1 className="text-center my-12">Course on SWR</h1>
      {/*
        <Old />
        <Cart />
        <Products />
        <PostsWrapper />
       */}
      <Todos />
    </div>
  );
}
