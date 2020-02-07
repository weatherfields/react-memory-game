import React from "react";
import "./Guitar.css";

function Guitar(props) {
  // return the JSX. Use className to avoid warnings.
  // everything gets wrapped in the parent element .. in this case container. Otherwise the app will FAIL TO LOAD AT ALL.
  // try changing container to React.Fragment later on for fun.
  // clickFunction is a placeholder for later. Will rename later also.
  return (
    <div className="container">
      <div className="gtr" onClick={() => props.clickFunction(props.id)}>
        <div className="gtr-container">
          <img src={props.image} alt={props.name} />
        </div>
      </div>
    </div>
  );
}

export default Guitar;
