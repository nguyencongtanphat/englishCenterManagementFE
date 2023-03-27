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
import ClassesDashboardPage from './modules/classesPage/screens/ClassesDashboardPage';
import ClassesHomeworkPage from './modules/classesPage/screens/ClassesHomeworkPage';
import ClassesAttendantPage from './modules/classesPage/screens/ClassesAttendantPage';
import ClassesPeriodicTestsPage from './modules/classesPage/screens/ClassesPeriodicTestsPage';


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
      },
      {
        path: "classes/classesDashboard",
        element: <ClassesDashboardPage/>
      },
      {
        path: "classes/attendant",
        element: <ClassesAttendantPage/>
      },
      {
        path: "classes/periodictests",
        element: <ClassesPeriodicTestsPage/>
      },
      {
        path: "classes/homework",
        element: <ClassesHomeworkPage/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);

