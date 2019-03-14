import React from "react";
import { Link } from "react-router-dom";

const ScoreCardButton = ({ username, options, filteredResult, result }) => {
  return (
    <Link
      className="btn btn-lg btn-warning m-3"
      to={{
        pathname: "/result",
        state: {
          username: username,
          options: options,
          filteredResult: filteredResult,
          result: result
        }
      }}
    >
      View Score Card
    </Link>
  );
};

export default ScoreCardButton;
