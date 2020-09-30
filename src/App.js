import React from 'react';
import Home from './components/home/home';
import Item from './components/item/item'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/search/:id">
          <Home/>
        </Route>
        <Route exact path="/search/:id/:page">
          <Home/>
        </Route>
        <Route path="/item/:id">
          <Item/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
