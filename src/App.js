import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from './components/Header';
import Add from './components/Add';
import Watchlist from './components/Watchlist';
import Watched from './components/Watched';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Watchlist />
        </Route>

        <Route path="/watched">
          <Watched />
        </Route>

        <Route path="/add">
          <Add />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
