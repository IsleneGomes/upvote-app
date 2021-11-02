import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import Login from './pages/Login/index';

import './mock';
import AllRotes from './routes/AllRotes';

function App() { 
  return (
    <BrowserRouter>
      <AllRotes />
    </BrowserRouter>
  )
}

export default App;
