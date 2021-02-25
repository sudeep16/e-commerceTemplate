import React from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar.js";
import CategoryNavbar from "./Navbar/CategoryNavbar.js";
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
