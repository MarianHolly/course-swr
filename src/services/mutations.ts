// mutations

import { createProduct } from "./api";
import { useProducts } from "./queries";
import useSWRMutation from "swr/mutation";

export function useCreateProduct() {
  const { mutate } = useProducts();

  return useSWRMutation("/products", createProduct, {
    onError() {
      console.log("Error");
    },
    onSuccess: () => {
      mutate();
    },
  });
}
