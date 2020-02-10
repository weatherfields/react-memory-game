import React from "react";
import "./Guitar.css";

// return the JSX. Use className to avoid warnings.
// everything gets wrapped in the parent element .. in this case container. Otherwise the app will FAIL TO LOAD AT ALL.
const Guitar = props => (
  <div className="container">
    <div className="gtr" onClick={() => props.clickState(props.id)}>
      <div className="gtr-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  </div>
);

export default Guitar;
