import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import MostRecent from './components/MostRecent';
import Navigation from './components/Navigation';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <MostRecent/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
