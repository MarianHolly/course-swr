// for mutations

import { axiosInstance } from "./fetcher";

// function for changing state on server
// (post, put, delete requests)

export const createProduct = async (url: string, { arg }: { arg: { title: string } }) => {
  await axiosInstance.post(url, { title: arg.title });
};
