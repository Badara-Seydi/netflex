import React, { Component } from 'react';
import axios from 'axios';
import Suggestions from './Suggestions';



class Search extends Component {
  state = {
    query: '',
    results: [],
  }

  getInfo = () => {
    const  url = "http://api.themoviedb.org/3/search/movie?api_key=b79310e5c25643e20c05b842caaaee33&query="+`${this.state.query}`;
    axios.get(url)
      .then(({ data }) => {
        this.setState({
          results: data.results,
        } 
        );
        console.log("my fetch" +data)
        console.log(result)
      });
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value,
    }, () => {
      try {
        if (this.state.query && this.state.query.length > 1) {
          
            this.getInfo();
          
          console.log(this.state.query);
        }
      
      } catch (error) {
        console.log(error)
      }
    });
  }

  render() {
    return (
      <div className="search">

      <form className='search-films'>
        <input
          placeholder="Chercher un film..."
          className="search-input"
          ref={(input) => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form></div>
    );
  }
}

export default Search;
