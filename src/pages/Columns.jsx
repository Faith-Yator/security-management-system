import React from "react";
import "./Columns.css";
import Home from "./Home";
import HomeSecurity from "./HomeSecurity";
import SignupButton from "./signup";

const Columns = () => {
  return (
    <div className="columns-container">
      <div className="column">
        <HomeSecurity />
      
      </div>
      
    </div>
  );
};

export default Columns;
