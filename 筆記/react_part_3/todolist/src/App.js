import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Tolist from './components/tolist';

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path='/' component={Tolist} exact/>
    <Route path='/tolist' component={Tolist} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
