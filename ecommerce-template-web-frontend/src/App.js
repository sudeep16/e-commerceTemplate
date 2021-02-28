import React from "react";
import "./App.css";
import Home from "./Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
