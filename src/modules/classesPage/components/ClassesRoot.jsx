import React from "react";
import { Outlet, useParams } from "react-router";
import BreadCrumbs from "./BreadCrumbs";

function ClassesRoot() {
  const params = useParams();
  let name 
  if (params.className) name = params.className
  else name = 'Class List'

  return (
    <>
      <div>
        <BreadCrumbs />
        <h2 className="mt-3 mb-5">{name}</h2>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default ClassesRoot;
