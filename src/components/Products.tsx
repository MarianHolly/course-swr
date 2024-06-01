"use client";

import { ChangeEvent, useState } from "react";
import { useProducts } from "@/services/queries";
import { axiosInstance } from "@/services/fetcher";
import { useCreateProduct } from "@/services/mutations";

export default function Products() {
  const { data, mutate, isValidating } = useProducts();
  const { trigger, isMutating } = useCreateProduct();

  const [inputValue, setInputValue] = useState("");

  const handleUpdateInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCreateProduct = async () => {
    // First Option (not recommmended)
    // await axiosInstance.post("/products", { title: inputValue });
    // mutate()
    trigger(
      { title: inputValue },
      // optimize UI
      {
        optimisticData: data && [...data, { title: `${inputValue} (optimistic data)` }],
        rollbackOnError: true,
      }
    );
  };

  return (
    <div>
      <div className="text-sm font-light text-center mb-4">
        <p>Mutations</p>
        <p></p>
      </div>
      <p>Products</p>
      <div className="my-2">
        <input
          className="border m-2 rounded-md p-1"
          placeholder="Product title"
          value={inputValue}
          onChange={handleUpdateInputValue}
        />
        <button
          className="border rounded-md p-1 hover:bg-slate-200 disabled:opacity-25"
          onClick={handleCreateProduct}
          disabled={isMutating || isValidating}
        >
          {isMutating || isValidating ? "Creating..." : "Create Product"}
        </button>
      </div>
      <ul>
        {data?.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}
