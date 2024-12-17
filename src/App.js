import React from "react";
import "./App.css";
import LayOut from "./Components/LayOut/LayOut";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";

import { createBrowserRouter, RouterProvider } from "react-router";
let router = createBrowserRouter([
  {
    path: "",
    element: <LayOut />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
