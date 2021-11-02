import React from 'react';
import Home from '../pages/Home/index';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';

export default function AllRotes() {
  return (
    <Switch>
      <Route exact path='/' component ={ Login } />
      <Route exact path='/home' component ={ Home } />
      <Route exact path='*' component ={<h1>Not Found</h1>} />
    </Switch>
  )
}
