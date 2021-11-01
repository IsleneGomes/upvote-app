import React from 'react';
import Home from './pages/Home/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/index';

function App() { 
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component ={ Home } />
        <Route exact path='/login' component ={ Login } />
        <Route exact path='*' component ={<h1>Not Found</h1>} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
