import React, { Fragment } from "react";
import Animated from "../components/animated";

const PageNotFound = () => {
  return (
    <Animated>
      <Fragment>
        <h1>404</h1>
        <h2>
          <span id="coming">page not found</span>
        </h2>
      </Fragment>
    </Animated>
  );
};

export default PageNotFound;
