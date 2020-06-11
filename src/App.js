import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/home.component";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CollectionDetail from "./components/Details/collection-detail.component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/detail/:id" component={CollectionDetail} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
