import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

import Header from '../Header';

class OneMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      movie: [],
      title: this.props.match.params.title,
      categories: [],

    };
  }

  async componentDidMount() {
    try { // Simple GET request using axios
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=b79310e5c25643e20c05b842caaaee33&language=fr-FR`);
      this.setState({ movie: response.data});
      console.log(response);
    }
    catch (error) {
      console.log(error);
    }
  }

  render()
  {
    return (
      <div className="myRecipe_container">
        <Header />
        <div className="Recette_flip_container">

          <h2 className="Recipe_title">{this.state.movie.title}</h2>
          <p>Catégorie : {this.state.movie.title}</p>

          <img src={`https://image.tmdb.org/t/p/w185/${this.state.movie.poster_path}`} />
          <p>Date de sortie : {this.state.movie.release_date}</p>
                                <p>Note : {this.state.movie.vote_average} / 10</p>
                                <p>Popularité : {this.state.movie.popularity} likes</p>
                                <p>Budget : {this.state.movie.budget} $</p>
                                <p>Résumé : {this.state.movie.overview}</p>

                                <p>Appartient à : {this.state.movie.title}</p>



        </div>
      </div>

    );
  } 
}

export default OneMovie;
