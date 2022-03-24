import React from "react";
import { Link } from "react-router-dom";

export default function AppNavigationComponent() {
  return (
    <React.Fragment>
      <nav style={{ display: "flex" }}>
        <Link to={"/weather"} className="nav-link">
          <button className="navButtonStyle" type="button">
            Weather
          </button>
        </Link>
        <Link to={"/todostate-hooks"} className="nav-link">
          <button className="navButtonStyle" type="button">
            To Do Hooks
          </button>
        </Link>
        <Link to={"/todo-redux"} className="nav-link">
          <button className="navButtonStyle" type="button">
            To Do Redux
          </button>
        </Link>
        {/* <Link to={"/calculator"} className="nav-link">
          <button className="navButtonStyle" type="button">
            Calculator
          </button>
        </Link> */}
      </nav>
    </React.Fragment>
  );
}
