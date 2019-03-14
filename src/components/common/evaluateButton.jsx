import React from "react";

const EvaluateButton = ({ evaluateResults }) => {
  return (
    <button className="btn btn-lg btn-info m-3" onClick={evaluateResults}>
      Finish
    </button>
  );
};

export default EvaluateButton;
