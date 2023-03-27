import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Root';
import ErrorPage from './modules/errorPage/ErrorPage';
import HomePage from './modules/homePage/screens/HomePage';
import ClassesPage from './modules/classesPage/screens/ClassesPage';
import ClassDetailPage from './modules/classesPage/screens/ClassDetailPage';
import ClassDetailRoot from './modules/classesPage/components/ClassDetailRoot';
import ClassDashboard from './modules/classesPage/screens/ClassDashboard';
import ClassAttendant from './modules/classesPage/screens/ClassAttendant';
import ClassPeriodicTest from './modules/classesPage/screens/ClassPeriodicTest';
import ClassHomework from './modules/classesPage/screens/ClassHomework';
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
        children: [
          {
            index: true,
            path: "",
            element: <ClassesPage/>
          },
          {
            path: "addclasses",
            element: <ClassesAdd />
          },
          {
            path: ":className",
            element: <ClassDetailRoot />,
            children: [
              {
                path: 'dashboard',
                element: <ClassDashboard/>
              }, 
              {
                path: 'attendant',
                element: <ClassAttendant/>
              },
              {
                path: 'periodic-test',
                element: <ClassPeriodicTest/>
              },
              {
                path: 'homework',
                element: <ClassHomework/>
              },
            ]
          }
        ]
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);

