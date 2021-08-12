import React, { useState } from 'react';
import 'regenerator-runtime/runtime';

import {
  Route,
  Router,
  Switch,
} from 'react-router-dom';

import Homepage from '../Homepage';
import OneMovie from '../OneMovie';
import OneCategory from '../OneCategory';
function App() {
  return (
    <div>
    <Switch>
    <Route path="/" exact component={Homepage} />
    <Route path="/film/:id" component={OneMovie} />
    <Route path="/categorie/:id" component={OneCategory} />


    </Switch>
    </div>
  );
}

export default App;
