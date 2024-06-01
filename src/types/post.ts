export type Post = {
  id: string;
  title: string;
};

export type Cart = {
  totalCost: string;
  products: string[];
};

export type User =
  | {
      userName: string;
    }
  | undefined;

export type Product = {
  id: number;
  title: string;
};

export type Todo = {
  id: number;
  checked: boolean;
  title: string;
  description: string;
};
