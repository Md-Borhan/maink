import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import JobDetails from "./components/JobDetails/JobDetails";
import Statics from "./components/Statics/Statics";
import AppliedJob from "./components/AppliedJob/AppliedJob";
import Blog from "./components/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const categoryResponse = await fetch("/category.json");
          const featuresResponse = await fetch("/features.json");
          const [categoryData, featuresData] = await Promise.all([
            categoryResponse.json(),
            featuresResponse.json(),
          ]);
          return { categoryData, featuresData };
        },
      },
      {
        path: "/jobDetails/:id",
        element: <JobDetails></JobDetails>,
        loader: async () => fetch("/features.json"),
      },
      {
        path: "/statistics",
        element: <Statics></Statics>,
        loader: async () => fetch("/marks.json"),
      },
      {
        path: "/appliedJobs",
        element: <AppliedJob></AppliedJob>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
