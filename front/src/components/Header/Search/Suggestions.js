import React from 'react'
import { Link, Redirect } from 'react-router-dom';

const Suggestions = (props) => {
  const options = props.results.map(r => (
    <li key={r.id}>
    <Link to={`/film/${r.id}`}>
      <button> {r.title} </button>
      </Link>
    
    </li>
    
  ))
  return <ul>{options}</ul>
}

export default Suggestions
