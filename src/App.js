import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Home from './pages/Home';

function App() { 
  return (
    <div>
      <Router>
        <h1>AppJS</h1>
        <Switch>
          <Route exact path="/" component={ Home } />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
