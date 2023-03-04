import React from 'react';
import axios from 'axios';
import {Link} from 'react';

import Header from '../Header';

class OneMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      movie: [],
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
      <div>
        <Header />
        <div className="movie-container">
          <h2 className="title"><span>{this.state.movie.title}</span></h2>
          <p className="movie-category"><span>Titre :</span> {this.state.movie.title}</p>

          <img className="movie-img" src={`https://image.tmdb.org/t/p/w185/${this.state.movie.poster_path}`} />
          <p className="movie-release"><span>Date de sortie :</span> {this.state.movie.release_date}</p>
                                <p className="movie-average"><span>Note :</span> {this.state.movie.vote_average} / 10</p>
                                <p className="movie-popularity"><span>Popularité </span>: {this.state.movie.popularity} likes</p>
                                <p className="movie-budget"><span>Budget :</span> {this.state.movie.budget} $</p>
                                <p className="movie-resume"><span>Résumé :</span> {this.state.movie.overview}</p>


      </div></div>

    );
  } 
}

export default OneMovie;
