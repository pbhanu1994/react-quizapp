import React from "react";
import { Link } from "react-router-dom";

const username = prompt("What's your name?", "");

const WelcomeScreen = () => {
  return (
    <div className="jumbotron m-3">
      <center>
        <h1 className="display-4">QuizApp!</h1>
        <h2>Hello, {username}!</h2>

        <p className="lead">This is a simple React Front-end application</p>
        <hr className="my-4" />
        <p>
          Watchout! The questions you are going to answer are picked random from
          Internet.
        </p>
        <h4> Are you excited?</h4>
        <Link
          to={{
            pathname: "/questions",
            state: {
              username: username
            }
          }}
          className="btn btn-info btn-lg"
        >
          Get Started
        </Link>
      </center>
    </div>
  );
};

export default WelcomeScreen;
