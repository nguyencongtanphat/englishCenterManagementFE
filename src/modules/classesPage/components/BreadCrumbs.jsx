import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";
import { faChevronRight } from "@fortawesome/fontawesome-free-solid";

const routes = [
  { path: "/classes", breadcrumb: "Class List" },
  { path: "/classes/:className", breadcrumb: "Class Detail" },
  { path: "/classes/:className/dashboard", breadcrumb: "Dashboard" },
  { path: "/classes/:className/attendant", breadcrumb: "Attendant" },
  { path: "/classes/:className/periodic-test", breadcrumb: "Periodic Test" },
  { path: "/classes/:className/homework", breadcrumb: "Homework" },
];

function BreadCrumbs() {
  const breadcrumbs = useReactRouterBreadcrumbs(routes);
  console.log(breadcrumbs);

  return (
    <nav>
      {breadcrumbs.map(({ match, breadcrumb }, index) => (
        <>
          <Link
            key={match.pathname}
            to={match.pathname}
            className="me-3"
          >
            {breadcrumb}
          </Link>
          {!(index === breadcrumbs.length - 1) && (
            <FontAwesomeIcon icon={faChevronRight} className="me-3"></FontAwesomeIcon>
          )}
        </>
      ))}
    </nav>
  );
}

export default BreadCrumbs;
