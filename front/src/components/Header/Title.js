// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';


// == Import

// == Composant
const Title = () => (
  <div className="title">
    <Link to="/"><ul>
    <li><span className="p-title"
    >N</span>
    </li>
    <li><span className="p-title">E</span>
    </li>
    <li><span className="p-title">T</span>
    </li>
    <li><span className="p-title">F</span>
    </li>
    <li><span className="p-title">L</span>
    </li>
    <li><span className="p-title">E</span>
    </li>
    <li><span className="p-title">X</span>
    </li>
  </ul></Link>
   
  </div>
);

// == Export
export default Title;
