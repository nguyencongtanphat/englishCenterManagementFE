import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import classes from "./ClassDetailRoot.module.css";

function ClassDetailRoot() {
  return (
    <>
      <div className="bg-dark bg-opacity-10 p-3 rounded-4">
        <nav className={`${classes['class-navigator']} px-6`}>
          <ul className="list-unstyled d-flex justify-content-around gap-4">
            <li className="flex-grow-1 text-center">
              <NavLink
                to="dashboard"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li className="flex-grow-1 text-center">
              <NavLink
                to="attendant"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Attendant
              </NavLink>
            </li>
            <li className="flex-grow-1 text-center">
              <NavLink
                to="periodic-test"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Periodic Test
              </NavLink>
            </li>
            <li className="flex-grow-1 text-center">
              <NavLink
                to="homework"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Homework
              </NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  );
}

export default ClassDetailRoot;
