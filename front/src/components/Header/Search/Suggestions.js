import React from 'react'
import { Link } from 'react-router-dom';

const Suggestions = (props) => {
  const options = props.results.map(e => (
    <li key={e.id}>
    <Link to={`/film/${e.id}`}>
      <button> {e.title} </button>
      </Link>
    
    </li>
    
  ))
  return <ul>{options}</ul>
}

export default Suggestions
