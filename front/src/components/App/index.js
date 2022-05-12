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
import Signup from '../Signup/signup';


function App() {
  return (
    <div>
    <Switch>
    <Route path="/" exact component={Homepage} />
    <Route path="/film/:id" component={OneMovie} />
    <Route path="/categorie/:id" component={OneCategory} />
    <Route path="/signup" component={Signup} />

    </Switch>
    </div>
  );
}

export default App;
