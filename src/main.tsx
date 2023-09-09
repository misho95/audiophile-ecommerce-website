import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./page/home.page";
import Category from "./page/category";
import Product from "./page/product";
import CheckOut from "./page/checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/category/:category",
    element: <Category />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/checkout",
    element: <CheckOut />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
