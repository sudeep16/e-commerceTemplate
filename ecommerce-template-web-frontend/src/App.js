import React from "react";
import "./App.css";
import Home from "./Home.js";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" exact component={Home} />
          <Route path="/productDetail" component={ProductDetailPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
