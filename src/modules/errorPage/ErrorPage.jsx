import React from 'react'
import Button from "react-bootstrap/Button";

import errorImg from "../../assets/images/global/error.png"

function ErrorPage() {
  return (
    <div className="text-center">
      <img className="w-3/4 " src={errorImg} alt="errorimage" />
      <h3>Page not found</h3>
      <p>
        Oops! Looks like you followed a bad link. If you think this is a problem
        with us, please tell us.
      </p>
      <Button variant="primary">Go back home</Button>
    </div>
  );
}

export default ErrorPage