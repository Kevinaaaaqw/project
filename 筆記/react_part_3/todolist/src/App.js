import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Tolist from './components/tolist';
import TodoCreate from './components/todoCreate';
import TodoEdit from './components/todoEdit';
import TodoDelete from './components/todoDelete';

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path='/' component={Tolist} exact/>
    <Route path='/tolist' component={Tolist} exact/>
    <Route path='/tolist/todoCreate' component={TodoCreate} />
    <Route path='/tolist/edit/:id' component={TodoEdit} />
    <Route path='/tolist/TodoDelete/:id' component={TodoDelete} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
