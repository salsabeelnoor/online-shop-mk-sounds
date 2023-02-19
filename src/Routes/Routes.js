import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Home from "../Pages/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);
