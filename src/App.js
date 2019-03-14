import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import WelcomeScreen from "./components/welcomeScreen";
import Questions from "./components/questions";
import ScoreCard from "./components/scoreCard";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Switch>
          <Route path="/result" component={ScoreCard} />
          <Route path="/questions" exact component={Questions} />
          <Route path="/" exact component={WelcomeScreen} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  }
}

export default App;
