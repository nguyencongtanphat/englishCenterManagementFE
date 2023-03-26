import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Root';
import ErrorPage from './modules/errorPage/ErrorPage';
import HomePage from './modules/homePage/screens/HomePage';
import ClassesPage from './modules/classesPage/screens/ClassesPage';
import ClassesAdd from './modules/classesPage/components/ClassesAdd';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "classes",
        element: <ClassesPage/>
      },
      {
        path: "classes/addclasses",
        element: <ClassesAdd/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);

