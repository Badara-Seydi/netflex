import React, { Component } from 'react';
import axios from 'axios';
import Suggestions from './Suggestions';

class Search extends Component {
  state = {
    query: '',
    results: [],
  }

  getInfo = () => {
    axios.get(`https://api.themoviedb.org/3/search/movie?query=${this.state.query}&api_key=b79310e5c25643e20c05b842caaaee33&language=fr-FR&page=1`)
      .then(({ data }) => {
        this.setState({
          results: data.data.results,
        });
      });
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value,
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo();
        }
      }
      else if (!this.state.query) {
      }
    });
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={(input) => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    );
  }
}

export default Search;
