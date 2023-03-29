import React from "react";
import { Outlet, useLocation, useParams } from "react-router";
import BreadCrumbs from "./BreadCrumbs";

function ClassesRoot() {
  let name
  const params = useParams();
  const location = useLocation()
  const pathname = location.pathname
  
  if (params.className) name = params.className
  else if (pathname.includes('add')) name = 'Add class'
  else name = 'Classes List'

  return (
    <div className="px-3">
      <div>
        <BreadCrumbs />
        <h2 className="mt-3 mb-5">{name}</h2>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default ClassesRoot;
