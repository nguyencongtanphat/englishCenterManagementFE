import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./modules/errorPage/ErrorPage";
import HomePage from "./modules/homePage/screens/HomePage";
import ClassesPage from "./modules/classesPage/screens/ClassesPage";
import ClassDetailRoot from "./modules/classesPage/components/ClassDetailRoot";
import ClassDashboard from "./modules/classesPage/screens/ClassDashboard";
import ClassAttendant from "./modules/classesPage/screens/ClassAttendant";
import ClassPeriodicTest from "./modules/classesPage/screens/ClassPeriodicTest";
import ClassHomework from "./modules/classesPage/screens/ClassHomework";
import ClassesAdd from "./modules/classesPage/components/ClassesAdd";
import StudentsPage from "./modules/studentsPage/screens/StudentsPage";
import ClassesRoot from "./modules/classesPage/components/ClassesRoot";
import NewStudent from "./modules/studentsPage/screens/NewStudent";
import StudentDetails from "./modules/studentsPage/screens/StudentDetails";
import Login from './modules/loginPage/Login';
import NewTeacher from './modules/teachersPage/NewTeacher';
import TeachersPage from "./modules/teachersPage/screens/TeachersPage";
import TeacherDetail from "./modules/teachersPage/screens/TeacherDetail";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { Counter } from "./features/counter/Counter";

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
        path: "counter",
        element: <Counter />,
        errorElement: <ErrorPage />,
      },
      {
        path: "classes",
        element: <ClassesRoot />,
        children: [
          {
            index: true,
            path: "",
            element: <ClassesPage />,
          },
          {
            path: "addclasses",
            element: <ClassesAdd />,
          },
          {
            path: ":className",
            element: <ClassDetailRoot />,
            children: [
              {
                index: true,
                element: <ClassDashboard />,
              },
              {
                path: "dashboard",
                element: <ClassDashboard />,
              },
              {
                path: "attendant",
                element: <ClassAttendant />,
              },
              {
                path: "periodic-test",
                element: <ClassPeriodicTest />,
              },
              {
                path: "homework",
                element: <ClassHomework />,
              },
            ],
          },
        ],
      },
      {
        path: "students",
        element: <StudentsPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "newteacher",
        element: <NewTeacher />,
      },
      {
        path: "students/new",
        element: <NewStudent />,
      },
      {
        path: "students/details",
        element: <StudentDetails />,
      },
      {
        path: "teachers",
        element: <TeachersPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
