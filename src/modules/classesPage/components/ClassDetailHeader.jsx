import React from "react";
import { useParams } from "react-router";
import BreadCrumbs from "./BreadCrumbs";

function ClassDetailHeader() {
  const params = useParams();
  const name = params.className;

  return (
    <>
      <BreadCrumbs/>
      <h2 className="mt-3 mb-5">{name}</h2>
    </>
  );
}

export default ClassDetailHeader;
