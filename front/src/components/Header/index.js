// == Import npm
import React from 'react';
import Catégories from './Catégories';
import Search from './Search';
import Title from './Title';
import './style.scss';
import User from './User/user';


// == Import

// == Composant
const Header = () => (
  <div className="header">
<User/>
<Title /> 
<Search />
<Catégories />
  </div>
);

// == Export
export default Header;
