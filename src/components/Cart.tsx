"use client";

import { useCart, useUser } from "@/services/queries";

export default function Cart() {
  const userQuery = useUser();
  const cartQuery = useCart();

  return (
    <div>
      <div className="text-sm font-light text-center mb-4">
        <p>Chainer or Dependable Queries</p>
        <p>After checking if there is user, then we fetch total cost.</p>
      </div>
      <p>Username: {userQuery.isLoading ? "Loading..." : userQuery.data?.userName}</p>
      <p>
        Total Cart Cost:{" "}
        {cartQuery.data
          ? cartQuery.data?.totalCost
          : cartQuery.isLoading
          ? "Loading"
          : "No user found!"}
      </p>
    </div>
  );
}
