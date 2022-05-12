// == Import npm
import React from 'react';

// == Import
import './style.scss';
import PlayingNow from './PlayingNow';
import TopRated from './TopRated';
import UpcomingMovies from './UpcomingMovies';
import Header from '../Header';
import Signup from '../Signup/signup';

// == Composant
const Homepage = () => (
  <div className="app">
  <Header />
<PlayingNow />
<TopRated />
<UpcomingMovies />
  </div>
);

// == Export
export default Homepage;
