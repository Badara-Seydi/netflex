// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import Catégories from './Catégories';
import Search from './Search';
import './style.scss';


// == Import

// == Composant
const Header = () => (
  <div className="header">
    <Link to="/"><h1 className="header-title">Netflex</h1></Link>
    <Search />
    <Catégories />
  </div>
);

// == Export
export default Header;
